function columnHeaderTemplate(name) {
    return `
        <div id="main_container_${toSnakeCase(name)}"> 
            <div class="main_container_header">
                <div class="main_container_header_text">${name}</div>
                <div class="resize_div">
                    <div class="resize_btn"></div>
                </div>
            </div>
            <div class="main_container_body">
                    
            </div>
        </div>
    `
}

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


