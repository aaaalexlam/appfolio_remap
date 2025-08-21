
// function groupByCashAccountForBill(billList) {
//     const grouped = {};
//     billList.forEach(entry => {
//         const glId = entry.glAccountId;
//         if (!grouped[glId]) {
//             grouped[glId] = [];
//         }
//         entry.billDetails.forEach(detail => {
//             grouped[glId].push({
//                 "reference": entry.reference,
//                 "billDate": entry.billDate,
//                 "dueDate": entry.dueDate,
//                 "payeeOrPayer": entry.payeeName,
//                 "glAccount": `${entry.glNumber} - ${entry.glName}`,
//                 "property": detail.propertyName,
//                 "paid": detail.status === 'Paid' ? detail.amount : 0,
//                 "unpaid": detail.status === 'Paid' ? 0 : detail.amount,
//                 "paidDate": entry.billDate
//                 // "type": "check",
//                 // "credit": detail.amount > 0 ? formatCurrencyToPostive(detail.amount) : 0,
//                 // "debit": detail.amount < 0 ? formatCurrencyToPostive(detail.amount) : 0,
//                 // "balance": getBalance(entry.glAccountId, detail.amount),
//                 // "description": detail.description,
//             });
//         })
//     });
//     return grouped;
// }

// function groupByGLAccountForBill(billList) {
//     // Grouping logic
//     const grouped = {};
//     billList.forEach(entry => {
//         entry.billDetails.forEach(detail => {
//             const glId = detail.glAccountId;
//             if (!grouped[glId]) {
//                 grouped[glId] = [];
//             }

//             // map with columns key
//             grouped[glId].push({
//                 "reference": entry.reference,
//                 "billDate": entry.billDate,
//                 "dueDate": entry.dueDate,
//                 "payeeOrPayer": entry.payeeName,
//                 "glAccount": `${entry.glNumber} - ${entry.glName}`,
//                 "property": detail.propertyName,
//                 "paid": detail.status === 'Paid' ? detail.amount : 0,
//                 "unpaid": detail.status === 'Paid' ? 0 : detail.amount,
//                 "paidDate": entry.billDate
//             });
//         });
//     });
//     return grouped;
// }

// function getHideableRow(glAccount, tablePrefix, contentData, columns) {
//     return `
//         <div class="hideable_row_header">
//             <i class="fa fa-angle-down"></i>
//             <span>${glAccount.number} - ${glAccount.accountName}</span>
//         </div>
//         <div style="display:block;" id="content_${glAccount.id}">
//             ${getContent(tablePrefix, contentData, columns)}
//         </div>
//     `;
// }

// function getContent(tablePrefix, contentData, columns) {
//     let totalNetChange = 0;
//     const rows = [];

//     const renderRow = (columns, cellCallback) =>
//         `<div class='table_row'>${columns.map(cellCallback).join('')}</div>`;
//     // Main content rows
//     if (Array.isArray(contentData)) {
//         for (const item of contentData) {
//             rows.push(renderRow(columns, column => {
//                 if (column.key === 'balance') {
//                     currentBalance += item.balance;
//                     totalNetChange += item.balance;
//                     return getRowBlockHTML(column, currentBalance);
//                 }
//                 return getRowBlockHTML(column, item[column.key]);
//             }));
//         }
//     }

//     // End Paid row
//     rows.push(renderRow(columns, column =>
//         column.key === 'paid' || column.key === 'unpaid'
//             ? `<div class="end_balance table_column column_balance" style="font-weight: bold; text-align: end; width:${column.width};">
//                     ${formatCurrency(0)}
//                 </div>`
//             : getRowBlockHTML(column, '')
//     ));

//     return rows.join('');
// }

// const getRowBlockHTML = (column, data, options = {}) => {
//     const {
//         isCurrency = ['paid', 'unpaid'].includes(column.key),
//         label = null
//     } = options;

//     const displayValue = isCurrency ? formatCurrency(data) : data ?? '';
//     const styles = [
//         `width:${column.width}`,
//         'flex-shrink:0',
//         isCurrency ? 'text-align: end' : ''
//     ].filter(Boolean).join('; ');

