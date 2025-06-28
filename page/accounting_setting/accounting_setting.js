const pagePrefix = 'accountung_setting';
const glAccount = window.glAccountComponent.glCodeData;

const componentList = [
    {
        "header": "Rent Key Accounts",
        "components": [
            {
                "id": "rentIncomeAccountSelector",
                "displayName": "Rent Income Account",
                "canAddAnotherAccount": false,
                "glAccounts": ["cash"],
                "selectedGLaccountIds": ["27"]
            },
            {
                "id": "additionalRentIncomeAccountsSelector",
                "displayName": "Additional Rent Income Accounts",
                "canAddAnotherAccount": true,
                "glAccounts": ["cash"],
                "selectedGLaccountIds": ["208", "1098"]
            },
            {
                "id": "subsidizedRentIncomeAccounts",
                "displayName": "Subsidized Rent Income Accounts",
                "canAddAnotherAccount": true,
                "glAccounts": ["cash", "liability"],
                "selectedGLaccountIds": []
            },
            {
                "id": "hudRentIncomeAccount",
                "displayName": "HUD Rent Income Account",
                "canAddAnotherAccount": true,
                "glAccounts": ["cash", "liability"],
                "selectedGLaccountIds": []
            },
            {
                "id": "hudUtilityReimbursementAccount",
                "displayName": "HUD Utility Reimbursement Account",
                "canAddAnotherAccount": true,
                "glAccounts": ["cash", "liability"],
                "selectedGLaccountIds": []
            },
            {
                "id": "hudRepaymentAgreementAccount",
                "displayName": "HUD Repayment Agreement Account",
                "canAddAnotherAccount": true,
                "glAccounts": ["cash", "liability"],
                "selectedGLaccountIds": []
            },
        ]
    },

    {
        "header": "Other Key Accounts",
        "components": [
            {
                "id": "accountsReceivableAccount",
                "displayName": "Accounts Receivable Account",
                "canAddAnotherAccount": false,
                "glAccounts": ["asset"],
                "selectedGLaccountIds": ['4']
            },
            {
                "id": "Accounts Payable Account",
                "displayName": "accountsPayableAccount",
                "canAddAnotherAccount": false,
                "glAccounts": ["liability"],
                "selectedGLaccountIds": ['19']
            },
        ]
    }


]

document.addEventListener("DOMContentLoaded", function () {
    let accountingSettingForm = document.getElementById('rentKeyAccounts');
    
    componentList.forEach((component) => {

        accountingSettingForm.insertAdjacentHTML('beforeend', `<h1>${component.header}</h1>`);

        accountingSettingForm
        component.components.forEach((component) => {
            const selectedGLaccountIds = glAccount
                .filter(item => component.selectedGLaccountIds.includes(item.id));

            const filterAndGroupByAccountType = glAccount
                .filter(item => component.glAccounts.includes(item.accountType))
                .reduce((acc, item) => {
                    const key = item.accountTypeName;
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(item);
                    return acc;
                }, {});

            accountingSettingForm.insertAdjacentHTML('beforeend', glAccountDropDownComponent(component.canAddAnotherAccount, component.displayName, component.id, filterAndGroupByAccountType, selectedGLaccountIds));

            const addAnotherAccountBtn = document.getElementById(`${component.id}_addBtn`);
            if (addAnotherAccountBtn) {
                addAnotherAccountBtn.addEventListener('click', (e) => {
                    const groupContainer = document.getElementById(`${component.id}_group`);
                    const childCount = groupContainer.childElementCount;
                    let id = `${component.id}_${childCount + 1}`
                    groupContainer.insertAdjacentHTML('beforeend', addDropDownboxComponent(id, filterAndGroupByAccountType));
                    addCustomSelect(id);
                })
            }

            // load the dropdown listerner
            const groupContainer = document.getElementById(`${component.id}_group`);
            const childrens = groupContainer.children;
            for (const child of childrens) {
                addCustomSelect(child.id);
            }
        })

    })
});
