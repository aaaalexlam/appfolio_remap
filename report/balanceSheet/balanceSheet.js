// get the customization components
const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization;

// get the glAccount data
const balanceSheetTableObject = window.glAccountComponent.glCodeData;
const cashData = balanceSheetTableObject.filter(glAccount => glAccount.accountType === 'cash' && glAccount.subAccountId === null);
const assetData = balanceSheetTableObject.filter(glAccount => glAccount.accountType === 'asset' && glAccount.subAccountId === null);
const liabilitiesData = balanceSheetTableObject.filter(glAccount => glAccount.accountType === 'liability' && glAccount.subAccountId === null);
const capitalData = balanceSheetTableObject.filter(glAccount => glAccount.accountType === 'capital' && glAccount.subAccountId === null);

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {

    initCustomizationForm();
    initSearchCheckBoxes();
    initColumnCheckboxes();
    initResizeTable();
    initTable();

    document.addEventListener('click', function (event) {
        // hide modal onClicked
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === 'modal') {
            document.getElementById("modal").style.display = "none";
        }
    });

    // handel customization search update
    document.getElementById('balance_sheet_post_form_btn').onclick = function () {

        const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
        const dateTime = document.getElementById("as_of_radio_input_date").checked ? document.getElementById('as_of_date').value : document.getElementById('as_of_select_date').value;
        const accountingBasis = document.getElementById("accounting_basis").value;
        const selectedRadio = document.querySelector('input[name="level_of_detail"]:checked').value;

        document.getElementById('custom_search_summary_properties').innerText = formatCustomSearchStr("custom_search_summary_properties", selectedProperties);
        document.getElementById('custom_search_summary_asOf').innerText = dateTime;
        document.getElementById('custom_search_summary_accounting_basis').innerText = accountingBasis;
        document.getElementById('custom_search_summary_level_of_detail').innerText = formatCustomSearchStr("custom_search_summary_level_of_detail", selectedRadio);

        document.getElementById("modal").style.display = "none";
    };

    document.getElementById('balance_sheet_post_form_btn_cancel').onclick = function () {
        document.getElementById("modal").style.display = "none";
    }

    document.getElementById("customization_btn").onclick = function () {
        document.getElementById("modal").style.display = "flex";
    }

});

function initCustomizationForm() {

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

    customization.forEach((obj) => {
        const html = getComponentByKey(obj.inputType, obj.displayName);
        if (html) {
            customizationComponents += html;
        }
    })

    customizationComponents +=
        `
                <tr class="tr-single-right">
                    <td><button id='balance_sheet_post_form_btn_cancel' class="cancel_btn" type="button">Cancel</button></td>
                    <td><button id='balance_sheet_post_form_btn' class="default_btn" type="submit">Update</button></td>
                </tr>
            </table>
        </div>
    `
    propertiesElement.innerHTML = customizationComponents;

    customization.forEach((obj) => {
        addEventListenerBykey(obj.inputType);
    });

}

function initSearchCheckBoxes() {

    let columnsContnet = '';
    let headerComponent = '';

    const searchCheckboxes = document.getElementById("search_checkboxes");
    const reportTableHeader = document.getElementById("report_table_header");

    columns.forEach(column => {

        columnsContnet +=
            `
        <div>
            <label>
                <input type="checkbox" name="" id="" ${column.display ? 'checked' : ''} ${column.checkBoxDisable? 'disabled':''} value=${toSnakeCase(column.name)}>
                <span>${column.name}</span>
            </label>
        </div>
    `;

        headerComponent +=
            `
            <th style="${column.inLineCss}  ${column.display ? 'table-cell;' : 'display:none;'}" id='report_table_header_${toSnakeCase(column.name)}'>
                ${column.name}
                <div class="resizer">
            </th>
        `;

    });
    headerComponent +=
        `
        <th style="table-cell;">
            <div style="display:none;" class="resizer">
        </th>
    `;
    searchCheckboxes.innerHTML += columnsContnet;
    reportTableHeader.innerHTML += headerComponent;
}

function initColumnCheckboxes() {
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
}

function initTable() {
    createCash();
    createAsset();
    createLiabilities();
    createCapital();
}

