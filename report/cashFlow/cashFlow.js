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
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initTable();
    initResizeColumn();
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
    reportTable.style.height = windowHeight - reportTable.getBoundingClientRect().top+'px';

}
