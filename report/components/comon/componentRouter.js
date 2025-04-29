function getComponentByKey(key) {
    switch (key) {
        case "properties":
            return createPropertiesHTML();
        case "asOf":
            return createAsOfHTML();

        case "accountingBasis":
            return createAccountingBasisHTML();
        case "levelOfDetail":
            return createLevelOfDetailHTML();
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