function tableService_createHideableContent(glAccount, tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount) {
    return `
        <div class="hideable_row_header">
            <i class="fa fa-angle-down"></i>
            <span>${glAccount.number} - ${glAccount.accountName}</span>
        </div>
        <div style="display:block;" id="content_${glAccount.id}">
            ${tableService_getContent(tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount)}
        </div>
    `;
}
const tableServce_getSummaryRow = (columns, totalResult, totalDebit, totalCredit, totalBalance) => {
    return `<div class='table_row font-bold fixed bottom-0  w-full bg-white border-t-1 border-gray-100 '>${columns
        .map(column => {
            if (column.key === 'balance') {
                return tableService_getCellHTML(column, totalBalance);
            } else if (column.key === 'credit') {
                return tableService_getCellHTML(column, totalCredit);
            } else if (column.key === 'debit') {
                return tableService_getCellHTML(column, totalDebit);
            } else if (column.key === 'property') {
                return tableService_getCellHTML(column, `Total (${totalResult} Results)`);
            }
            else {
                return tableService_getCellHTML(column, '');
            }
        })
        .join('')}</div>`;
};

function tableService_getContent(tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount) {
    let totalNetChange = 0;
    let currentBalance = startingBalanceByGlAccount;
    const rows = [];

    const renderRow = (columns, cellCallback) =>
        `<div class='table_row'>${columns.map(cellCallback).join('')}</div>`;

    // Starting balance row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? tableService_getCellHTML(column, startingBalanceByGlAccount, { label: 'Starting Balance' })
            : tableService_getCellHTML(column, '')
    ));

    // Main content rows
    if (Array.isArray(contentData)) {
        for (const item of contentData) {
            rows.push(renderRow(columns, column => {
                if (column.key === 'balance') {
                    currentBalance += item.balance;
                    totalNetChange += item.balance;
                    return tableService_getCellHTML(column, currentBalance);
                }
                return tableService_getCellHTML(column, item[column.key]);
            }));
        }
    }

    // Net change row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? tableService_getCellHTML(column, totalNetChangeByGlAccount, { label: 'Net Change' })
            : tableService_getCellHTML(column, '')
    ));

    // End balance row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? `<div class="end_balance table_column column_balance" style="font-weight: bold; text-align: end; width:${column.width};">
                    ${formatCurrency(totalBalanceByGlAccount)}
               </div>`
            : tableService_getCellHTML(column, '')
    ));

    return rows.join('');
}
const tableService_getCellHTML = (column, data, options = {}) => {
    const {
        isCurrency = ['credit', 'debit', 'balance'].includes(column.key),
        label = null
    } = options;

    const displayValue = isCurrency ? formatCurrency(data) : data ?? '';
    const styles = [
        `width:${column.width}`,
        'flex-shrink:0',
        isCurrency ? 'text-align: end' : ''
    ].filter(Boolean).join('; ');

    return `
        <div class="column_${column.key} header_text table_column" style="${styles}">
            ${displayValue}
            ${label ? `<div style="color: #cacaca">${label}</div>` : ''}
        </div>
    `;
};

function tableService_initResizeColumn() {
    const resizers = document.querySelectorAll(".resize_div");

    resizers.forEach(resizer => {
        resizer.addEventListener("mousedown", onMouseDown);
    });

    function onMouseDown(e) {
        const resizer = e.currentTarget;
        let headerComponent = resizer.parentElement.parentElement;
        const headerId = headerComponent.id;
        const columnTargets = document.querySelectorAll(`.${headerId}`);
        const startX = e.pageX;
        const startWidth = headerComponent.offsetWidth;

        const onMouseMove = (e) => {
            const newWidth = Math.max(startWidth + (e.pageX - startX), 40); // minimum width safety
            for (const el of columnTargets) {
                el.style.width = `${newWidth}px`;
            }
            headerComponent.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }
}

function tableService_initHeader(columns, checkBoxId, tableHeaderId) {
    const tableHeaderEl = document.getElementById(tableHeaderId);
    const checkboxEl = document.getElementById(checkBoxId);

    // Use arrays to collect the HTML strings
    const headerHTML = [];
    const checkboxHTML = [];

    // Build once, append once
    for (const column of columns) {
        headerHTML.push(getHeaderTemplate(column));
        checkboxHTML.push(columnCheckboxTemplate(column));
    }

    // Add the extra end header div for styling
    headerHTML.push(`
        <div class="end_header">
            &nbsp;
        </div>
    `);

    // Assign the combined HTML to the elements once
    tableHeaderEl.innerHTML = headerHTML.join('');
    checkboxEl.innerHTML = checkboxHTML.join('');
}