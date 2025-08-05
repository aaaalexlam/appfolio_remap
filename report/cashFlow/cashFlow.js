// table prefix
const tablePrefix = 'cash_flow_';

// get the customization components
const cashFlowObject = window.reportComponent.data.find(item => item.hasOwnProperty('cashFlow'));
const columns = cashFlowObject.cashFlow.columns;
const customization = cashFlowObject.cashFlow.customization;

// get the glAccount data
const balanceSheetTableData = window.glAccountComponent.glCodeData;
const liabilities_and_capital = document.getElementById("liabilities_and_capital");
const incomeData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'income'));
const expenseData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'expense'));
const otherIncomeData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'other_income'));
const otherExpenseData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'other_expense'));

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
        const accountingBasis = document.getElementById(`${tablePrefix}accounting_basis`).value;
        const selectedRadio = document.querySelector('input[name="level_of_detail"]:checked').value;
        const dateRange = getSelectedDateRange(tablePrefix);
        const selectedAdditionalCashGlAccounts = getSelectedCashGlAccount(tablePrefix);
        const includeZeroBalanceGLAccount = document.querySelector('input[name="checkBox_include_zero_balance_gl_account"]').checked ? 'Y' : 'N';
        const excludeSuppressedFees = document.querySelector('input[name="checkBox_exclude_suppressed_fees"]').checked ? 'Y' : 'N';

        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formatCustomSearchStr(`custom_search_summary_properties`, selectedProperties);
        document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
        document.getElementById(`${tablePrefix}custom_search_summary_levelOfDetail`).innerText = formatCustomSearchStr("custom_search_summary_level_of_detail", selectedRadio);
        document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = dateRange;
        document.getElementById(`${tablePrefix}custom_search_summary_additionalCashGLAccunts`).innerText = selectedAdditionalCashGlAccounts;
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
        document.getElementById(`${tablePrefix}custom_search_summary_include_zero_balance_gl_account`).innerHTML = includeZeroBalanceGLAccount;
        document.getElementById(`${tablePrefix}custom_search_summary_exclude_suppressed_fees`).innerHTML = excludeSuppressedFees;

    }; 

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }
});


function initTable() {
    let income_div = document.getElementById("income_div");
    income_div.appendChild(buildAccountsDiv(incomeData, 2));
    let expense_div = document.getElementById("expense_div");
    expense_div.appendChild(buildAccountsDiv(incomeData, 2));

    let other_income_div = document.getElementById("other_income_div");
    other_income_div.appendChild(buildAccountsDiv(otherIncomeData, 2));

    let other_expense_div = document.getElementById("other_expense_div");
    other_expense_div.appendChild(buildAccountsDiv(otherExpenseData, 2));

    const windowHeight = window.innerHeight;
    const reportTable = document.getElementById(`${tablePrefix}table`);
    reportTable.style.height = windowHeight - reportTable.getBoundingClientRect().top + 'px';

}
