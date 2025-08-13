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
const getSummaryRow = (columns, totalResult, totalDebit, totalCredit, totalBalance) => {
    return `<div class='table_row font-bold fixed bottom-0  w-full bg-white border-t-1 border-gray-100 '>${columns
        .map(column => {
            if (column.key === 'balance') {
                return getCellHTML(column, totalBalance);
            } else if (column.key === 'credit') {
                return getCellHTML(column, totalCredit);
            } else if (column.key === 'debit') {
                return getCellHTML(column, totalDebit);
            } else if (column.key === 'property') {
                return getCellHTML(column, `Total (${totalResult} Results)`);
            }
            else {
                return getCellHTML(column, '');
            }
        })
        .join('')}</div>`;
};

const getCellHTML = (column, data, options = {}) => {
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