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
    const tableHeaderEl = document.getElementById(tableHeaderId);
    const checkboxEl = document.getElementById(checkBoxId);

    // Use arrays to collect the HTML strings
    const headerHTML = [];
    const checkboxHTML = [];

    // Build once, append once
    for (const column of columns) {
        headerHTML.push(getHeaderTemplate(column));
        checkboxHTML.push(columnCheckboxTemplate(column));
    }

    // Add the extra end header div for styling
    headerHTML.push(`
        <div class="end_header">
            &nbsp;
        </div>
    `);

    // Assign the combined HTML to the elements once
    tableHeaderEl.innerHTML = headerHTML.join('');
    checkboxEl.innerHTML = checkboxHTML.join('');
}

function createAccountRow(account, level) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.className = 'table_row';

    // Use appendChild instead of innerHTML
    for (const column of columns) {
        const cell = createDataDiv(account, column, level); // returns a DOM element
        row.appendChild(cell);
    }

    // Add static spacer column
    const spacer = document.createElement('div');
    spacer.className = 'end_columnd';
    spacer.innerHTML = '&nbsp;';
    row.appendChild(spacer);

    return row;
}

function createDataDiv(account, column, level) {
    const div = document.createElement('div');
    div.className = `column_${column.key} table_column`;
    div.style.width = column.width;
    div.textContent = account[column.key] || ''; // adjust as needed

    // Add indentation or formatting based on level/key
    if (column.key === 'name' && level > 0) {
        div.style.paddingLeft = `${level * 16}px`; // for nested indentation
    }

    return div;
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
        <div class="hideable_row_header">
            <i class="fa fa-angle-down"></i>
            <span>${glAccount.number} - ${glAccount.accountName}</span>      
        </div>
        <div style="display:block;" id="content_${glAccount.id}">
            ${getContent(tablePrefix, contentData, columns)}
        </div>
    `;
}

function getContent(tablePrefix, contentData, columns, startingBalance = 0) {
    let totalNetChange = 0;
    const rows = [];

    // Starting balance row
    rows.push(
        `<div class='table_row'>${columns.map(column =>
            column.key === 'balance'
                ? getRowBlockBalanceHTML(column, startingBalance)
                : getRowBlockHTML(column, '')
        ).join('')}</div>`
    );

    // Main data rows
    if (contentData?.length) {
        for (const bill of contentData) {
            rows.push(`<div class='table_row'>`);
            for (const column of columns) {
                rows.push(getRowBlockHTML(column, bill[column.key]));
                if (column.key === 'balance') {
                    totalNetChange += bill[column.key];
                }
            }
            rows.push(`</div>`);
        }
    }

    // Net change row
    rows.push(
        `<div class='table_row'>${columns.map(column =>
            column.key === 'balance'
                ? getRowBlockNetChangeHTML(column, contentData[contentData.length-1].balance)
                : getRowBlockHTML(column, '')
        ).join('')}</div>`
    );

    // End balance row
    const endBalance = startingBalance +  contentData[contentData.length-1].balance;
    rows.push(
        `<div class='table_row'>${columns.map(column =>
            column.key === 'balance'
                ? `<div class="table_column column_balance" style="font-weight: bold; text-align: end; width:${column.width};">
                        ${formatCurrency(endBalance)}
                   </div>`
                : getRowBlockHTML(column, '')
        ).join('')}</div>`
    );

    return rows.join('');
}

const getRowBlockHTML = (column, data) => {
    const currencyKeys = ['credit', 'balance', 'debit'];
    const isCurrency = currencyKeys.includes(column.key);
    const displayValue = isCurrency ? formatCurrency(data) : data;
    const indent = isCurrency ? "text-align: end;" : "";

    return `
        <div
            class="column_${column.key} header_text table_column"
            style="width:${column.width}; flex-shrink:0; ${indent}"
        >   
            ${displayValue}
        </div>
    `;
}

const getRowBlockBalanceHTML = (column, data) => {

    return `
    <div
        class="column_${column.key} header_text table_column"
        style="width:${column.width}; flex-shrink:0; text-align: end;"
    >   
        ${formatCurrency(data)}
        <div style="color: #cacaca">Starting Balance</div>
    </div>
`;
}

const getRowBlockNetChangeHTML = (column, data) => {
    return `
    <div
        class="column_${column.key} header_text table_column"
        style="width:${column.width}; flex-shrink:0; text-align: end;"
    >   
        ${formatCurrency(data)}
        <div style="color: #cacaca">Net Change</div>
    </div>
`;
}
