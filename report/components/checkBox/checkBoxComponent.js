function createCheckBoxHTML(key, displayName, tablePrefix) {
    return `
                <tr class="tr-default">
                    <td class="input_field"></td>
                    <td class="input_column column_row">
                        <label>
                            <input type="checkBox" name="${key}_${toSnakeCase(displayName)}" value="${toSnakeCase(displayName)}">
                            <span>${displayName}</span>
                        </label>
                    </td>
                </tr>
    `;
}
