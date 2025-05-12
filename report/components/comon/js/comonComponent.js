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

function initHeader(columns, checkBoxId, tableHeaderId) {
    const table_header = document.getElementById(tableHeaderId);
    const checkbox = document.getElementById(checkBoxId);
    columns.forEach((column) => {
        table_header.innerHTML += getHeaderTemplate(column);
        checkbox.innerHTML += columnCheckboxTemplate(column)
    });

    // for css dispay only
    table_header.innerHTML +=
        `
           <div class="end_header">
               &nbsp;
           </div>
       `
}

function getDataDiv(account, column, level) {
    
    let displayName = account[toCamelCase(column.key)] ? account[toCamelCase(column.key)] : '&nbsp;';
    let style = '';

    if(column.key === 'account_name'){
        displayName = '&nbsp;'.repeat(level * 5) + account[toCamelCase(column.key)];

        if(account.children.length > 0){
            style = 'font-weight:bold;';
        }
    }

    return `
        <div class="column_${column.key} table_column" style="width:${column.width}; ${style} display:${column.display ? 'block' : 'none'}">
            ${displayName}
        </div>
    `
}

function createAccountRow(account, level) {

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.className = 'table_row';

    columns.forEach((column) => {
        row.innerHTML += getDataDiv(account, column, level)
    })

    // for css dispay only
    row.innerHTML +=
        `
        <div class="end_columnd ">
            &nbsp;
        </div>
    `
    return row;
}

function buildAccountsDiv(accounts, level) {
    const container = document.createElement('div');

    accounts.forEach(account => {
        const accountRow = createAccountRow(account, level);
        container.appendChild(accountRow);

        if (Array.isArray(account.children) && account.children.length > 0) {
            const childrenRows = buildAccountsDiv(account.children, level + 1);
            container.appendChild(childrenRows);

            const totalDiv = document.createElement('div');
            const totalIndent = '&nbsp;'.repeat(level * 4);
            totalDiv.className = "column_account_name table_column"
            totalDiv.style.fontWeight = 'bold';
            totalDiv.innerHTML = `${totalIndent}Total ${account.accountName}`;
            container.appendChild(totalDiv);
        }

    });

    return container;
}


function initCustomizationForm(customization, tablePrefix) {
    const propertiesElement = document.getElementById(`${tablePrefix}modal`);
    propertiesElement.classList.add("modal");
    let customizationComponents = '';
    customizationComponents += `
        <div class="custom_search_container"> 
            <table> 
                <tr> 
                    <th>Customize Report</th> 
                </tr>
        `;

    customization.forEach((obj) => {
        const html = getComponentByKey(obj.inputType, obj.displayName);
        if (html) {
            customizationComponents += html;
        }
    })

    customizationComponents +=
        `
                <tr class="tr-single-right">
                    <td><button id='balance_sheet_post_form_btn_cancel' class="cancel_btn" type="button">Cancel</button></td>
                    <td><button id='balance_sheet_post_form_btn' class="default_btn" type="submit">Update</button></td>
                </tr>
            </table>
        </div>
    `
    propertiesElement.innerHTML = customizationComponents;

    customization.forEach((obj) => {
        addEventListenerBykey(obj.inputType);
    });

}
