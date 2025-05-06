function columnCheckboxTemplate(column) {
    return `
         <div>
            <label>
                <input 
                    type="checkbox" 
                    value="${column.key}" 
                    id="column_check_box_${toSnakeCase(column.name)}"
                    ${column.checkBoxDisable ? 'disabled' : ''}
                    ${column.display ? 'checked' : ''}
                    onclick="handleCheckboxClick(event)"
                >
                <span>${column.name}</span>
            </label>
        </div>
    `
}

function getHeaderTemplate(column) {
    return `
        <div 
            id="column_${column.key}"
            class="column_${column.key}"
            style="display:${column.display ? 'block' : 'none'}; width:${column.width}"
        > 
            <div class="header_container">
                <div class="header_text" style="${column.inLineCss}">${column.name}</div>
                <div class="resize_div">
                        <div class="resize_btn"></div>
                </div>
            </div>
        </div>
    `
}

function initHeader() {
    const table_header = document.getElementById('table_header');
    const balance_sheet_checkbox = document.getElementById('balance_sheet_checkbox');
    columns.forEach((column) => {
        table_header.innerHTML += getHeaderTemplate(column);
        balance_sheet_checkbox.innerHTML += columnCheckboxTemplate(column)
    });

    // for css dispay only
    table_header.innerHTML +=
        `
           <div class="end_header">
               <div>&nbsp;</div>
           </div>
       `
}

