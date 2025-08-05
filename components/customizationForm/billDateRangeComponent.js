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
                        <input type="radio" checked class="dateRangeRadio" name="bill_date_range_radio" id="${tablePrefix}bill_date_range_radio">
                        <input type="date" id="${tablePrefix}bill_date_range_input_from" value=${formattedFirstDay} class="dateRangeFrom" value="">
                        <div>To</div>
                        <input type="date" id="${tablePrefix}bill_date_range_input_to" value=${formattedToday} class="dateRangeTo" value="">
                    </td>
                </tr>
                <tr class="tr-default">
                    <td class="input_field"></td>
                    <td class="input_column">
                        <input type="radio" class="dateRangeRadio" name="bill_date_range_radio" id="${tablePrefix}bill_date_range_selector_radio" class="">
                         <select id="${tablePrefix}bill_date_range_selector" class="dateRangeSelector bg-gray-200" disabled>
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
                    date_range_input_to.disabled = false;
                    date_range_input_from.disabled = false;

                    date_range_selector.className = "dateRangeSelector bg-gray-200";
                    date_range_input_to.className = "dateRangeTo bg-white"
                    date_range_input_from.className = "dateRangeFrom bg-white"

                } else if (radio.id === `${tablePrefix}bill_date_range_selector_radio`) {
                    date_range_selector.disabled = false;
                    date_range_input_to.disabled = true;
                    date_range_input_from.disabled = true;
                    
                    date_range_selector.className = "dateRangeSelector bg-white";
                    date_range_input_to.className = "dateRangeTo bg-gray-200"
                    date_range_input_from.className = "dateRangeFrom bg-gray-200"
                } 
            }
        });
    });
}


function getSelectedBillDateRange(tablePrefix) {
    
    if (!document.getElementById(`${tablePrefix}bill_date_range_radio`).checked && !document.getElementById(`${tablePrefix}bill_date_range_selector_radio`).checked){
        return null;
    }

    if (document.getElementById(`${tablePrefix}bill_date_range_radio`).checked) {
        return `${document.getElementById(`${tablePrefix}bill_date_range_input_from`).value} To ${document.getElementById(`${tablePrefix}bill_date_range_input_to`).value}`
    }
    return document.getElementById(`${tablePrefix}bill_date_range_selector`).value;
}