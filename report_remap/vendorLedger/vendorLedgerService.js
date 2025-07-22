
function groupByCashAccountForBill(billList) {
    const grouped = {};
    billList.forEach(entry => {
        const glId = entry.glAccountId;
        if (!grouped[glId]) {
            grouped[glId] = [];
        }
        entry.billDetails.forEach(detail => {
            grouped[glId].push({
                "reference": entry.reference,
                "billDate": entry.billDate,
                "dueDate": entry.dueDate,
                "payeeOrPayer": entry.payeeName,
                "glAccount": `${entry.glNumber} - ${entry.glName}`,
                "property": detail.propertyName,
                "paid": detail.status === 'Paid' ? detail.amount : 0,
                "unpaid": detail.status === 'Paid' ? 0 : detail.amount,
                "paidDate": entry.billDate
                // "type": "check",
                // "credit": detail.amount > 0 ? formatCurrencyToPostive(detail.amount) : 0,
                // "debit": detail.amount < 0 ? formatCurrencyToPostive(detail.amount) : 0,
                // "balance": getBalance(entry.glAccountId, detail.amount),
                // "description": detail.description,
            });
        })
    });
    return grouped;
}

function groupByGLAccountForBill(billList) {
    // Grouping logic
    const grouped = {};
    billList.forEach(entry => {
        entry.billDetails.forEach(detail => {
            const glId = detail.glAccountId;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }

            // map with columns key
            grouped[glId].push({
                "reference": entry.reference,
                "billDate": entry.billDate,
                "dueDate": entry.dueDate,
                "payeeOrPayer": entry.payeeName,
                "glAccount": `${entry.glNumber} - ${entry.glName}`,
                "property": detail.propertyName,
                "paid": detail.status === 'Paid' ? detail.amount : 0,
                "unpaid": detail.status === 'Paid' ? 0 : detail.amount,
                "paidDate": entry.billDate
            });
        });
    });
    return grouped;
}

function getHideableRow(glAccount, tablePrefix, contentData, columns) {
    return `
        <div class="hideable_row_header">
            <i class="fa fa-angle-down"></i>
            <span>${glAccount.number} - ${glAccount.accountName}</span>
        </div>
        <div style="display:block;" id="content_${glAccount.id}">
            ${getContent(tablePrefix, contentData, columns)}
        </div>
    `;
}

function getContent(tablePrefix, contentData, columns) {
    let totalNetChange = 0;
    const rows = [];

    const renderRow = (columns, cellCallback) =>
        `<div class='table_row'>${columns.map(cellCallback).join('')}</div>`;
    // Main content rows
    if (Array.isArray(contentData)) {
        for (const item of contentData) {
            rows.push(renderRow(columns, column => {
                if (column.key === 'balance') {
                    currentBalance += item.balance;
                    totalNetChange += item.balance;
                    return getRowBlockHTML(column, currentBalance);
                }
                return getRowBlockHTML(column, item[column.key]);
            }));
        }
    }

    // End Paid row
    rows.push(renderRow(columns, column =>
        column.key === 'paid' || column.key === 'unpaid'
            ? `<div class="end_balance table_column column_balance" style="font-weight: bold; text-align: end; width:${column.width};">
                    ${formatCurrency(0)}
                </div>`
            : getRowBlockHTML(column, '')
    ));

    return rows.join('');
}

const getRowBlockHTML = (column, data, options = {}) => {
    const {
        isCurrency = ['paid', 'unpaid'].includes(column.key),
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

const getSummaryRow = (columns, totalResult, totalDebit, totalPaid, totalUnPaid) => {
    return `<div class='table_row font-bold fixed bottom-0  w-full bg-white border-t-1 border-gray-100 '>${columns
        .map(column => {
            if (column.key === 'paid') {
                return getRowBlockHTML(column, totalPaid);
            } else if (column.key === 'unpaid') {
                return getRowBlockHTML(column, totalUnPaid);
            } else {
                return getRowBlockHTML(column, '');
            }
        })
        .join('')}</div>`;
};