// table prefix
const tablePrefix = 'general_lendger_';
const generalLedgerObject = window.reportComponent.data.find(item => item.hasOwnProperty('generalLedger'));
const columns = generalLedgerObject.generalLedger.columns;
const customization = generalLedgerObject.generalLedger.customization;

// get the glAccount data
const glAccounts = window.glAccountComponent.glCodeData;


// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {
    // initCustomizationForm(customization, tablePrefix);
    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initTable();

    // initResizeColumn();
});

function initTable() {
    const table = document.getElementById(`${tablePrefix}table_content`);

    for (let i = 0; i < glAccounts.length; i++) {
        if(glAccounts[i].order.length !== 0) continue;
        const wrapper = document.createElement('div');
        wrapper.id = `hide_${glAccounts[i].id}_btn`;
        wrapper.innerHTML = getHideableRow(glAccounts[i]);
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

    // init hideable row

}


