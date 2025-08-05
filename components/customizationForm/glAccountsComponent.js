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
                    <td class="input_field h-43">${displayName}</td>
                    <td class="input_column">
                        <div class="gl_account_search_div">
                            <div>Select: 
                                <span class="text-blue-500 cursor-pointer" id="${tablePrefix}select_all_btn">All</span>
                                <span class="text-blue-500 cursor-pointer" id="${tablePrefix}select_none_btn">None</span>
                                <span class="text-gray-400" id="${tablePrefix}number_of_selected_gl_account">0 item selected</span>
                            </div>
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
    input.addEventListener('input', function (event) {
        const keyword = this.value.toLowerCase();
        const labels = document.querySelectorAll('.additional_cahs_gl_accounts_checkbox_label');

        labels.forEach(label => {
            const checkbox = label.querySelector('input[name="gl_account_checkbox"]');
            const accountName = checkbox.getAttribute('accountname').toLowerCase();
            const accountNumber = checkbox.getAttribute('accountnumber')?.toLowerCase() || '';

            if (accountName.includes(keyword) || accountNumber.includes(keyword)) {
                label.style.display = '';
              } else {
                label.style.display = 'none';
              }
          });

    });

    // handle on checkbox click
    const checkboxes = document.querySelectorAll('input[name="gl_account_checkbox"]');
    const allCheckbox = document.querySelector('input[name="gl_account_checkbox"][value="all"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            if (this.value !== 'all') {
                allCheckbox.checked = false;
                const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
                document.getElementById(`${tablePrefix}number_of_selected_gl_account`).innerText = `${checkedCount} items selected`
            } else {
                checkboxes.forEach(cb => {
                    document.getElementById(`${tablePrefix}number_of_selected_gl_account`).innerText = `1 item selected`
                    if (cb.value !== 'all') {
                        cb.checked = false;
                    }
                });
            }
        });
    });

    // handle all btn click
    const allBtn = document.getElementById(`${tablePrefix}select_all_btn`);
    allBtn.addEventListener('click', function () {
        document.getElementById(`${tablePrefix}number_of_selected_gl_account`).innerText = `1 item selected`
        // Your logic here
        allCheckbox.checked = true;
        checkboxes.forEach(cb => {
            if (cb.value !== 'all') {
                cb.checked = false;
            }
        });
    });

    const noneBtn = document.getElementById(`${tablePrefix}select_none_btn`);
    noneBtn.addEventListener('click', function () {
        document.getElementById(`${tablePrefix}number_of_selected_gl_account`).innerText = `0 item selected`
        // Your logic here
        checkboxes.forEach(cb => {
            cb.checked = false;
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
