const glAccountData = window.glAccountComponent.glCodeData;
const checkBoxHtml = glAccountData
    .map(glAccount =>
        `
            <label class="additional_cahs_gl_accounts_checkbox_label">
                <input type="checkBox" 
                value='${JSON.stringify({
            number: glAccount.number,
            accountName: glAccount.accountName,
        })}'
                >
                <span>${glAccount.number}: ${glAccount.accountName}</span>
            </label>
        `)
    .join("");

const createGLAccuntsHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}</td>
                    <td class="input_column">
                        <div class="gl_account_search_div">
                            <div class="gl_account_search_input_div">
                                <input type="text" id="${tablePrefix}gl_account_search" placeholder="Type to search GL Accounts">
                            </div>
                            
                            <div class="additional_cahs_gl_accounts_group">
                                <div id="${tablePrefix}additional_cahs_gl_accounts" class="">
                                    ${getData("")}
                            </div>
                        </div>
                    </td>
                </tr>
    `;
}


const getSelectedCashGlAccount = (tablePrefix) => {

    const checkboxes = document.getElementById(`${tablePrefix}additional_cahs_gl_accounts`).querySelectorAll('input[type="checkbox"]:checked');
    if(checkboxes.length === 0) return 'N/A';

    const { number, accountName } = JSON.parse(checkboxes[0].value);
    let selectedAdditionalCashGlAccounts = ` ${number}: ${accountName}`;

    for (let i = 1; i<checkboxes.length; i++){
        const { number, accountName } = JSON.parse(checkboxes[i].value);
        selectedAdditionalCashGlAccounts += ` | ${number}: ${accountName} `
    }

    return `[${selectedAdditionalCashGlAccounts}]`;
}
const addGlAccountsEventListener = (tablePrefix) => {
    const input = document.getElementById(`${tablePrefix}gl_account_search`);
    const additional_cahs_gl_accounts = document.getElementById(`${tablePrefix}additional_cahs_gl_accounts`);
    input.addEventListener('input', function (event) {
        additional_cahs_gl_accounts.innerHTML = getData(event.target.value)
    });
}

const getData = (keyWord) => {
    const filteredData = keyWord.length === 0 ? glAccountData : glAccountData.filter(glAccount => {
        return (
            (
                glAccount.accountName?.toLowerCase().includes(keyWord.toLowerCase()) ||
                glAccount.number?.toLowerCase().includes(keyWord.toLowerCase())
            )
        );
    });


    return filteredData
        .map(glAccount =>
            `
            <label class="additional_cahs_gl_accounts_checkbox_label">
                <input type="checkBox" 
                name='gl_account_checkbox'
                value='${JSON.stringify({
                number: glAccount.number,
                accountName: glAccount.accountName,
            })}'
                >
                <span>${glAccount.number}: ${glAccount.accountName}</span>
            </label>
        `)
        .join("");

}

// const getSelectedCashGlAccount = (tablePrefix) => {
//     const checkboxes = document.getElementById(`${tablePrefix}additional_cahs_gl_accounts`).querySelectorAll('input[type="checkbox"]:checked');
//     if(checkboxes.length === 0) return 'N/A';

//     const { number, accountName } = JSON.parse(checkboxes[0].value);
//     let selectedAdditionalCashGlAccounts = ` ${number}: ${accountName}`;

//     for (let i = 1; i<checkboxes.length; i++){
//         const { number, accountName } = JSON.parse(checkboxes[i].value);
//         selectedAdditionalCashGlAccounts += ` | ${number}: ${accountName} `
//     }

//     return `[${selectedAdditionalCashGlAccounts}]`;
// }
