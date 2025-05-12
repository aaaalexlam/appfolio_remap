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
    initCustomizationForm(customization, tablePrefix);
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
        const dateTime = document.getElementById(`${tablePrefix}as_of_radio_input_date`).checked ? document.getElementById(`${tablePrefix}as_of_date`).value : document.getElementById(`${tablePrefix}as_of_select_date`).value;
        const accountingBasis = document.getElementById(`${tablePrefix}accounting_basis`).value;
        const selectedRadio = document.querySelector('input[name="level_of_detail"]:checked').value;

        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formatCustomSearchStr("custom_search_summary_properties", selectedProperties);
        document.getElementById(`${tablePrefix}custom_search_summary_asOf`).innerText = dateTime;
        document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
        document.getElementById(`${tablePrefix}custom_search_summary_levelOfDetail`).innerText = formatCustomSearchStr("custom_search_summary_level_of_detail", selectedRadio);

        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    };

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }
})

function initTable() {
    let cash_div = document.getElementById("cash_div");
    cash_div.appendChild(buildAccountsDiv(cashData, 1));

    let asset_div = document.getElementById("asset_div");
    asset_div.appendChild(buildAccountsDiv(assetData, 1));

    let liabilities_and_capital_div = document.getElementById("liabilities_and_capital_div");
    liabilities_and_capital_div.appendChild(buildAccountsDiv(liabilityData, 1));

    const windowHeight = window.innerHeight;
    const reportTable = document.getElementById(`${tablePrefix}table`);
    reportTable.style.height = windowHeight - reportTable.getBoundingClientRect().top+'px';
}



