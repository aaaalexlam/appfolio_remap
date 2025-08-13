function generalLedgerServices_groupByCashAccountForBill(billList) {
    const grouped = {};
    billList.forEach(entry => {
        const glId = "2";
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

function generalLedgerServices_groupByGLAccountForBill(billList) {
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

function generalLedgerServices_createReceipt(entry, detail) {
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

function generalLedgerServices_groupByCashAccountForReceipt(recepitsList) {
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

function generalLedgerServices_groupByGLAccountForReceipt(recepitsList) {
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


const generalLedgerServices_handleAndGetCustomizationData = () => {
    const selectedPropertiesList = getSelectedProperties();
    const getSelectedGlAccountList = getSelectedGlAccount();

    const accountingBasis = document.getElementById(`${tablePrefix}accounting_basis`).value;
    const dateRange = getSelectedDateRange(tablePrefix);

    const lastEditDateRange = getSelectedLastEditDateRange(tablePrefix);
    const createdBy = document.getElementById(`${tablePrefix}created_by`).value;

    const excludeZeroDollarReceiptsFromCashAccounts = getCheckBoxValueByKey(tablePrefix, "excludeZeroDollarReceiptsFromCashAccounts");
    const showReversedTransactions = getCheckBoxValueByKey(tablePrefix, "showReversedTransactions");

    document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formartPropertiesStr(selectedPropertiesList);
    document.getElementById(`${tablePrefix}custom_search_summary_createdBy`).innerText = createdBy;
    document.getElementById(`${tablePrefix}custom_search_summary_glAccounts`).innerText = formatSelectedGLAccount(getSelectedGlAccountList);
    document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = `From: ${dateRange.startDate} To: ${dateRange.endDate}`;
    document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
    document.getElementById(`${tablePrefix}custom_search_summary_lastEditedRange`).innerText = `From: ${lastEditDateRange.startDate} To: ${lastEditDateRange.endDate}`;;
    document.getElementById(`${tablePrefix}custom_search_summary_excludeZeroDollarReceiptsFromCashAccounts`).innerText = excludeZeroDollarReceiptsFromCashAccounts;
    document.getElementById(`${tablePrefix}custom_search_summary_showReversedTransactions`).innerText = showReversedTransactions;
    document.getElementById(`${tablePrefix}modal`).style.display = "none";

    return {
        "properties": [selectedPropertiesList],
        "createdBy": {
            "id": 1,
            "name": createdBy
        },
        "selectedGlAccounts": getSelectedGlAccountList,
        "dateRange": {
            "startDate": dateRange.startDate,
            "endDate": dateRange.endDate
        },
        "lastEditDateRange": {
            "startDate": lastEditDateRange.startDate,
            "endDate": lastEditDateRange.endDate
        },
        "accountingBasis": accountingBasis,
        "excludeZeroDollarReceiptsFromCashAccounts": excludeZeroDollarReceiptsFromCashAccounts,
        "showReversedTransactions": showReversedTransactions
    }
}

// main logic to transform data into desirable data strecture
const generalLedgerServices_dataMapping = (bills, receipt) => {

    const groupedSources = [
        generalLedgerServices_groupByCashAccountForBill(bills),
        generalLedgerServices_groupByGLAccountForBill(bills),
        generalLedgerServices_groupByCashAccountForReceipt(receipt),
        generalLedgerServices_groupByGLAccountForReceipt(receipt),
    ];

    // Collect all unique keys
    const allKeys = new Set();
    groupedSources.forEach(group =>
        Object.keys(group).forEach(key => allKeys.add(key))
    );

    // Merge values from all groups under each key
    const merged = {};
    for (const key of allKeys) {
        merged[key] = groupedSources.flatMap(group => group[key] || []);
    }
    return merged;
}

async function generalLedgerServices_loadData(glAccountOrderIdList) {

    console.log('', glAccountOrderIdList)
    console.log(`get: ${start} - ${end}`);

    // get the order by gl account id
    const [glAccountsData, payableBills, receipts] = await Promise.all([
        // get gl account details
        getGlAccountMap(glAccountOrderIdList),
        getPayableBills(glAccountOrderIdList),
        getReceipts(glAccountOrderIdList)
    ]);

    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert

    // pass the transaction data here
    const merged = generalLedgerServices_dataMapping(payableBills, receipts)
    const keyList = Object.keys(merged);

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