function handleCheckboxClick(event) {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
        [...document.getElementsByClassName(`column_${value}`)].forEach(header => {
            header.style.display = 'block';
        });
    } else {
        [...document.getElementsByClassName(`column_${value}`)].forEach(header => {
            header.style.display = 'none';
        });
    }
}

function toTree(data) {
    const accountMap = {};
    let roots = [];

    data.forEach(acc => {
        accountMap[acc.id] = { ...acc, children: [] };
    });

    data.forEach(acc => {
        if (acc.subAccountId && accountMap[acc.subAccountId]) {
            accountMap[acc.subAccountId].children.push(accountMap[acc.id]);
        } else {
            roots.push(accountMap[acc.id]);
        }
    });

    return roots;
}

function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}

function toCamelCase(input) {
    return input
        .toLowerCase()
        .replace(/[_\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

function formatCurrency(amount = 0) {
    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatCurrencyToPostive(amount = 0) {
    const positiveAmount = Math.abs(amount); // convert to positive
    return positiveAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }