function createAsOfHTML() {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="as_of_field">As of <span style="color: red;">*</span></td>
                    <td class="input_column">
                        <input type="radio" name="as_of_radio" id="as_of_radio_input_date" checked>
                        <input type="date" id="as_of_date">
                    </td>
                </tr>
                <tr class="tr-default">
                    <td class="input_field" id="as_of_field"></td>
                    <td class="input_column">
                        <input type="radio" name="as_of_radio" id="as_of_radio_select_date">
                        <select name="as_of_select" id="as_of_select_date">
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

