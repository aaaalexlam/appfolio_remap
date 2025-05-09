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

function buildAccountsDiv(accounts, level = 2) {
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
            totalDiv.style.fontWeight = 'bold';
            totalDiv.innerHTML = `${totalIndent}Total ${account.accountName}`;
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

function initTable() {
    let income_div = document.getElementById("income_div");
    income_div.appendChild(buildAccountsDiv(incomeData));

    let expense_div = document.getElementById("expense_div");
    expense_div.appendChild(buildAccountsDiv(incomeData));

    let other_income_div = document.getElementById("other_income_div");
    other_income_div.appendChild(buildAccountsDiv(otherIncomeData));

    let other_expense_div = document.getElementById("other_expense_div");
    other_expense_div.appendChild(buildAccountsDiv(otherExpenseData));

    const windowHeight = window.innerHeight;
    const reportTable = document.getElementById(`${tablePrefix}table`);
    reportTable.style.height = windowHeight - reportTable.getBoundingClientRect().top+'px';


}
