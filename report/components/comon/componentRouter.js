function getComponentByKey(key, displayName) {
    switch (key) {
        case "properties":
            return createPropertiesHTML(displayName);
        case "asOf":
            return createAsOfHTML(displayName);
        case "accountingBasis":
            return createAccountingBasisHTML(displayName);
        case "levelOfDetail":
            return createLevelOfDetailHTML(displayName);
        case "checkBox":
            return createCheckBoxHTML(key, displayName);
    }
}

function addEventListenerBykey(key){
    switch (key) {
        case "properties":
            addPropertiesEventListener();
            break;
        case "asOf":
            addAsOfEventListener();
            break;
        case "accountingBasis":
            break;
        case "levelOfDetail":
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