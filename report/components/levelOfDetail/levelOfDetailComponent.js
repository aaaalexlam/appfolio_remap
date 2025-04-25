function createLevelOfDetailHTML() {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="level_of_detail_field">Level of Detail</td>
                    <td class="input_column" id="level_of_detail">
                        <label>
                            <input type="radio" name="level_of_detail" value="deail_view" checked>
                            <div>Detail View</div>
                        </label>
                        <label>
                            <input type="radio" name="level_of_detail" value="summary_view" checked>
                            <div>Summary View</div>
                        </label>
                    </td>
                </tr>
    `;
}

