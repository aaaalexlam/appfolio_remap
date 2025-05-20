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
    }
}

function addEventListenerBykey(key, tablePrefix){
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
    }
}

function formatCustomSearchStr(id, str){
    switch (id) {
        case "custom_search_summary_properties":
            return formartPropertiesStr(str);
        case "custom_search_summary_level_of_detail":
            return formartLevelOfDetailStr(str);
 
            
    }
}