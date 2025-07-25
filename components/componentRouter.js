function getCustomSearchComponentByKey(key, displayName, tablePrefix) {
    switch (key) {
        case "properties":
            return createPropertiesHTML(displayName, tablePrefix);
        case "asOf":
            return createAsOfHTML(displayName, tablePrefix);
        case "dateRange":
            return createDateRangeHTML(displayName, tablePrefix);
        case "accountingBasis":
            return createAccountingBasisHTML(displayName, tablePrefix);
        case "levelOfDetail":
            return createLevelOfDetailHTML(displayName, tablePrefix);
        case "checkBox":
            return createCheckBoxHTML(key, displayName, tablePrefix);
        case "additionalCashGLAccunts":
            return createAdditionalCashGLAccuntsHTML(displayName, tablePrefix);
        case "payee":
            return createPayeeHTML(displayName, tablePrefix);
        case "paymentType":
            return createPaymentTypeHTML(displayName, tablePrefix);
        case "createdBy":
            return createdByComponentHTML(displayName, tablePrefix);
        case "glAccounts":
            return createGLAccuntsHTML(displayName, tablePrefix);
        case "billStatus":
            return createBillStatusHTML(displayName, tablePrefix);
        case "dateType":
            return createDateTypeHTML(displayName, tablePrefix);
        case "lastEditedRange":
            return createLastEditDateRangeComponent(displayName, tablePrefix);
        case "billDateRange":
            return createBillDateRangeComponent(displayName, tablePrefix);
        case "showReversedTransactions":
            return createCheckBoxHTML(key, displayName, tablePrefix);
    }
}

function addEventListenerBykey(key, tablePrefix) {
    switch (key) {
        case "properties":
            addPropertiesEventListener(tablePrefix);
            break;
        case "asOf":
            addAsOfEventListener(tablePrefix);
            break;
        case "accountingBasis":
            break;
        case "levelOfDetail":
            break;
        case "dateRange":
            addDateRangeEventListener(tablePrefix);
            break;
        case "payee":
            addPayeeEventListener(tablePrefix);
            break;
        case "glAccounts":
            addGlAccountsEventListener(tablePrefix);
            break;
        case "lastEditedRange":
            addLastEditDateRangeEventListener(tablePrefix);
            break;
        case "billDateRange":
            addBillDateRangeEventListener(tablePrefix);
            break;
    }
}

function formatCustomSearchStr(id, str) {
    switch (id) {
        case "custom_search_summary_properties":
            return formartPropertiesStr(str);
        case "custom_search_summary_level_of_detail":
            return formartLevelOfDetailStr(str);


    }
}

function formatSelectedGLAccount(selectedGlAccounts) {
    const parsedList = selectedGlAccounts.map(item => JSON.parse(item));
    let formatingStr = '';
    if (selectedGlAccounts.length === 0) return '';


    const account = parsedList[0];
    formatingStr = `${account.number} - ${account.accountName}`;

    if (selectedGlAccounts.length === 1){
        return formatingStr;
    }

    // Loop using a classic for loop
    for (let i = 1; i < parsedList.length; i++) {
        const account = parsedList[i];
        formatingStr += `, ${account.number} - ${account.accountName}`;
    }

    return formatingStr;
}