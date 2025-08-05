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
                    <td class="input_field h-48">${displayName}</td>
                    <td class="input_column">
                        <div class="gl_account_search_div">
                            <div class="gl_account_search_input_div">
                                <input type="text" id="${tablePrefix}gl_account_search" placeholder="Type to search GL Accounts">
                            </div>
                            
                            <div class="additional_cahs_gl_accounts_group">
                                ${glAccountCheckBoxComponeny("all", "", "", "All", true)}
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
    if (checkboxes.length === 0) return 'N/A';

    const { number, accountName } = JSON.parse(checkboxes[0].value);
    let selectedAdditionalCashGlAccounts = ` ${number}: ${accountName}`;

    for (let i = 1; i < checkboxes.length; i++) {
        const { number, accountName } = JSON.parse(checkboxes[i].value);
        selectedAdditionalCashGlAccounts += ` | ${number}: ${accountName} `
    }

    return `[${selectedAdditionalCashGlAccounts}]`;
}
const addGlAccountsEventListener = (tablePrefix) => {

    // on search
    const input = document.getElementById(`${tablePrefix}gl_account_search`);
    const additional_cahs_gl_accounts = document.getElementById(`${tablePrefix}additional_cahs_gl_accounts`);
    input.addEventListener('input', function (event) {
        additional_cahs_gl_accounts.innerHTML = getData(event.target.value)
    });

    // handle on checkbox click
    const checkboxes = document.querySelectorAll('input[name="gl_account_checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            if (this.value !== 'all') {
                const allCheckbox = document.querySelector('input[name="gl_account_checkbox"][value="all"]');
                allCheckbox.checked = false;
            } else {
                checkboxes.forEach(cb => {
                    if (cb.value !== 'all') {
                        cb.checked = false;
                    }
                });
            }
        });
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
            glAccountCheckBoxComponeny(glAccount.id, glAccount.accountName, glAccount.number, `${glAccount.number}: ${glAccount.accountName}`, false)
        )
        .join("");

}

function getSelectedGlAccount() {
    const selectedGlAccountsCheckboxs = Array.from(document.querySelectorAll('input[name="gl_account_checkbox"]:checked'));
    const selectedGlAccountList = [];

    selectedGlAccountsCheckboxs.forEach(selectedGlAccountsCheckbox => {
        selectedGlAccountList.push(
            {
                "glId": selectedGlAccountsCheckbox.value,
                "accountNumber": selectedGlAccountsCheckbox.getAttribute('accountNumber'),
                "accountName": selectedGlAccountsCheckbox.getAttribute('accountName')
            }
        )
    });
    return selectedGlAccountList;
}

function formatSelectedGLAccount(getSelectedGlAccountList) {
    if (getSelectedGlAccountList.length === 0) {
        return "All Gl Accounts"
    }

    let formartStr = `${getSelectedGlAccountList[0].accountNumber} - ${getSelectedGlAccountList[0].accountName}`;

    for (let i = 1; i < getSelectedGlAccountList.length; i++) {
        formartStr += ` | ${getSelectedGlAccountList[i].accountNumber} - ${getSelectedGlAccountList[i].accountName}`
    }

    return formartStr;

}

const glAccountCheckBoxComponeny = (id, accountName, number, displayName, isChecked) => {
    return `
            <label class="additional_cahs_gl_accounts_checkbox_label">
                <input type="checkBox" 
                name='gl_account_checkbox'
                class="mr-1"
                value='${id}'
                accountName='${accountName}'
                accountNumber='${number}'
                ${isChecked ? 'checked' : ''}
            >
                <span>${displayName}</span>
            </label>
        `
}
