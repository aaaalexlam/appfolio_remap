
const createPaymentTypeHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}</td>
                    <td class="input_column">
                        <select id="${tablePrefix}payment_type" class="drop_down">
                            <option value="all">All</option>
                            <option value="ach">ACH Payments Only</option>
                            <option value="check">Checks Only</option>
                            <option value="other">Other Payments Only</option>
                        </select>
                    </td>
                </tr>
    `;
}