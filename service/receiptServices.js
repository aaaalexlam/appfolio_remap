function createReceipt(entry, detail) {
    return {
        property: detail.propertyName,
        date: entry.billDate,
        payeeOrPayer: entry.payeeName,
        type: "check",
        reference: entry.referenceNotes,
        credit: charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
        debit: charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
        balance: charge.appliedAmount,
        description: "",
    };
}

function groupByCashAccountForReceipt(recepitsList) {
    const grouped = {};
    recepitsList.forEach(entry => {
        entry.charges.forEach(charge => {
            const glId = entry.glAccountId;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }

            // map with columns key
            grouped[glId].push({
                "property": entry.propertyName,
                "date": entry.receiptDate,
                "payeeOrPayer": entry.tenantName,
                "type": "check",
                "reference": entry.referenceNotes,
                "credit": charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "debit": charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "balance": charge.appliedAmount,
                "description": "",
            });
        })

    });

    return grouped;
}

function groupByGLAccountForReceipt(recepitsList) {
    const grouped = {};
    recepitsList.forEach(entry => {
        entry.charges.forEach(charge => {
            const glId = charge.glAccount;
            if (!grouped[glId]) {
                grouped[glId] = [];
            }
            grouped[glId].push({
                "property": entry.propertyName,
                "date": entry.receiptDate,
                "payeeOrPayer": entry.tenantName,
                "type": "check",
                "reference": entry.referenceNotes,
                "credit": charge.appliedAmount > 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "debit": charge.appliedAmount < 0 ? formatCurrencyToPostive(charge.appliedAmount) : 0,
                "balance": getBalance(glId, charge.appliedAmount),
                "description": "",
            });
        })
    });

    return grouped;
}