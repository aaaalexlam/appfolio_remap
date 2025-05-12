function createAccountingBasisHTML(displayName, tablePrefix) {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="${tablePrefix}accounting_basis_field">${displayName}</td>
                    <td class="input_column">
                        <select name="accounting_basis" id="${tablePrefix}accounting_basis" class="accounting_basis">
                            <option value="Cash">Cash</option>
                            <option value="Accural">Accural</option>
                        </select>
                    </td>
                </tr>
    `;
}

