const pagePrefix = 'accountung_setting';
const glAccount = window.glAccountComponent.glCodeData;
const accountingSettingComponent = window.accountingSetting;

document.addEventListener("DOMContentLoaded", function () {

    let accountingSettingForm = document.getElementById('rentKeyAccounts');
    accountingSettingComponent.forEach((component) => {

        accountingSettingForm.insertAdjacentHTML('beforeend', `<div class="text-xl border-b-1 border-gray-300 pb-2 mt-3">${component.header}</div>`);

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

            accountingSettingForm.insertAdjacentHTML('beforeend', glAccountDropDownComponent(component.canAddAnotherAccount, component.displayName, component.id, filterAndGroupByAccountType, selectedGLaccountIds, component.requireDefaultAccount));

            const addAnotherAccountBtn = document.getElementById(`${component.id}_addBtn`);
            if (addAnotherAccountBtn) {
                addAnotherAccountBtn.addEventListener('click', (e) => {
                    const groupContainer = document.getElementById(`${component.id}_group`);
                    const childCount = groupContainer.childElementCount;
                    let id = `${component.id}_${childCount + 1}`;

                    groupContainer.insertAdjacentHTML('beforeend', addDropDownboxComponent(component.id, id, filterAndGroupByAccountType, 'Select a GL Account', ''));
                    addCustomSelect(id);

                    // init remove btn listerner
                    const dropDownRemoveBtn = document.getElementById(`${id}_remove_btn`);
                    dropDownRemoveBtn.addEventListener('click', (e)=>{
                        const dropdownBtnId = e.target.id.replace('_remove_btn', '');
                        const targetDropdownBtnId = document.getElementById(dropdownBtnId);
                        targetDropdownBtnId.remove();
                    })
                })
            }

            // load the dropdown listerner
            const groupContainer = document.getElementById(`${component.id}_group`);
            const childrens = groupContainer.children;
            for (const child of childrens) {
                addCustomSelect(child.id);
            }

        })
    });

    // load the remove btn
    const dropDownRemoveBtn = document.querySelectorAll('[id$="_remove_btn"]');
    dropDownRemoveBtn.forEach((button) => {
        button.addEventListener('click', (e)=>{
            const dropdownBtnId = e.target.id.replace('_remove_btn', '');
            const targetDropdownBtnId = document.getElementById(dropdownBtnId);
            targetDropdownBtnId.remove();
        })
    });

    // on Save btn click
    document.getElementById("accounting_setting_save_btn").addEventListener('click', () => {

        const triggers = document.querySelectorAll('.custom-select-trigger');

        const parsedValues = Array.from(triggers).map(trigger => {
            const rawValue = trigger.getAttribute('data-value');
            return JSON.parse(rawValue)
        });

        const grouped = parsedValues.reduce((acc, item) => {
            if (typeof item === 'object' && item !== null && item.key) {
                if (!acc[item.key]) {
                    acc[item.key] = [];
                }
                acc[item.key].push(item.value);
            }
            return acc;
        }, {});

        console.log(grouped)
    })
});
