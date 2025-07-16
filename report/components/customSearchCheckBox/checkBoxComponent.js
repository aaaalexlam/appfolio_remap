const createCheckBoxComponentHTML = (inputType, displayName, tablePrefix) => {
        return `
                <tr class="tr-default">
                    <td class="input_field"></td>
                    <td class="input_column column_row">
                        <label>
                            <input type="checkBox" name="${tablePrefix}_${inputType}" value="${inputType}">
                            <span>${displayName}</span>
                        </label>
                    </td>
                </tr>
    `;
}