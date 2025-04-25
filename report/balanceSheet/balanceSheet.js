const balanceSheetObject = window.reportComponent.data.find(item => item.hasOwnProperty('balanceSheet'));
const columns = balanceSheetObject.balanceSheet.columns;
const customization = balanceSheetObject.balanceSheet.customization
let customizationComponents = "";

const propertiesElement = document.getElementById("modal");
propertiesElement.classList.add("modal");


customizationComponents += '<div class="custom_search_container"> <table> <tr> <th>Customize Report</th> <th></th> </tr>';

customization.forEach(key => { 
    console.log(key)
    customizationComponents += getComponentByKey(key)
});
customizationComponents += `
                <tr class="tr-single-right">
                    <td><button id='post_form_btn' class="default_btn">Update</button></td>
                </tr>
            '</table></div>';
`


propertiesElement.innerHTML = customizationComponents