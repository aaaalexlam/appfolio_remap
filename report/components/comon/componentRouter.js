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