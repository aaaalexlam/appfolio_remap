const createBillDateRangeComponent = (displayName, tablePrefix) => {

    // Get the last day of the current month
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Format to YYYY-MM-DD
    const formattedToday = today.toISOString().split("T")[0];
    const formattedFirstDay = firstDayOfMonth.toISOString().split("T")[0];

    const optionsHTML = dateRangeOptions
        .map(date => `<option value="${date.value}">${date.displayName}</option>`)
        .join("");

    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}<span style="color: red;">*</span></td>
                    <td class="input_column">
                        <input type="radio" class="dateRangeRadio" name="bill_date_range_radio" id="${tablePrefix}bill_date_range_radio" class="" checked>
                        <input type="date" id="${tablePrefix}bill_date_range_input_from" value=${formattedFirstDay} class="${radioDateRangeEnableCss}" value="">
                        <div class="ml-2 mr-2">To</div>
                        <input type="date" id="${tablePrefix}bill_date_range_input_to" value=${formattedToday} class="${radioDateRangeEnableCss}" value="">
                    </td>
                </tr>
                <tr class="tr-default">
                    <td class="input_field"></td>
                    <td class="input_column">
                        <input type="radio" class="dateRangeRadio" name="bill_date_range_radio" id="${tablePrefix}bill_date_range_selector_radio" class="">
                        <select name="" id="${tablePrefix}bill_date_range_selector" class="${dageRangeSelectorDisableCss}" disabled>
                            ${optionsHTML}
                        </select>
                        </label>
                    </td>
                </tr>
    `;

}

function addBillDateRangeEventListener(tablePrefix) {
    const radios = document.getElementsByName("bill_date_range_radio");
    const date_range_input_from = document.getElementById(`${tablePrefix}bill_date_range_input_from`);
    const date_range_input_to = document.getElementById(`${tablePrefix}bill_date_range_input_to`);
    const date_range_selector = document.getElementById(`${tablePrefix}bill_date_range_selector`);

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                if (radio.id === `${tablePrefix}bill_date_range_radio`) {
                    date_range_selector.disabled = true;
                    date_range_selector.className = dageRangeSelectorDisableCss;

                    date_range_input_to.disabled = false;
                    date_range_input_to.className = radioDateRangeEnableCss;

                    date_range_input_from.disabled = false;
                    date_range_input_from.className = radioDateRangeEnableCss;

                } else if (radio.id === `${tablePrefix}bill_date_range_selector_radio`) {

                    date_range_selector.disabled = false;
                    date_range_selector.className = dageRangeSelectorEnableCss;

                    date_range_input_to.disabled = true;
                    date_range_input_to.className = radioDateRangeDisableCss;

                    date_range_input_from.disabled = true;
                    date_range_input_from.className = radioDateRangeDisableCss;

                }
            }
        });
    });
}

function getSelectedBillDateRange(tablePrefix) {
    let dateRange = {
        "startDate": "",
        "endDate": ""
    }
    if (document.getElementById(`${tablePrefix}bill_date_range_radio`).checked) {

        dateRange.startDate = `${document.getElementById(`${tablePrefix}bill_date_range_input_from`).value}`;
        dateRange.endDate = `${document.getElementById(`${tablePrefix}bill_date_range_input_to`).value}`

        return dateRange;
    }
    return dateRangeConvertor(document.getElementById(`${tablePrefix}bill_date_range_selector`).value);

}