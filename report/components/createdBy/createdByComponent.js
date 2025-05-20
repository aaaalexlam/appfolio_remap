const userList = [
    "Jisoo",
    "Alex",
    "Charlent"
]
const createdByComponentHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}</td>
                    <td class="input_column">
                        <select id="${tablePrefix}created_by" class="drop_down">
                            ${optionHtml}
                        </select>
                    </td>
                </tr>
    `;
}

const optionHtml = userList
    .map(user =>
        `
            <option value="">${user}</option>
        `)
    .join("");