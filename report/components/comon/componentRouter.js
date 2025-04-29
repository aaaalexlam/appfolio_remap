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