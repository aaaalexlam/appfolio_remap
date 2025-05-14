const glAccountData = window.glAccountComponent.glCodeData;
const cashData = glAccountData.filter(glAccount => glAccount.accountType === 'cash');

const checkBoxHtml = cashData
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


const createAdditionalCashGLAccuntsHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field additional_cahs_gl_accounts_group_input_field">${displayName}</td>
                    <td class="input_column">
                        <div class="additional_cahs_gl_accounts_group">
                            <div id="${tablePrefix}additional_cahs_gl_accounts" class="">
                                ${checkBoxHtml}
                            </div>
                        </div>
                    </td>
                </tr>
    `;
}

const getSelectedCashGlAccount = (tablePrefix) => {


    const checkboxes = document.getElementById(`${tablePrefix}additional_cahs_gl_accounts`).querySelectorAll('input[type="checkbox"]:checked');
    if(checkboxes.length === 0) return '';

    const { number, accountName } = JSON.parse(checkboxes[0].value);
    let selectedAdditionalCashGlAccounts = ` ${number}: ${accountName}`;

    for (let i = 1; i<checkboxes.length; i++){
        const { number, accountName } = JSON.parse(checkboxes[i].value);
        selectedAdditionalCashGlAccounts += ` | ${number}: ${accountName} `
    }

    return `[${selectedAdditionalCashGlAccounts}]`;
}