const pagePrefix = 'accountung_setting';

const componentList = [
    {
        "id": "rentIncomeAccountSelector",
        "displayName": "Rent Income Account",
        "canAddAnotherAccount": false,
        "glAccounts": ["cash"],
        "selectedGLaccounts": ["4010"]
    },
    {
        "id": "additionalRentIncomeAccountsSelector",
        "displayName": "Additional Rent Income Accounts",
        "canAddAnotherAccount": true,
        "glAccounts": ["cash"],
        "selectedGLaccounts": ["4011", "4012"]
    },
    {
        "id": "subsidizedRentIncomeAccounts",
        "displayName": "Subsidized Rent Income Accounts",
        "canAddAnotherAccount": true,
        "glAccounts": ["cash", "liability"],
        "selectedGLaccounts": []
    },
    {
        "id": "hudRentIncomeAccount",
        "displayName": "HUD Rent Income Account",
        "canAddAnotherAccount": true,
        "glAccounts": ["cash", "liability"],
        "selectedGLaccounts": []
    },
    {
        "id": "hudUtilityReimbursementAccount",
        "displayName": "HUD Utility Reimbursement Account",
        "canAddAnotherAccount": true,
        "glAccounts": ["cash", "liability"],
        "selectedGLaccounts": []
    },
    {
        "id": "hudRepaymentAgreementAccount",
        "displayName": "HUD Repayment Agreement Account",
        "canAddAnotherAccount": true,
        "glAccounts": ["cash", "liability"],
        "selectedGLaccounts": []
    },
    
]

document.addEventListener("DOMContentLoaded", function () {
    let accountingSettingForm = document.getElementById('rentKeyAccounts');

    componentList.forEach((component) => {
        accountingSettingForm.innerHTML += glAccountDropDownComponent(component.displayName, component.id, component.glAccounts)
    })
    // addCustomSelect('paymentSelect');
    // function addCustomSelect(containerId, onSelectCallback = () => { }) {
    //     console.log('addCustomSelect')
    //     const container = document.getElementById(containerId);
    //     if (!container) return;

    //     const selectTrigger = container.querySelector('.custom-select-trigger');
    //     const optionsWrapper = container.querySelector('.custom-options');
    //     const filterInput = container.querySelector('input[type="text"]');
    //     const options = container.querySelectorAll('.custom-option');

    //     selectTrigger.addEventListener('click', function () {
    //         const isVisible = optionsWrapper.style.display === 'block';
    //         optionsWrapper.style.display = isVisible ? 'none' : 'block';
    //         filterInput.value = '';
    //         filterInput.focus();
    //         filterOptions(options, '');
    //     });

    //     options.forEach(option => {
    //         option.addEventListener('click', function () {
    //             selectTrigger.textContent = this.textContent;
    //             selectTrigger.dataset.value = this.dataset.value;
    //             optionsWrapper.style.display = 'none';

    //             // Custom callback when an option is selected
    //             onSelectCallback(this.dataset.value, this.textContent);
    //         });
    //     });

    //     filterInput.addEventListener('input', function () {
    //         filterOptions(options, this.value);
    //     });

    //     // Close dropdown if click is outside
    //     document.addEventListener('click', function (event) {
    //         if (!container.contains(event.target)) {
    //             optionsWrapper.style.display = 'none';
    //         }
    //     });
    // }

    // function filterOptions(options, query) {
    //     options.forEach(option => {
    //         if (option.textContent.toLowerCase().includes(query.toLowerCase())) {
    //             option.classList.remove('hidden');
    //         } else {
    //             option.classList.add('hidden');
    //         }
    //     });
    // }
});
function addCustomSelect(containerId, onSelectCallback = () => { }) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const selectTrigger = container.querySelector('.custom-select-trigger');
    const optionsWrapper = container.querySelector('.custom-options');
    const filterInput = container.querySelector('input[type="text"]');
    const options = container.querySelectorAll('.custom-option');

    selectTrigger.addEventListener('click', function () {
        const isVisible = optionsWrapper.style.display === 'block';
        optionsWrapper.style.display = isVisible ? 'none' : 'block';
        filterInput.value = '';
        filterInput.focus();
        filterOptions(options, '');
    });

    options.forEach(option => {
        option.addEventListener('click', function () {
            selectTrigger.textContent = this.textContent;
            selectTrigger.dataset.value = this.dataset.value;
            optionsWrapper.style.display = 'none';

            // Custom callback when an option is selected
            onSelectCallback(this.dataset.value, this.textContent);
        });
    });

    filterInput.addEventListener('input', function () {
        filterOptions(options, this.value);
    });

    // Close dropdown if click is outside
    document.addEventListener('click', function (event) {
        if (!container.contains(event.target)) {
            optionsWrapper.style.display = 'none';
        }
    });
}

function filterOptions(options, query) {
    options.forEach(option => {
        if (option.textContent.toLowerCase().includes(query.toLowerCase())) {
            option.classList.remove('hidden');
        } else {
            option.classList.add('hidden');
        }
    });
}