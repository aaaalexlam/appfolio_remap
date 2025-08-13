
// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;

const { billComponent, receiptsComponent } = window;

const displayedColumns = columns.filter(item => item.display === true);
const customization = generalLedgerObject.generalLedger.customization;

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

        document.getElementById("loading_img").style.display = 'block';

        initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
        initResizeColumn();

        const customizationData = handleAndGetCustomizationData();
        const glAccountOrder = customizationData.selectedGlAccounts.length === 0 ?
            glAccountIdList.slice(start, end) :
            customizationData.selectedGlAccounts.map(item => item.glId);

        try {

            loadData(glAccountOrder);

            // init hideable row
            document.querySelectorAll('.hideable_row_header').forEach(header => {
                header.addEventListener('click', () => {
                    const glAcId = header.closest('[data-gl-account-id]').getAttribute('data-gl-account-id');
                    const content = document.getElementById(`content_${glAcId}`);
                    if (content) {
                        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
                    }
                });
            });
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            document.getElementById("loading_img").style.display = 'none';
        }

        window.addEventListener("scroll", async () => {

            // trigger loading condiction
            const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

            if (atBottom && !reachedBottom && customizationData.selectedGlAccounts.length === 0) {
                reachedBottom = true; // lock until user scrolls up again

                try {
                    document.getElementById("loading_img").style.display = 'block';
                    const glAccountOrder = glAccountIdList.slice(start, end);
                    await loadData(glAccountOrder);
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
        document.getElementById("general_lendger_table").innerHTML += getSummaryRow(displayedColumns, 0, 0, 0);
    }

});

async function loadData(glAccountOrderIdList) {

    console.log('', glAccountOrderIdList)
    console.log(`get: ${start} - ${end}`);

    // get the order by gl account id
    const [glAccountsData, payableBills, receipts] = await Promise.all([
        getGlAccountMap(glAccountOrderIdList),
        getPayableBills(glAccountOrderIdList),
        getReceipts(glAccountOrderIdList)
    ]);

    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert

    // pass the transaction data
    const merged = dataMapping(payableBills, receipts)
    const keyList = Object.keys(merged);

    // only generate the selected gl accounts needed, can ignore if we can query by gl account id
    const filteredGlAccounts = glAccountsData.filter(item => keyList.includes(item.id));

    // loop by gl account
    let totalNetBalance = 0;
    for (const glAccount of filteredGlAccounts) {
        if (glAccount.order.length !== 0) continue;

        const glAccountBills = merged[glAccount.id];

        // sum the net change, balance for each gl account
        let startingBalanceByGlAccount = 100;
        let totalNetChangeByGlAccount = glAccountBills.reduce((sum, entry) => sum + parseInt(entry.balance * 100), 0) / 100;
        let totalBalanceByGlAccount = startingBalanceByGlAccount + totalNetChangeByGlAccount;

        totalNetBalance += totalBalanceByGlAccount;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccount.id}_btn`;
        wrapper.setAttribute('data-gl-account-id', glAccount.id);

        // create row
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount);

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);
    start = end;
    end += getNumberOfGlAccount;
}
