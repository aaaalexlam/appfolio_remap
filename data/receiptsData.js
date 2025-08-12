window.receiptsComponent = {
    "data": [
        {
            "propertyId": "5YRaAVfo8ouGbawc6tq2",
            "glNumber": "1150",
            "remarks": "Period: 12/14/2024-06/14/2025",
            "tenantId": "2QO73tiZvIrQq4WiPf5h",
            "referenceNotes": "Policy: 990591685 April 2025",
            "glName": "ESL Operating Cash",
            "receiptDate": "2025-06-04",
            "lastUpdatedAt": {
                "seconds": 1750792794,
                "nanoseconds": 390000000
            },
            "totalAmt": 346.67,
            "tenantUnit": "120",
            "prepayData": {
                "prepayDescription": "Prepaid Any",
                "prepayAmount": 0
            },
            "glAccountId": "2",
            "createdAt": {
                "seconds": 1750792794,
                "nanoseconds": 390000000
            },
            "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
            "paymentMethodName": "Direct Deposit / ACH",
            "tenantName": "Petra Movido",
            "createdById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "receiptNotes": "",
            "lastUpdatedById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "createdByName": "Alex Lam",
            "paymentMethodId": "ach",
            "lastUpdatedBy": "Alex Lam",
            "charges": [
                {
                    "chargeId": "YbxNf1YExTzVLcqiM1QG",
                    "glAccountName": "AL Care Level Fee 3",
                    "appliedAmount": 1170,
                    "originalBalance": 1170,
                    "description": "AL Care Lv. 3 Prorate Care Charge for 26 days from 6/4-6/30 2025 increased care needed",
                    "glAccount": "111",
                    "glAccountNumber": "4303"
                },
                {
                    "chargeId": "wNEDADUJzCeh6XcqeCc9",
                    "glAccountNumber": "4302",
                    "glAccountName": "AL Care Level Fee 2",
                    "glAccount": "110",
                    "appliedAmount": -823.33,
                    "description": "Credit 26 days of Loc Lv.2 from 6/4-6/30 2025 -change in care",
                    "originalBalance": 346.67
                },
            ]
        },
        {
            "propertyId": "5YRaAVfo8ouGbawc6tq2",
            "glNumber": "1150",
            "remarks": "Period: 12/14/2024-06/14/2025",
            "tenantId": "2QO73tiZvIrQq4WiPf5a",
            "referenceNotes": "1150",
            "glName": "ESL Operating Cash",
            "receiptDate": "2025-06-07",
            "lastUpdatedAt": {
                "seconds": 1750792794,
                "nanoseconds": 390000000
            },
            "totalAmt": 6200.00,
            "tenantUnit": "129B",
            "prepayData": {
                "prepayDescription": "Prepaid Any",
                "prepayAmount": 0
            },
            "glAccountId": "2",
            "createdAt": {
                "seconds": 1750792794,
                "nanoseconds": 390000000
            },
            "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
            "paymentMethodName": "Direct Deposit / ACH",
            "tenantName": "Candelaria Rivas",
            "createdById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "receiptNotes": "",
            "lastUpdatedById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "createdByName": "Alex Lam",
            "paymentMethodId": "ach",
            "lastUpdatedBy": "Alex Lam",
            "charges": [
                {
                    "chargeId": "YbxNf1YExTzVLcqiM1QG",
                    "glAccountName": "Rent - MC",
                    "appliedAmount": 4350,
                    "originalBalance": 4696.67,
                    "description": "MC rent shared unit 129B",
                    "glAccount": "208",
                    "glAccountNumber": "4011"
                },
                {
                    "chargeId": "wNEDADUJzCeh6XcqeCc9",
                    "glAccountNumber": "4401",
                    "glAccountName": "Care Level Fee MC1",
                    "glAccount": "132",
                    "appliedAmount": 1850,
                    "description": "LOC 1 MC",
                    "originalBalance": 6546.67
                },
            ]
        }
    ]
}

async function getReceipts(glAccountOrderIdList) {
    const db = window.firebaseFirestore;
    const snapshot = await db.collection("adminManagement")
        .doc("IIPMwsQfXSzrASo8qjFO")
        .collection("tenantReceipts")
        .get();

    const data = [];
    snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}