
// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;
const billList = groupByGlAccount(window.billComponent.data);

const displayedColumns = columns.filter(item => item.display === true);
// const customization = generalLedgerObject.generalLedger.customization;

// get the glAccount data
const glAccounts = window.glAccountComponent.glCodeData;

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {
    // initCustomizationForm(customization, tablePrefix);
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initTable();

    initResizeColumn();
});

function initTable() {
    const table = document.getElementById(`${tablePrefix}table_content`);

    for (let i = 0; i < glAccounts.length; i++) {
        if (glAccounts[i].order.length !== 0) continue;
        // get all bills that may by same gl account
        const glAccountBills = billList[glAccounts[i].id];

        
        // main row
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccounts[i].id}_btn`;
        wrapper.innerHTML = getHideableRow(glAccounts[i], tablePrefix, glAccountBills, displayedColumns);

        wrapper.addEventListener('click', function (event) {
            const tag = event.target.tagName.toLowerCase();
            let id = tag === 'div' ? event.target.parentElement.id : event.target.parentElement.parentElement.id;
            id = id.split('_')[1];

            let content = document.getElementById(`content_${id}`);

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });

        table.appendChild(wrapper);
    }

}

function groupByGlAccount(billList) {
    // Grouping logic
    const grouped = {};
    billList.forEach(entry => {

        entry.billDetails.forEach(detail => {
            const glId = detail.glAccountId;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }

            // map with columns key
            grouped[glId].push({
                "property": detail.propertyName,
                "date": entry.billDate,
                "payeeOrPayer": entry.payeeName,
                "type": "check",
                "reference": entry.reference,
                "credit": 0,
                "debit": 0,
                "amount": detail.amount,
                "description": detail.description,
            });
        });
    });
    return grouped;
}

