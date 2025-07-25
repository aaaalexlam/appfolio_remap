function groupByCashAccountForBill(billList) {
    const grouped = {};
    billList.forEach(entry => {
        const glId = entry.glAccountId;
        if (!grouped[glId]) {
            grouped[glId] = [];
        }
        entry.billDetails.forEach(detail => {
            grouped[glId].push({
                "property": detail.propertyName,
                "date": entry.billDate,
                "payeeOrPayer": entry.payeeName,
                "type": "check",
                "reference": entry.reference,
                "credit": detail.amount > 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "debit": detail.amount < 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "balance": getBalance(entry.glAccountId, detail.amount),
                "description": detail.description,
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
                "property": detail.propertyName,
                "date": entry.billDate,
                "payeeOrPayer": entry.payeeName,
                "type": "check",
                "reference": entry.reference,
                "credit": detail.amount < 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "debit": detail.amount > 0 ? formatCurrencyToPostive(detail.amount) : 0,
                "balance": detail.amount,
                "description": detail.description,
            });
        });
    });
    return grouped;
}

function createReceipt(entry, detail) {
    return {
        property: detail.propertyName,
        date: entry.billDate,
        payeeOrPayer: entry.payeeName,
        type: "check",
        reference: entry.referenceNotes,
        credit: charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
        debit: charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
        balance: charge.appliedAmount,
        description: "",
    };
}

function groupByCashAccountForReceipt(recepitsList) {
    const grouped = {};
    recepitsList.forEach(entry => {
        entry.charges.forEach(charge => {
            const glId = entry.glAccountId;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }

            // map with columns key
            grouped[glId].push({
                "property": entry.propertyName,
                "date": entry.receiptDate,
                "payeeOrPayer": entry.tenantName,
                "type": "check",
                "reference": entry.referenceNotes,
                "credit": charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "debit": charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "balance": charge.appliedAmount,
                "description": "",
            });
        })

    });

    return grouped;
}

function groupByGLAccountForReceipt(recepitsList) {
    const grouped = {};
    recepitsList.forEach(entry => {
        entry.charges.forEach(charge => {
            const glId = charge.glAccount;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }
            grouped[glId].push({
                "property": entry.propertyName,
                "date": entry.receiptDate,
                "payeeOrPayer": entry.tenantName,
                "type": "check",
                "reference": entry.referenceNotes,
                "credit": charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "debit": charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "balance": getBalance(glId, charge.appliedAmount),
                "description": "",
            });
        })
    });

    return grouped;
}

function getHideableRow(glAccount, tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount) {
    return `
        <div class="hideable_row_header">
            <i class="fa fa-angle-down"></i>
            <span>${glAccount.number} - ${glAccount.accountName}</span>
        </div>
        <div style="display:block;" id="content_${glAccount.id}">
            ${getContent(tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount)}
        </div>
    `;
}

function getContent(tablePrefix, contentData, columns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount) {
    let totalNetChange = 0;
    let currentBalance = startingBalanceByGlAccount;
    const rows = [];

    const renderRow = (columns, cellCallback) =>
        `<div class='table_row'>${columns.map(cellCallback).join('')}</div>`;

    // Starting balance row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? getRowBlockHTML(column, startingBalanceByGlAccount, { label: 'Starting Balance' })
            : getRowBlockHTML(column, '')
    ));

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

    // Net change row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? getRowBlockHTML(column, totalNetChangeByGlAccount, { label: 'Net Change' })
            : getRowBlockHTML(column, '')
    ));

    // End balance row
    rows.push(renderRow(columns, column =>
        column.key === 'balance'
            ? `<div class="end_balance table_column column_balance" style="font-weight: bold; text-align: end; width:${column.width};">
                    ${formatCurrency(totalBalanceByGlAccount)}
               </div>`
            : getRowBlockHTML(column, '')
    ));

    return rows.join('');
}

const getRowBlockHTML = (column, data, options = {}) => {
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

const getSummaryRow = (columns, totalResult, totalDebit, totalCredit, totalBalance) => {
    return `<div class='table_row font-bold fixed bottom-0  w-full bg-white border-t-1 border-gray-100 '>${columns
        .map(column => {
            if (column.key === 'balance') {
                return getRowBlockHTML(column, totalBalance);
            } else if (column.key === 'credit') {
                return getRowBlockHTML(column, totalCredit);
            } else if (column.key === 'debit') {
                return getRowBlockHTML(column, totalDebit);
            } else if (column.key === 'property') {
                return getRowBlockHTML(column, `Total (${totalResult} Results)`);
            }
            else {
                return getRowBlockHTML(column, '');
            }
        })
        .join('')}</div>`;
};