//     return `
//         <div class="column_${column.key} header_text table_column" style="${styles}">
//             ${displayValue}
//             ${label ? `<div style="color: #cacaca">${label}</div>` : ''}
//         </div>
//     `;
// };

// const getSummaryRow = (columns, totalResult, totalDebit, totalPaid, totalUnPaid) => {
//     return `<div class='table_row font-bold fixed bottom-0  w-full bg-white border-t-1 border-gray-100 '>${columns
//         .map(column => {
//             if (column.key === 'paid') {
//                 return getRowBlockHTML(column, totalPaid);
//             } else if (column.key === 'unpaid') {
//                 return getRowBlockHTML(column, totalUnPaid);
//             } else {
//                 return getRowBlockHTML(column, '');
//             }
//         })
//         .join('')}</div>`;
// };


const vendorLedgerServices_handleAndGetCustomizationData = async  (start, end) => {
    const selectedPayee = getSelectedPayee(tablePrefix);
    const selectedProperties = getSelectedProperties();
    const billDateRange = getSelectedBillDateRange(tablePrefix);
    const showReversedTransactions = getCheckBoxValueByKey(tablePrefix, "showReversedTransactions");


    document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formartPropertiesStr(selectedProperties);
    document.getElementById(`${tablePrefix}custom_search_summary_payee`).innerText = selectedPayee;
    document.getElementById(`${tablePrefix}custom_search_summary_billDateRange`).innerText = `From: ${billDateRange.startDate} To: ${billDateRange.endDate}`;
    document.getElementById(`${tablePrefix}custom_search_summary_showReversedTransactions`).innerText = showReversedTransactions;
    document.getElementById(`${tablePrefix}modal`).style.display = "none";

    
    return {
        "payee":selectedPayee,
        "properties": [selectedProperties],
        "billDateRange": {
            "startDate": billDateRange.startDate,
            "endDate": billDateRange.endDate
        },
        "showReversedTransactions": showReversedTransactions
    }
}

async function vendorLedgerServices_loadData(customizationData, refreshPage) {

    // get the order by gl account id
    const [glAccountsData, payableBills, receipts] = await Promise.all([
        // get gl account details
        getGlAccountMap(customizationData.selectedGlAccounts.id),
        getPayableBills(customizationData.selectedGlAccounts.id),
        getReceipts(customizationData.selectedGlAccounts.id)
    ]);

    // pass the transaction data here
    const table = document.getElementById(`${tablePrefix}table_content`);
    if(refreshPage){
        table.replaceChildren();
    }

    // To Andrew: Have to pass the transaction over here
    const merged = generalLedgerServices_dataMapping(payableBills, receipts)
    const keyList = Object.keys(merged);

    const fragment = document.createDocumentFragment(); // improves batch DOM insert

    // only generate the selected gl accounts needed, can ignore if we can query by gl account id
    const filteredGlAccounts = glAccountsData.filter(item => keyList.includes(item.id));

    // loop by gl account
    let totalNetBalance = 0;
    for (const glAccount of filteredGlAccounts) {
        if (glAccount.order.length !== 0) continue;

        const glAccountBills = merged[glAccount.id];

        // sum the net change, balance for each gl account
        let startingBalanceByGlAccount = 100;
        let totalNetChangeByGlAccount = glAccountBills.reduce((sum, entry) => sum + parseInt(entry.balance * 100), 0) / 100;
        let totalBalanceByGlAccount = startingBalanceByGlAccount + totalNetChangeByGlAccount;

        totalNetBalance += totalBalanceByGlAccount;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccount.id}_btn`;
        wrapper.setAttribute('data-gl-account-id', glAccount.id);

        // create hideable content
        wrapper.innerHTML = tableService_createHideableContent(glAccount, tablePrefix, glAccountBills, displayedColumns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount);

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);
    start = end;
    end += getNumberOfGlAccount;


    // make row to be hideable
    document.querySelectorAll('.hideable_row_header').forEach(header => {
        header.addEventListener('click', () => {
            const glAcId = header.closest('[data-gl-account-id]').getAttribute('data-gl-account-id');
            const content = document.getElementById(`content_${glAcId}`);
            if (content) {
                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    tableService_initResizeColumn();
}