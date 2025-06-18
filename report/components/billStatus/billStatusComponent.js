const createBillStatusHTML = (displayName, tablePrefix) =>{
    return `
    <tr class="tr-default">
        <td class="input_field">${displayName}</td>
        <td class="input_column">
            <select id="${tablePrefix}payment_type" class="drop_down">
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
            </select>
        </td>
    </tr>
`;
}
