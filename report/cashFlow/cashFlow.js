const cashFlowObject = window.reportComponent.data.find(item => item.hasOwnProperty('cashFlow'));

const columns = cashFlowObject.cashFlow.columns;
const customization = cashFlowObject.cashFlow.customization
let customizationComponents = "";

const propertiesElement = document.getElementById("modal");
propertiesElement.classList.add("modal");


customizationComponents += '<div class="custom_search_container"> <table> <tr> <th>Customize Report</th> <th></th> </tr>';

customization.forEach(key => {
    customizationComponents += getComponentByKey(key)
});

customizationComponents += '</table></div>';

propertiesElement.innerHTML = customizationComponents