
// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;

const { billComponent, receiptsComponent } = window;

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
        document.getElementById(`${tablePrefix}custom_search_summary_glAccounts`).innerText = formatSelectedGLAccount(selectedGlAccounts);
        document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = dateRange;
        document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
        document.getElementById(`${tablePrefix}custom_search_summary_lastEditedRange`).innerText = lastEditDateRange;

        document.getElementById(`${tablePrefix}modal`).style.display = "none";

        initTable();

        // init hideable row
        document.querySelectorAll('.hideable_row_header').forEach(header => {
            header.addEventListener('click', () => {
                const glAcId = header.closest('[data-gl-account-id]').getAttribute('data-gl-account-id');
                const content = document.getElementById(`content_${glAcId}`);
                if (content) {
                    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
                }
            });
        });
    }


});

function initTable() {
    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert
    const merged = initData();
    const keyList = Object.keys(merged);

    const filteredGlAccounts = glAccounts.filter(item => keyList.includes(item.id));

    // loop by gl account
    let totalNetBalance = 0;
    for (const glAccount of filteredGlAccounts) {
        if (glAccount.order.length !== 0) continue;

        const glAccountBills = merged[glAccount.id];

        // sum the net change, balance for each gl account
        let startingBalanceByGlAccount = 100;
        let totalNetChangeByGlAccount = glAccountBills.reduce((sum, entry) => sum + parseInt(entry.balance * 100), 0) / 100;
        let totalBalanceByGlAccount = startingBalanceByGlAccount + totalNetChangeByGlAccount;
        
        totalNetBalance += totalBalanceByGlAccount;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccount.id}_btn`;
        wrapper.setAttribute('data-gl-account-id', glAccount.id);
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount);
        
        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);

    let totalCredit = 0;
    let totalDebit = 0;
    for (const records of Object.values(merged)) {
        for (const item of records) {
            const credit = parseFloat(item.credit.toString().replace(/,/g, '')) || 0;
            const debit = parseFloat(item.debit.toString().replace(/,/g, '')) || 0;
            totalDebit += debit;
            totalCredit += credit;
        }
    }

    // Get total length for each key
    const totalResult = Object.values(merged).reduce((sum, arr) => sum + arr.length, 0);
    table.innerHTML += getSummaryRow(displayedColumns, totalResult, totalDebit, totalCredit, totalNetBalance);
}

function initData() {
    const groupedSources = [
        groupByCashAccountForBill(billComponent.data),
        groupByGLAccountForBill(billComponent.data),
        groupByCashAccountForReceipt(receiptsComponent.data),
        groupByGLAccountForReceipt(receiptsComponent.data),
    ];

    // Collect all unique keys
    const allKeys = new Set();
    groupedSources.forEach(group =>
        Object.keys(group).forEach(key => allKeys.add(key))
    );
    // Merge values from all groups under each key
    const merged = {};
    for (const key of allKeys) {
        merged[key] = groupedSources.flatMap(group => group[key] || []);
    }

    return merged;
}