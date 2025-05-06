function columnCheckboxTemplate(name) {
    return `
         <div>
            <label>
                <input 
                    type="checkbox" 
                    value="${toSnakeCase(name)}" 
                    id="column_check_box_${toSnakeCase(name)}"
                    onclick="handleCheckboxClick(event)"
                >
                <span>${name}</span>
            </label>
        </div>
    `
}

function getHeaderTemplate(column) {
    return `
        <div 
            id="column_${toSnakeCase(column.name)}"
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


