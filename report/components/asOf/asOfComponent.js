function createAsOfHTML(displayName, tablePrefix) {
    // Get the last day of the current month
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 0 = last day of previous month

    // Format to YYYY-MM-DD
    const formatted = lastDay.toISOString().split("T")[0];
    return `
                <tr class="tr-default">
                    <td class="input_field" id="${tablePrefix}as_of_field">${displayName} <span style="color: red;">*</span></td>
                    <td class="input_column">
                        <input type="radio" name="as_of_radio" id="${tablePrefix}as_of_radio_input_date" class="as_of_radio_input_date" checked>
                        <input type="date" id="${tablePrefix}as_of_date" class="as_of_date" value=${formatted}>
                    </td>
                </tr>
                <tr class="tr-default">
                    <td class="input_field" id="${tablePrefix}as_of_field"></td>
                    <td class="input_column">
                        <input type="radio" name="as_of_radio" id="${tablePrefix}as_of_radio_select_date" class="as_of_radio_select_date">
                        <select name="as_of_select" id="${tablePrefix}as_of_select_date" class="as_of_select_date" disabled>
                            <option value="today">Today</option>
                            <option value="end_of_last_week">End of Last Week</option>
                            <option value="end_of_last_month">End of Last Month</option>
                            <option value="end_of_last_quarter">End of Last Quarter</option>
                            <option value="end_of_this_quarter">End of This Quarter</option>
                            <option value="end_of_this_year">End of This Year</option>
                            <option value="yesterday">Yesterday</option>
                        </select>
                        </label>
                    </td>
                </tr>
    `;
}

function addAsOfEventListener(tablePrefix) {
    const radios = document.getElementsByName("as_of_radio");
    const as_of_date = document.getElementById(`${tablePrefix}as_of_date`);
    const as_of_select_date = document.getElementById(`${tablePrefix}as_of_select_date`);

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                if (radio.id === `${tablePrefix}as_of_radio_input_date`) {
                    as_of_date.disabled = false;
                    as_of_select_date.disabled = true;
                } else if (radio.id === `${tablePrefix}as_of_radio_select_date`) {
                    as_of_date.disabled = true;
                    as_of_select_date.disabled = false;
                }
            }
        });
    });
}
