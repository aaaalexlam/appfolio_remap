const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));

console.log(balanceSheetObject)
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization;


generateCustomizationForm();
generateSearchCheckBoxes();


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
                    <td><button id='post_form_btn' class="default_btn">Update</button></td>
                </tr>
            </table>
        </div>
    `
    propertiesElement.innerHTML = customizationComponents
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
                <input type="checkbox" checked name="" id="" value=${toCamelCase(column.name)}>
                <span>${column.name}</span>
            </label>
        </div>
    `;

        headerComponent += `<th id='report_table_header_${toCamelCase(column.name)}'>${column.name} </th>`;

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
    document.getElementById(`report_table_header_${key}`).style.display = 'none';
    document.getElementById(`report_table_body_${key}`).style.display = 'none';
}

function showColumn(key) {
    document.getElementById(`report_table_header_${key}`).style.display = 'block';
    document.getElementById(`report_table_body_${key}`).style.display = 'block';
}

function toCamelCase(label) {
    return label
        .toLowerCase()
        .split(' ')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}


