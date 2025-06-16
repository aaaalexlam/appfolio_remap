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

function getSearchSummaryTemplate(inputType, displayName, tablePrefix) {
    let id = inputType === 'checkBox' ? toSnakeCase(displayName) : inputType;
    return `
        <div>
            <b>${displayName}:</b>
            <span id="${tablePrefix}custom_search_summary_${id}"></span>
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

    if (column.key === 'account_name') {
        displayName = '&nbsp;'.repeat(level * 5) + account[toCamelCase(column.key)];

        if (account.children.length > 0) {
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
    const summaryReview = document.getElementById(`${tablePrefix}custom_search_summary`);

    propertiesElement.classList.add("modal");
    let customizationComponents = '';
    let summaryReviewComponents = '';

    customizationComponents += `
        <div class="custom_search_container"> 
            <table> 
                <tr> 
                    <th>Customize Report</th> 
                </tr>
        `;

    customization.forEach((column) => {
        const html = getCustomSearchComponentByKey(column.inputType, column.displayName, tablePrefix);
        const summary = getSearchSummaryTemplate(column.inputType, column.displayName, tablePrefix);

        if (html) {
            customizationComponents += html;
        }

        if (summary) {
            summaryReviewComponents += summary;
        }
    });

    customizationComponents +=
        `
                <tr class="tr-single-right">
                    <td><button id='${tablePrefix}post_form_btn_cancel' class="cancel_btn" type="button">Cancel</button></td>
                    <td><button id='${tablePrefix}post_form_btn' class="default_btn" type="submit">Update</button></td>
                </tr>
            </table>
        </div>
    `
    propertiesElement.innerHTML = customizationComponents;
    summaryReview.innerHTML = summaryReviewComponents;

    customization.forEach((obj) => {
        addEventListenerBykey(obj.inputType, tablePrefix);
    });

}

function getHideableRow(glAccount, tablePrefix, contentData, columns) {
    return `
                <div class="hideable_row_header" id="">
                    <i class="fa fa-angle-down"></i>
                    <span>${glAccount.number} - ${glAccount.accountName}</span>      
                </div>
                <div  style="display:block;" id="content_${glAccount.id}">
                    ${getContent(tablePrefix, contentData, columns)}
                </div>
        `
}

function getContent(tablePrefix, contentData, columns) {
    let content = '';
    if(!contentData){
        return;
    }
    contentData.forEach(bill => {
        content += `<div class='table_row'>`;
        columns.forEach(column => {
            content += `
            <div 
                class="column_${column.key} header_text"
                style="width:${column.width}; flex-shrink:0"
            >
                ${bill[column.key]}
            </div>`;
        });
        content += `</div>`;

    });
    return content;
}
