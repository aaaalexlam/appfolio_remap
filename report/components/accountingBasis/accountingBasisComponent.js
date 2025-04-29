function createAccountingBasisHTML() {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="accounting_basis_field">Accounting Basis</td>
                    <td class="input_column">
                        <select name="accounting_basis" id="accounting_basis">
                            <option value="Cash">Cash</option>
                            <option value="Accural">Accural</option>
                        </select>
                    </td>
                </tr>
    `;
}

