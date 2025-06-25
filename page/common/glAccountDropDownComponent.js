
const glAccountDropDownComponent = (displayName, id, glaccounts) => {
    const glAccount = window.glAccountComponent.glCodeData;
    console.log(glAccount)
    return `
    <div class="flex items-center mt-2">
        <div class="mr-2 w-80 text-end">${displayName}</div>
        <div class="w-80 custom-select-container custom-select" id=${id}>
            <div class="custom-select-trigger">Select payment type</div>
            <div class="custom-options" id="${id}_list">
                // generate the selection based on the glAccounts 
            </div>
        </div>
    </div>
    `
}