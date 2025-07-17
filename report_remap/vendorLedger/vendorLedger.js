const tablePrefix = 'vendor_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger'));
const columns = generalLedgerObject.vendorLedger.columns;
const customization = generalLedgerObject.vendorLedger.customization;

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
    }
 
});

function initTable() {
    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert
   
}