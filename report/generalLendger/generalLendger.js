
// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;
const billList = groupByGlAccount(window.billComponent.data);

const displayedColumns = columns.filter(item => item.display === true);
const customization = generalLedgerObject.generalLedger.customization;

// get the glAccount data
const glAccounts = window.glAccountComponent.glCodeData;

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {
    initCustomizationForm(customization, tablePrefix);
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initResizeColumn();

    document.addEventListener('click', function (event) {
        // hide modal onClicked
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === `${tablePrefix}modal`) {
            document.getElementById(`${tablePrefix}modal`).style.display = "none";
        }
    });

    document.getElementById(`${tablePrefix}post_form_btn`).onclick = function () {
        const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
        const accountingBasis = document.getElementById(`${tablePrefix}accounting_basis`).value;
        const dateRange = getSelectedDateRange(tablePrefix);
        const selectedGlAccounts = Array.from(document.querySelectorAll('input[name="gl_account_checkbox"]:checked')).map(cb => cb.value);
        const lastEditDateRange = getSelectedLastEditDateRange(tablePrefix);
        const createdBy = document.getElementById(`${tablePrefix}created_by`).value;
        
        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formatCustomSearchStr(`custom_search_summary_properties`, selectedProperties);
        document.getElementById(`${tablePrefix}custom_search_summary_createdBy`).innerText = createdBy;
        document.getElementById(`${tablePrefix}custom_search_summary_glAccounts`).innerText = selectedGlAccounts;
        document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = dateRange;
        document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
        document.getElementById(`${tablePrefix}custom_search_summary_lastEditedRange`).innerText = lastEditDateRange;

        document.getElementById(`${tablePrefix}modal`).style.display = "none";

        initTable(dateRange);
    }

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }
});

function initTable(dateRange) {
    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert

    for (const glAccount of glAccounts) {
        if (glAccount.order.length !== 0) continue;

        const glAccountBills = billList[glAccount.id];

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccount.id}_btn`;
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns);

        // Use event delegation for better performance
        wrapper.querySelector('.hideable_row_header')?.addEventListener('click', (event) => {
            const content = document.getElementById(`content_${glAccount.id}`);
            if (content) {
                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            }
        });

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);
}

function groupByGlAccount(billList) {
    // Grouping logic
    const grouped = {};
    billList.forEach(entry => {

        entry.billDetails.forEach(detail => {
            const glId = detail.glAccountId;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }

            // map with columns key
            grouped[glId].push({
                "property": detail.propertyName,
                "date": entry.billDate,
                "payeeOrPayer": entry.payeeName,
                "type": "check",
                "reference": entry.reference,
                "credit": detail.amount < 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "debit": detail.amount > 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "balance": detail.amount,
                "description": detail.description,
            });
        });
    });
    return grouped;
}

