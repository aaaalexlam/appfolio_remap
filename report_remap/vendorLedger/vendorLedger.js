const tablePrefix = 'vendor_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger'));
const columns = generalLedgerObject.vendorLedger.columns;
const displayedColumns = columns.filter(item => item.display === true);

const customization = generalLedgerObject.vendorLedger.customization;
const glAccounts = window.glAccountComponent.glCodeData;

// init html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {

    initCustomizationForm(customization, tablePrefix);
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initResizeColumn();

    document.getElementById(`${tablePrefix}post_form_btn`).onclick = function () {

        const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
        const selectedPayee = document.getElementById(`${tablePrefix}payee_input`).value;
        const dateRange = getSelectedBillDateRange(tablePrefix);
        const showReversedTransactions = isChecked("showReversedTransactions", tablePrefix);

        document.getElementById(`${tablePrefix}custom_search_summary_payee`).innerText = selectedPayee;
        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formatCustomSearchStr(`custom_search_summary_properties`, selectedProperties);
        document.getElementById(`${tablePrefix}custom_search_summary_billDateRange`).innerText = dateRange;
        document.getElementById(`${tablePrefix}custom_search_summary_showReversedTransactions`).innerText = showReversedTransactions;
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
    for (const glAccount of filteredGlAccounts) {
        if (glAccount.order.length !== 0) continue;

        const glAccountBills = merged[glAccount.id];

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccount.id}_btn`;
        wrapper.setAttribute('data-gl-account-id', glAccount.id);
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns);

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);

    // Get total length for each key
    const totalResult = Object.values(merged).reduce((sum, arr) => sum + arr.length, 0);
    table.innerHTML += getSummaryRow(displayedColumns, totalResult, 0, 0);
}

function initData() {
    const groupedSources = [
        groupByCashAccountForBill(billComponent.data),
        groupByGLAccountForBill(billComponent.data),
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