function createCash() {
    const headerRow = document.getElementById("balance_sheet_cash");
    const fragment = document.createDocumentFragment();

    cashData.forEach((component) => {
        const newRow = document.createElement("tr");

        newRow.innerHTML =
            `
            <td class="report_table_chell_account_name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${component.accountName}</td>
            <td style="text-align: right; color:#005892" class="report_table_chell_balance">0.00</td>
            <td class="report_table_chell_account_number" style="display:none">${component.number}</td>
        `;

        fragment.appendChild(newRow);
    });

    const totalCahsRow = document.createElement("tr");
    totalCahsRow.innerHTML =
        `
        <td><b>Total Cash<b></td>
        <td style="text-align: right; border-top: 2px solid color:#005892" class="report_table_chell_balance"><b>0.00</b></td>
        <td></td>
    `;
    fragment.appendChild(totalCahsRow);
    // Insert all rows at once after the header
    headerRow.parentNode.insertBefore(fragment, headerRow.nextSibling);
}

function createAsset() {
    const headerRow = document.getElementById("balance_sheet_asset");
    const fragment = document.createDocumentFragment();

    assetData.forEach((component) => {
        const newRow = document.createElement("tr");

        newRow.innerHTML =
            `
            <td class="report_table_chell_account_name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${component.accountName}</td>
            <td style="text-align: right; color:#005892" class="report_table_chell_balance">0.00</td>
            <td class="report_table_chell_account_number" style="display:none">${component.number}</td>
        `;

        fragment.appendChild(newRow);
    });

    const totalCahsRow = document.createElement("tr");
    totalCahsRow.innerHTML =
        `
        <td><b>TOTAL ASSET<b></td>
        <td style="text-align: right; border-top: 2px solid" class="report_table_chell_balance"><b>0</b></td>
        <td></td>
    `;
    fragment.appendChild(totalCahsRow);
    // Insert all rows at once after the header
    headerRow.parentNode.insertBefore(fragment, headerRow.nextSibling);
}

function createLiabilities(){
    const headerRow = document.getElementById("balance_sheet_liabilities");
    const fragment = document.createDocumentFragment();

    liabilitiesData.forEach((component) => {
        const newRow = document.createElement("tr");

        newRow.innerHTML =
            `
            <td class="report_table_chell_account_name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${component.accountName}</td>
            <td style="text-align: right; color:#005892" class="report_table_chell_balance">0.00</td>
            <td class="report_table_chell_account_number" style="display:none">${component.number}</td>
        `;

        fragment.appendChild(newRow);
    });

    const totalCahsRow = document.createElement("tr");
    totalCahsRow.innerHTML =
        `
        <td><b>Total Liabilities<b></td>
        <td style="text-align: right; border-top: 2px solid" class="report_table_chell_balance"><b>0.00</b></td>
        <td></td>
    `;
    fragment.appendChild(totalCahsRow);
    // Insert all rows at once after the header
    headerRow.parentNode.insertBefore(fragment, headerRow.nextSibling);
}

function createCapital(){
    const headerRow = document.getElementById("balance_sheet_capital");
    const fragment = document.createDocumentFragment();

    capitalData.forEach((component) => {
        const newRow = document.createElement("tr");

        newRow.innerHTML =
        `
            <td class="report_table_chell_account_name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${component.accountName}</td>
            <td style="text-align: right; color:#005892" class="report_table_chell_balance">0.00</td>
            <td class="report_table_chell_account_number" style="display:none">${component.number}</td>
        `;

        fragment.appendChild(newRow);
    });

    const totalCahsRow = document.createElement("tr");
    totalCahsRow.innerHTML =
        `
        <td><b>Total Capital<b></td>
        <td style="text-align: right; border-top: 2px solid" class="report_table_chell_balance"><b>0.00</b></td>
        <td></td>
    `;
    fragment.appendChild(totalCahsRow);
    // Insert all rows at once after the header
    headerRow.parentNode.insertBefore(fragment, headerRow.nextSibling);
}

function hideColumn(key) {
    document.getElementById(`report_table_header_${key}`).style.display = 'none';
    const chells = document.getElementsByClassName(`report_table_chell_${key}`);
    [...chells].forEach(el => {
        el.style.display = "none";
    });

}

function showColumn(key) {
    document.getElementById(`report_table_header_${key}`).style.display = 'table-cell';
    const chells = document.getElementsByClassName(`report_table_chell_${key}`);
    [...chells].forEach(el => {
        el.style.display = "table-cell";
    });
}
