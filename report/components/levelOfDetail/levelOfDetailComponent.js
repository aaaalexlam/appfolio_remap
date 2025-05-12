function createLevelOfDetailHTML(displayName, tablePrefix) {
    return `
                <tr class="tr-default">
                    <td class="input_field"">${displayName}</td>
                    <td class="input_column level_of_detail" id="${tablePrefix}level_of_detail">
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

