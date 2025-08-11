
// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;

const { billComponent, receiptsComponent } = window;

const displayedColumns = columns.filter(item => item.display === true);
const customization = generalLedgerObject.generalLedger.customization;

let getNumberOfGlAccount = 10;
let getNumberOfGlAccountStartFrom = 0;

let loading = false;

window.addEventListener("scroll", async () => {

    const tableHeaderDiv = document.querySelector('.table_header');
    const rect = tableHeaderDiv.getBoundingClientRect();
    if(rect.top < 0) {
        console.log('tableHeaderDiv.style.top = ')
        tableHeaderDiv.style.top = '20';
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
        // Show loading image

        let start = getNumberOfGlAccountStartFrom;
        let end = start + getNumberOfGlAccount;

        try {
            document.getElementById("loading_img").style.display = 'block';
            await loadData(start, end);
            getNumberOfGlAccountStartFrom += getNumberOfGlAccount;
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            // Hide loading image after loadData completes (success or failure)
            document.getElementById("loading_img").style.display = 'none';
     
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("loading_img").style.display = 'none';

    initCustomizationForm(customization, tablePrefix);
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initResizeColumn();

    document.addEventListener('click', async function (event) {

        // hide modal onClicked
        // get data from google firestore

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

    document.getElementById(`${tablePrefix}post_form_btn`).onclick = async function () {

        document.getElementById("loading_img").style.display = 'block';

        const selectedPropertiesList = getSelectedProperties();
        const getSelectedGlAccountList = getSelectedGlAccount();

        const accountingBasis = document.getElementById(`${tablePrefix}accounting_basis`).value;
        const dateRange = getSelectedDateRange(tablePrefix);

        const lastEditDateRange = getSelectedLastEditDateRange(tablePrefix);
        const createdBy = document.getElementById(`${tablePrefix}created_by`).value;

        const excludeZeroDollarReceiptsFromCashAccounts = getCheckBoxValueByKey(tablePrefix, "excludeZeroDollarReceiptsFromCashAccounts");
        const showReversedTransactions = getCheckBoxValueByKey(tablePrefix, "showReversedTransactions");

        const customization = {
            "properties": [selectedPropertiesList],
            "createdBy": {
                "id": 1,
                "name": createdBy
            },
            "selectedGlAccounts": [getSelectedGlAccountList],
            "dateRange": {
                "startDate": dateRange.startDate,
                "endDate": dateRange.endDate
            },
            "lastEditDateRange": {
                "startDate": lastEditDateRange.startDate,
                "endDate": lastEditDateRange.endDate
            },
            "accountingBasis": accountingBasis,
            "excludeZeroDollarReceiptsFromCashAccounts": excludeZeroDollarReceiptsFromCashAccounts,
            "showReversedTransactions": showReversedTransactions
        }

        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formartPropertiesStr(selectedPropertiesList);
        document.getElementById(`${tablePrefix}custom_search_summary_createdBy`).innerText = createdBy;
        document.getElementById(`${tablePrefix}custom_search_summary_glAccounts`).innerText = formatSelectedGLAccount(getSelectedGlAccountList);
        document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = `From: ${dateRange.startDate} To: ${dateRange.endDate}`;
        document.getElementById(`${tablePrefix}custom_search_summary_accountingBasis`).innerText = accountingBasis;
        document.getElementById(`${tablePrefix}custom_search_summary_lastEditedRange`).innerText = `From: ${lastEditDateRange.startDate} To: ${lastEditDateRange.endDate}`;;
        document.getElementById(`${tablePrefix}custom_search_summary_excludeZeroDollarReceiptsFromCashAccounts`).innerText = excludeZeroDollarReceiptsFromCashAccounts;
        document.getElementById(`${tablePrefix}custom_search_summary_showReversedTransactions`).innerText = showReversedTransactions;
        document.getElementById(`${tablePrefix}modal`).style.display = "none";

        try {
            const auth = window.firebaseAuth;
            const db = window.firebaseFirestore;

            const initGlAccountOrder = await getGlAccountOrder(db, getNumberOfGlAccountStartFrom);
            
            const [glAccountsData, payableBills, receipts] = await Promise.all([
                getGlAccountMap(db),
                getPayableBills(db),
                getReceipts(db)
            ]);

            initTable(glAccountsData, billComponent, receiptsComponent);

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

    }

});

function initTable(glAccountsData, payableBills, receipts) {
    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert
    const merged = initData();
    const keyList = Object.keys(merged);

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
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount);

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);

    let totalCredit = 0;
    let totalDebit = 0;
    for (const records of Object.values(merged)) {
        for (const item of records) {
            const credit = parseFloat(item.credit.toString().replace(/,/g, '')) || 0;
            const debit = parseFloat(item.debit.toString().replace(/,/g, '')) || 0;
            totalDebit += debit;
            totalCredit += credit;
        }
    }

    // Get total length for each key
    const totalResult = Object.values(merged).reduce((sum, arr) => sum + arr.length, 0);
    table.innerHTML += getSummaryRow(displayedColumns, totalResult, totalDebit, totalCredit, totalNetBalance);
}

function initData() {
    const groupedSources = [
        groupByCashAccountForBill(billComponent.data),
        groupByGLAccountForBill(billComponent.data),
        groupByCashAccountForReceipt(receiptsComponent.data),
        groupByGLAccountForReceipt(receiptsComponent.data),
    ];

    // Collect all unique keys
    const allKeys = new Set();
    groupedSources.forEach(group =>
        Object.keys(group).forEach(key => allKeys.add(key))
    );
    // Merge values from all groups under each key
    const merged = {};
    for (const key of allKeys) {
        merged[key] = groupedSources.flatMap(group => group[key] || []);
    }
    return merged;
}

async function loadData(start, end){
    console.log(`get: ${start} - ${end}`);
    const table = document.getElementById(`${tablePrefix}table_content`);
    const fragment = document.createDocumentFragment(); // improves batch DOM insert
    const merged = initData();
    const keyList = Object.keys(merged);

    const db = window.firebaseFirestore;
    const [glAccountsData, payableBills, receipts] = await Promise.all([
        getGlAccountMap(db),
        getPayableBills(db),
        getReceipts(db)
    ]);

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
        wrapper.innerHTML = getHideableRow(glAccount, tablePrefix, glAccountBills, displayedColumns, startingBalanceByGlAccount, totalNetChangeByGlAccount, totalBalanceByGlAccount);

        fragment.appendChild(wrapper);
    }

    table.appendChild(fragment);
}

