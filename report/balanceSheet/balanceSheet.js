const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization;

generateCustomizationForm();
generateSearchCheckBoxes();

document.getElementById('balance_sheet_post_form_btn').onclick = function () {

    const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
    const dateTime = document.getElementById("as_of_radio_input_date").checked ? document.getElementById('as_of_date').value : document.getElementById('as_of_select_date').value;
    const accountingBasis = document.getElementById("accounting_basis").value;
    const selectedRadio = document.querySelector('input[name="level_of_detail"]:checked').value;

    document.getElementById('custom_search_summary_properties').innerText = formatCustomSearchStr("custom_search_summary_properties", selectedProperties);
    document.getElementById('custom_search_summary_asOf').innerText = dateTime;
    document.getElementById('custom_search_summary_accounting_basis').innerText = accountingBasis;
    document.getElementById('custom_search_summary_level_of_detail').innerText = formatCustomSearchStr("custom_search_summary_level_of_detail", selectedRadio);
};

function generateCustomizationForm() {
    const propertiesElement = document.getElementById("modal");
    propertiesElement.classList.add("modal");
    let customizationComponents = '';
    customizationComponents += `
        <div class="custom_search_container"> 
            <table> 
                <tr> 
                    <th>Customize Report</th> 
                </tr>
        `;
    customization.forEach(key => {
        const html = getComponentByKey(key);
        if (html) {
            customizationComponents += html;
        }
    });

    customizationComponents +=
        `
                <tr class="tr-single-right">
                    <td><button id='balance_sheet_post_form_btn' class="default_btn" type="submit">Update</button></td>
                </tr>
            </table>
        </div>
    `
    propertiesElement.innerHTML = customizationComponents;

    customization.forEach(key => {
        addEventListenerBykey(key);
    });
}

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
                <input type="checkbox" name="" id="" ${column.display ? 'checked' : ''} value=${toSnakeCase(column.name)}>
                <span>${column.name}</span>
            </label>
        </div>
    `;

        headerComponent +=
            `
            <th style="width:100px;  ${column.display ? 'table-cell;' : 'display:none;'}" id='report_table_header_${toSnakeCase(column.name)}'>
                ${column.name}
                <div class="resizer">
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
