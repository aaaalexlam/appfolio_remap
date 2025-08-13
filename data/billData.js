window.billComponent = {
    "data": [
        {
            "createdAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "glNumber": "1150",
            "glName": "ESL Operating Cash",
            "glAccountId": "2",
            "billDate": "2025-05-09",
            "payeeName": "1Heart Caregiver Services",
            "reference": "",
            "checkMemo": "",
            "dueDate": "2025-05-09",
            "createdById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "createdByName": "Andrew Yeh",
            "billDetails": [
                {
                    "amount": 2183.44,
                    "status": "Paid",
                    "glName": "Auto Insurance",
                    "glAccountId": "357",
                    "glNumber": "7150",
                    "description": "April 2025",
                    "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
                    "propertyId": "5YRaAVfo8ouGbawc6tq2",
                    "statusIndex": 0
                },
                {
                    "amount": -150,
                    "status": "Used",
                    "glName": "Auto Insurance",
                    "glAccountId": "357",
                    "glNumber": "7150",
                    "description": "($600) Policy change on 02/07/2025 ",
                    "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
                    "propertyId": "5YRaAVfo8ouGbawc6tq2",
                    "statusIndex": 0
                },
                {
                    "amount": -424,
                    "status": "Used",
                    "glName": "Auto Insurance",
                    "glAccountId": "357",
                    "glNumber": "7150",
                    "description": "($1696) Policy change on 02/13/2025 ",
                    "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
                    "propertyId": "5YRaAVfo8ouGbawc6tq2",
                    "statusIndex": 0
                }
            ],
            "lastUpdatedAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "payeeId": "LX18Ibou8iXeVC0EJy1l",
            "postDate": null,
            "billNotes": "",
            "lastUpdatedById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "remarks": "",
            "workOrder": null,
            "totalAmt": 1609.44,
            "cashAccountData": null,
            "lastUpdatedBy": "Andrew Yeh"
        },
        {
            "createdAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "glNumber": "1150",
            "glName": "ESL Operating Cash",
            "glAccountId": "2",
            "billDate": "2025-04-11",
            "payeeName": "1Heart Caregiver Services",
            "reference": "",
            "checkMemo": "",
            "dueDate": "2025-05-11",
            "createdById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "createdByName": "Alex Lam",
            "billDetails": [
                {
                    "amount": 414.23,
                    "status": "Paid",
                    "glName": "General Maintenance Supplies",
                    "glAccountId": "173",
                    "glNumber": "6450",
                    "description": "Micowave",
                    "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
                    "propertyId": "5YRaAVfo8ouGbawc6tq2",
                    "statusIndex": 0
                },
            ],
            "lastUpdatedAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "payeeId": "LX18Ibou8iXeVC0EJy1l",
            "postDate": null,
            "billNotes": "",
            "lastUpdatedById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "remarks": "",
            "workOrder": null,
            "totalAmt": 413.23,
            "cashAccountData": null,
            "lastUpdatedBy": "Andrew Yeh"
        },
        {
            "createdAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "glNumber": "1150",
            "glName": "ESL Operating Cash",
            "glAccountId": "2",
            "billDate": "2025-04-04",
            "payeeName": "1Heart Caregiver Services",
            "reference": "",
            "checkMemo": "",
            "dueDate": "2025-05-04",
            "createdById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "createdByName": "Alex Lam",
            "billDetails": [
                {
                    "amount": 365.68,
                    "status": "Paid",
                    "glName": "General Maintenance Supplies",
                    "glAccountId": "173",
                    "glNumber": "6450",
                    "description": "Wall Plates",
                    "propertyName": "Walnut Valley Senior Living - Payable to: Everest Senior Living Management, Inc.19850 Colima Road Walnut, CA 91789",
                    "propertyId": "5YRaAVfo8ouGbawc6tq2",
                    "statusIndex": 0
                },
            ],
            "lastUpdatedAt": {
                "seconds": 1746833944,
                "nanoseconds": 359000000
            },
            "payeeId": "LX18Ibou8iXeVC0EJy1l",
            "postDate": null,
            "billNotes": "",
            "lastUpdatedById": "tzYwNNgZ7UTKk5Kl2pwLhL7WBqU2",
            "remarks": "",
            "workOrder": null,
            "totalAmt": 365.68,
            "cashAccountData": null,
            "lastUpdatedBy": "Andrew Yeh"
        },
    ]
}

async function getPayableBills(glAccountIdList) {
    const db = window.firebaseFirestore;
    const snapshot = await db.collection("adminManagement")
        .doc("IIPMwsQfXSzrASo8qjFO")
        .collection("payableBills")
        .get();

    const data = [];
    snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}