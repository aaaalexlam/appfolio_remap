const vendorLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger'));
const columns = vendorLedgerObject.vendorLedger.columns;

generateSearchCheckBoxes();

function generateSearchCheckBoxes() {

    let columnsContnet = '';
    let headerComponent = '';

    const searchCheckboxes = document.getElementById("search_checkboxes");
    const reportTableHeader = document.getElementById("report_table_header");

    columns.forEach(column => {

        columnsContnet +=
            `
        <div>
            <label>
                <input type="checkbox" name="" id="" value=${toSnakeCase(column.name)}>
                <span>${column.name}</span>
            </label>
        </div>
    `;

        headerComponent +=
        `
            <th style='width:100px; display:none;' id='report_table_header_${toSnakeCase(column.name)}'>
                <p>${column.name}</p>
                <div class="resizer"></div>
            </th>
        `;

    });
    searchCheckboxes.innerHTML += columnsContnet;
    reportTableHeader.innerHTML += headerComponent;
}

const checkboxes = document.querySelectorAll('#search_checkboxes input[type="checkbox"]');
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            showColumn(checkbox.value);
        } else {
            hideColumn(checkbox.value);
        }
    });
});

function hideColumn(key) {
    document.getElementById(`report_table_header_${key}`).style.display = 'none';;
}

function showColumn(key) {
    document.getElementById(`report_table_header_${key}`).style.display = 'table-cell';
}

function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}