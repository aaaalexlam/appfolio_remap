const tablePrefix = 'vendor_lendger_';

const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger'));
const columns = generalLedgerObject.vendorLedger.columns;
const displayedColumns = columns.filter(item => item.display === true);

const customization = generalLedgerObject.vendorLedger.customization;
const glAccounts = window.glAccountComponent.glCodeData;

// for loading the data
let getNumberOfGlAccount = 10;
let start = 0;
let end = start + getNumberOfGlAccount;

// init html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", async function () {

    let reachedBottom = false;

    const glAccountIdList = await getGlAccountIdList();

    initCustomizationForm(customization, tablePrefix);

    
    // on click customization form
    document.getElementById(`${tablePrefix}post_form_btn`).onclick = async function () {

        // reset loading logic
        start = 0;
        end = start + getNumberOfGlAccount

        tableService_initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
        
        const customizationData = await vendorLedgerServices_handleAndGetCustomizationData(start, end);

        try {
            // get the data by provided gl account id
            vendorLedgerServices_loadData(customizationData, true);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            document.getElementById("loading_img").style.display = 'none';
        }

    }



});

