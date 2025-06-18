const createDateTypeHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}</td>
                    <td class="input_column">
                        <select id="${tablePrefix}date_type" class="drop_down">
                            <option value="billDate">Bill Date</option>
                            <option value="createAt">Created At</option>
                            <option value="dueDate">Due Date</option>
                            <option value="paymentDate">Payment Date</option>
                            <option value="lastEditedAt">Last Edited At</option>
                            <option value="postingDate">Posting Date</option>
                        </select>
                    </td>
                </tr>
    `;
}