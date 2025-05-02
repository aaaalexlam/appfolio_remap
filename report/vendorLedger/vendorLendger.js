// get the customization components
const vendorLedgerComponents = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger')).vendorLedger;
const columns = vendorLedgerComponents.columns;
const customization = vendorLedgerComponents.customization;

document.addEventListener("DOMContentLoaded", function () {
    initTable();
});


function initTable() {
    const table = document.getElementById("main_container");
    const columnCheckbox = document.getElementById("column_checkbox");

    columns.forEach((column) => {
        table.innerHTML += columnHeaderTemplate(column.name);
        columnCheckbox.innerHTML += columnCheckboxTemplate(column.name);
    });

    initResizeColumn();
}
