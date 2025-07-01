const glAccountDropDownComponent = (
  canAddAnotherAccount,
  displayLabel,
  id,
  glaccounts,
  selectedGLaccountIds = [],
  requireDefaultAccount
) => {

  const addButtonHtml = canAddAnotherAccount
    ? `
      <button 
        id="${id}_addBtn"
        class="w-80 py-[6px] px-[10px] cursor-pointer bg-green-100 text-green-800 hover:bg-green-200">
        Add Another Account
      </button>
    `
    : '';

  let dropDownHtml = '';

  if (selectedGLaccountIds.length > 0) {
    for (const glAcc of selectedGLaccountIds) {
      const tempId = `${id}_${glAcc.id}`;
      const label = `${glAcc.number} - ${glAcc.accountName}`;
      const value = {
        key: id,
        value: glAcc.id
      };
      dropDownHtml += addDropDownboxComponent(id, tempId, glaccounts, label, value, requireDefaultAccount);
    }
  } else {
    dropDownHtml = addDropDownboxComponent(id, id, glaccounts, 'Select a GL Account', '', requireDefaultAccount);
  }

  return `
    <div class="flex mt-2">
      <div class="flex items-center justify-end mr-2 h-10 w-80">
        ${displayLabel}
      </div>
      <div>
        <div id="${id}_group">
          ${dropDownHtml}
        </div>
        ${addButtonHtml}
      </div>
    </div>
  `;
};

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

function addDropDownboxComponent(componentKey, id, glaccounts, displayName, value, requireDefaultAccount) {
  const optionsHtml = Object.entries(glaccounts).map(([groupName, accounts]) => {
    const accountOptions = accounts.map(glaccount => {
      const optionValue = JSON.stringify({
        key: componentKey,
        value: glaccount.id
      });

      return `
        <div class="custom-option indent-2" data-value='${optionValue}'>
          ${glaccount.number} - ${glaccount.accountName}
        </div>
      `;
    }).join('');

    return `
      <div class="font-bold px-2 py-1 text-gray-700">${groupName}</div>
      ${accountOptions}
    `;
  }).join('');

  const removeBtnHtml = requireDefaultAccount ? ``
    :
    `<div class="ml-2 flex items-center justify-center border-2 border-red-400 w-5 h-5 rounded-full hover:border-red-300">
    <div class="mb-1 text-red-400 font-bold" id="${id}_remove_btn">x</div>
  </div>`;
  return `
    <div class="flex items-center mb-1 h-10 custom-select-container custom-select" id="${id}">
      <div data-value='${JSON.stringify(value)}' class="custom-select-trigger w-80">${displayName}</div>
      <div class="custom-options flex" id="${id}_list">
        <input type="text" placeholder="Type to filter...">
        ${optionsHtml}
      </div>
      ${removeBtnHtml}
    </div>
  `;
}

function addAnotherAccount(id, glaccounts) {
  const groupContainer = document.getElementById(`${id}_group`);
  if (groupContainer) {
    groupContainer.insertAdjacentHTML('beforeend', addDropDownboxComponent(id, glaccounts, 'Select a GL Account', ''));
  }
}