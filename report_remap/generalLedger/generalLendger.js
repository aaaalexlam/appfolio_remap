
// table prefix
const tablePrefix = 'general_lendger_';

const generalLedgerComponent = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));

const columns = generalLedgerComponent.generalLedger.columns;
const displayedColumns = columns.filter(item => item.display === true);

const { billComponent, receiptsComponent } = window;

const customization = generalLedgerComponent.generalLedger.customization;

// for loading the data
let getNumberOfGlAccount = 10;
let start = 0;
let end = start + getNumberOfGlAccount;

document.addEventListener("DOMContentLoaded", async function () {
    let reachedBottom = false;

    const glAccountIdList = await getGlAccountIdList();

    document.getElementById("loading_img").style.display = 'none';

    initCustomizationForm(customization, tablePrefix);

    document.addEventListener('click', async function (event) {

        // hide modal onClicked
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === `${tablePrefix}modal`) {
            document.getElementById(`${tablePrefix}modal`).style.display = "none";
        }
    });

    document.getElementById(`${tablePrefix}hide_detail_summary_btn`).onclick = function () {
        const summary = document.getElementById(`${tablePrefix}custom_search_summary`);

        if (this.innerText === 'Hide Details') {
            summary.style.display = 'none';
            this.innerText = 'Show Details'
        } else {
            summary.style.display = 'block';
            this.innerText = 'Hide Details'
        }

    }

    // on click customization form
    document.getElementById(`${tablePrefix}post_form_btn`).onclick = async function () {

        // reset loading logic
        start = 0;
        end = start + getNumberOfGlAccount

        document.getElementById("loading_img").style.display = 'block';

        tableService_initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);

        const customizationData = await generalLedgerServices_handleAndGetCustomizationData(start, end);
        try {
            // get the data by provided gl account id
            generalLedgerServices_loadData(customizationData, true);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            document.getElementById("loading_img").style.display = 'none';
        }

        window.addEventListener("scroll", async () => {

            // trigger loading condiction
            const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

            if (atBottom && !reachedBottom) {
                reachedBottom = true; // lock until user scrolls up again

                try {
                    document.getElementById("loading_img").style.display = 'block';
                    const customizationData = await generalLedgerServices_handleAndGetCustomizationData(start, end);
                    
                    // condiction for stop loading
                    if(customizationData.selectedGlAccounts.id.length === 0){
                        reachedBottom = true;
                        return;
                    }
                    await generalLedgerServices_loadData(customizationData, false);

                } catch (error) {
                    console.error("Error loading data:", error);
                } finally {
                    document.getElementById("loading_img").style.display = 'none';
                }
            }

            if (!atBottom) {
                reachedBottom = false; // unlock when scrolled up
            }
        });

        // Table summary
        document.getElementById("general_lendger_table").innerHTML += tableServce_getSummaryRow(displayedColumns, 0, 0, 0);
    }

});


