// get the customization components
const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization;

// get the glAccount data
const balanceSheetTableData = window.glAccountComponent.glCodeData;
const liabilities_and_capital = document.getElementById("liabilities_and_capital");
const liabilityData = toTree(balanceSheetTableData.filter(glAccount => glAccount.accountType === 'liability'));
initHeader()

let liabilities_and_capital_div = document.getElementById("liabilities_and_capital_div");
liabilities_and_capital_div.appendChild(buildAccountsDiv(liabilityData));

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
            totalDiv.innerHTML = `${totalIndent}<b>Total ${account.accountName} Taxes</b>`;
            container.appendChild(totalDiv);
        }

    });

    return container;
}

function toTree(data) {
    const accountMap = {};
    let roots = [];

    data.forEach(acc => {
        accountMap[acc.id] = { ...acc, children: [] };
    });

    data.forEach(acc => {
        if (acc.subAccountId && accountMap[acc.subAccountId]) {
            accountMap[acc.subAccountId].children.push(accountMap[acc.id]);
        } else {
            roots.push(accountMap[acc.id]);
        }
    });

    return roots;
}

function createAccountRow(account, level) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';

    columns.forEach((column) => {
        row.innerHTML += getDataDiv(account, column, level)
    })
    return row;
}

function getDataDiv(account, column, level) {
    const totalIndent = column.key === 'account_name' ? '&nbsp;'.repeat(level * 4) : '';
    return `
        <div style="${column.inLineCss} border:1px solid; width:${column.width};" class="column_${column.key} table_column;">
            <div>${totalIndent}${account[toCamelCase(column.key)] ? account[toCamelCase(column.key)] : '0.00'}</div>
        </div>
    `
}

function initHeader() {
    const table_header = document.getElementById('table_header');
    const balance_sheet_checkbox = document.getElementById('balance_sheet_checkbox');
    columns.forEach((column) => {
        table_header.innerHTML += getHeaderTemplate(column);
        balance_sheet_checkbox.innerHTML += columnCheckboxTemplate(column.name)
    });
}

initResizeColumn();