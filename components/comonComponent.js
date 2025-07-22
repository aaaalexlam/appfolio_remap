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

    div.textContent = account[toCamelCase(column.key)] || ''; // adjust as needed

    // Add indentation or formatting based on level/key
    if (column.key === 'account_name' && level > 0) {
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
    console.log(container)
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

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }

}

function getBalance(glAccountId, amount) {
    let balance = 0;
    if (glAccountId === '2') {
        if (amount < 0) {
            balance = Math.abs(amount);
        } else {
            balance = amount * -1;
        }
    } else {
        if (amount < 0) {
            balance = Math.abs(amount);
        } else {
            balance = amount * -1;
        }
    }
    return balance;
}