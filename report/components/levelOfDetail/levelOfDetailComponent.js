function createLevelOfDetailHTML() {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="level_of_detail_field">Level of Detail</td>
                    <td class="input_column" id="level_of_detail">
                        <label>
                            <input type="radio" name="level_of_detail" value="deailView" checked>
                            <div>Detail View</div>
                        </label>
                        <label>
                            <input type="radio" name="level_of_detail" value="summaryView" >
                            <div>Summary View</div>
                        </label>
                    </td>
                </tr>
    `;
}


function formartLevelOfDetailStr(str) {
    return str === 'deailView' ? "Detail View" : "Summary View"
}

