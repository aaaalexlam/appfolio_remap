// table prefix
const tablePrefix = 'balance_sheet_';

// get the customization components
const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization;

// get the glAccount data
const balanceSheetTableData = window.glAccountComponent.glCodeData;
const liabilities_and_capital = document.getElementById("liabilities_and_capital");
const liabilityData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'liability'));
const cashData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'cash'));
const assetData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'asset'));

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {
    initCustomizationForm();
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initTable();
    initResizeColumn();

    document.addEventListener('click', function (event) {
        // hide modal onClicked
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === `${tablePrefix}modal`) {
            document.getElementById(`${tablePrefix}modal`).style.display = "none";
        }
    });

    // handel customization search update
    document.getElementById(`${tablePrefix}post_form_btn`).onclick = function () {

        const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
        const dateTime = document.getElementById("as_of_radio_input_date").checked ? document.getElementById('as_of_date').value : document.getElementById('as_of_select_date').value;
        const accountingBasis = document.getElementById("accounting_basis").value;
        const selectedRadio = document.querySelector('input[name="level_of_detail"]:checked').value;

        document.getElementById('custom_search_summary_properties').innerText = formatCustomSearchStr("custom_search_summary_properties", selectedProperties);
        document.getElementById('custom_search_summary_asOf').innerText = dateTime;
        document.getElementById('custom_search_summary_accounting_basis').innerText = accountingBasis;
        document.getElementById('custom_search_summary_level_of_detail').innerText = formatCustomSearchStr("custom_search_summary_level_of_detail", selectedRadio);

        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    };

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }
})

function buildAccountsDiv(accounts, level = 1) {
    const container = document.createElement('div');

    accounts.forEach(account => {
        const accountRow = createAccountRow(account, level);
        container.appendChild(accountRow);

        if (Array.isArray(account.children) && account.children.length > 0) {
            const childrenRows = buildAccountsDiv(account.children, level + 1);
            container.appendChild(childrenRows);

            const totalDiv = document.createElement('div');
            const totalIndent = '&nbsp;'.repeat(level * 4);
            totalDiv.className = "column_account_name table_column"
            totalDiv.innerHTML = `${totalIndent}<b>Total ${account.accountName}</b>`;
            container.appendChild(totalDiv);
        }

    });

    return container;
}

function createAccountRow(account, level) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.className = 'table_row';

    columns.forEach((column) => {
        row.innerHTML += getDataDiv(account, column, level)
    })

    // for css dispay only
    row.innerHTML +=
        `
        <div class="end_columnd">
            <div>&nbsp;</div>
        </div>
    `
    return row;
}

function getDataDiv(account, column, level) {
    
    let displayName = account[toCamelCase(column.key)] ? account[toCamelCase(column.key)] : '&nbsp;';
    let style = '';

    if(column.key === 'account_name'){
        displayName = '&nbsp;'.repeat(level * 5) + account[toCamelCase(column.key)];

        if(account.children.length > 0){
            style = 'font-weight:bold;';
        }
    }

    return `
        <div class="column_${column.key} table_column" style="width:${column.width}; ${style} display:${column.display ? 'block' : 'none'}">
            ${displayName}
        </div>
    `
}

function initTable() {
    let cash_div = document.getElementById("cash_div");
    cash_div.appendChild(buildAccountsDiv(cashData));

    let asset_div = document.getElementById("asset_div");
    asset_div.appendChild(buildAccountsDiv(assetData));

    let liabilities_and_capital_div = document.getElementById("liabilities_and_capital_div");
    liabilities_and_capital_div.appendChild(buildAccountsDiv(liabilityData));

    const windowHeight = window.innerHeight;
    const reportTable = document.getElementById(`${tablePrefix}table`);
    reportTable.style.height = windowHeight - reportTable.getBoundingClientRect().top+'px';
}


function initCustomizationForm() {

    const propertiesElement = document.getElementById(`${tablePrefix}modal`);
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

