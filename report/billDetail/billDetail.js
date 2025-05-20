// table prefix
const tablePrefix = 'bill_detail_';

// get the customization components
const billDetailObject = window.reportComponent.data.find(item => item.hasOwnProperty('billDetail'));
const columns = billDetailObject.billDetail.columns;
const customization = billDetailObject.billDetail.customization;

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {

    initCustomizationForm(customization, tablePrefix);

    document.addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === `${tablePrefix}modal`) {
            document.getElementById(`${tablePrefix}modal`).style.display = "none";
        }
    });
})