const fs = require('fs');

const glCodeList = {
    data: [
        {
            "id": "2",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1150: ESL Operating Cash",
                "gl_account_type_display": "Cash",
                "name": "ESL Operating Cash",
                "number": "1150",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "3",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1160: Security Deposit Cash",
                "gl_account_type_display": "Cash",
                "name": "Security Deposit Cash",
                "number": "1160",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "4",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1300: Accounts Receivable",
                "gl_account_type_display": "Asset",
                "name": "Accounts Receivable",
                "number": "1300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "5",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1600: Land",
                "gl_account_type_display": "Asset",
                "name": "Land",
                "number": "1600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "6",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1700: BUILDING ASSETS",
                "gl_account_type_display": "Asset",
                "name": "BUILDING ASSETS",
                "number": "1700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "7",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1710: Buildings",
                "gl_account_type_display": "Asset",
                "name": "Buildings",
                "number": "1710",
                "parent_id": "6",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "8",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1720: Building Depreciation",
                "gl_account_type_display": "Asset",
                "name": "Building Depreciation",
                "number": "1720",
                "parent_id": "6",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "9",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1800: OTHER PROPERTY ASSETS",
                "gl_account_type_display": "Asset",
                "name": "OTHER PROPERTY ASSETS",
                "number": "1800",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "10",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1810: Other Property",
                "gl_account_type_display": "Asset",
                "name": "Other Property",
                "number": "1810",
                "parent_id": "9",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "11",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1820: Other Property Depreciation",
                "gl_account_type_display": "Asset",
                "name": "Other Property Depreciation",
                "number": "1820",
                "parent_id": "9",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "12",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2100: SECURITY DEPOSITS",
                "gl_account_type_display": "Liability",
                "name": "SECURITY DEPOSITS",
                "number": "2100",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "13",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2110: Owner Held Security Deposits",
                "gl_account_type_display": "Liability",
                "name": "Owner Held Security Deposits",
                "number": "2110",
                "parent_id": "12",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "14",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2120: Owner Held Pet Deposits",
                "gl_account_type_display": "Liability",
                "name": "Owner Held Pet Deposits",
                "number": "2120",
                "parent_id": "12",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "15",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2130: Key Deposit",
                "gl_account_type_display": "Liability",
                "name": "Key Deposit",
                "number": "2130",
                "parent_id": "12",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "16",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2140: Garage Deposit",
                "gl_account_type_display": "Liability",
                "name": "Garage Deposit",
                "number": "2140",
                "parent_id": "12",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "17",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2200: CLEARING ACCOUNT",
                "gl_account_type_display": "Liability",
                "name": "CLEARING ACCOUNT",
                "number": "2200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "18",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4040: Prepaid Rent",
                "gl_account_type_display": "Income",
                "name": "Prepaid Rent",
                "number": "4040",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "19",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2500: Accounts Payable",
                "gl_account_type_display": "Liability",
                "name": "Accounts Payable",
                "number": "2500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "20",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2000: MORTGAGE PAYABLE",
                "gl_account_type_display": "Liability",
                "name": "MORTGAGE PAYABLE",
                "number": "2000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "21",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1210: Owner / Investor Contribution",
                "gl_account_type_display": "Capital",
                "name": "Owner / Investor Contribution",
                "number": "1210",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "22",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1220: Owner / Investor Distribution",
                "gl_account_type_display": "Capital",
                "name": "Owner / Investor Distribution",
                "number": "1220",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "23",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1230: Retained Earnings",
                "gl_account_type_display": "Capital",
                "name": "Retained Earnings",
                "number": "1230",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "24",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1235: Prior Years Retained Earnings",
                "gl_account_type_display": "Capital",
                "name": "Prior Years Retained Earnings",
                "number": "1235",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "25",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1200: Appfolio Opening Balance Equity",
                "gl_account_type_display": "Capital",
                "name": "Appfolio Opening Balance Equity",
                "number": "1200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "26",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4000: RENTS",
                "gl_account_type_display": "Income",
                "name": "RENTS",
                "number": "4000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "27",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4010: Rent - AL",
                "gl_account_type_display": "Income",
                "name": "Rent - AL",
                "number": "4010",
                "parent_id": "26",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "28",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4030: Other Rent",
                "gl_account_type_display": "Income",
                "name": "Other Rent",
                "number": "4030",
                "parent_id": "26",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "29",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4110: Association Income",
                "gl_account_type_display": "Income",
                "name": "Association Income",
                "number": "4110",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "30",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4130: Gross Potential Rent",
                "gl_account_type_display": "Income",
                "name": "Gross Potential Rent",
                "number": "4130",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "31",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999005: Mainstreet (DO NOT USE) - Credit/Debit",
                "gl_account_type_display": "Income",
                "name": "Mainstreet (DO NOT USE) - Credit/Debit",
                "number": "9999005",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "32",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4140: Concessions",
                "gl_account_type_display": "Income",
                "name": "Concessions",
                "number": "4140",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "33",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4150: Delinquency",
                "gl_account_type_display": "Income",
                "name": "Delinquency",
                "number": "4150",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "34",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4160: Vacancy",
                "gl_account_type_display": "Income",
                "name": "Vacancy",
                "number": "4160",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "35",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4200: SERVICES",
                "gl_account_type_display": "Income",
                "name": "SERVICES",
                "number": "4200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "36",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4610: NSF Fees Collected",
                "gl_account_type_display": "Income",
                "name": "NSF Fees Collected",
                "number": "4610",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "37",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4620: Tax Passthru",
                "gl_account_type_display": "Income",
                "name": "Tax Passthru",
                "number": "4620",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "39",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4640: Application Fee Income",
                "gl_account_type_display": "Income",
                "name": "Application Fee Income",
                "number": "4640",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "40",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4650: Insurance Services",
                "gl_account_type_display": "Income",
                "name": "Insurance Services",
                "number": "4650",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "41",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4660: Late Fee",
                "gl_account_type_display": "Income",
                "name": "Late Fee",
                "number": "4660",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "42",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4670: Utility Reimbursement Fee",
                "gl_account_type_display": "Income",
                "name": "Utility Reimbursement Fee",
                "number": "4670",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "43",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4680: Month-to-Month Fee",
                "gl_account_type_display": "Income",
                "name": "Month-to-Month Fee",
                "number": "4680",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "44",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4700: Deposit Forfeit",
                "gl_account_type_display": "Income",
                "name": "Deposit Forfeit",
                "number": "4700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "46",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4800: Tenant Improvements",
                "gl_account_type_display": "Income",
                "name": "Tenant Improvements",
                "number": "4800",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "47",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4900: Miscellaneous",
                "gl_account_type_display": "Income",
                "name": "Miscellaneous",
                "number": "4900",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "48",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6030: Advertising / Marketing",
                "gl_account_type_display": "Expense",
                "name": "Advertising / Marketing",
                "number": "6030",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "49",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6600: AUTO AND TRAVEL",
                "gl_account_type_display": "Expense",
                "name": "AUTO AND TRAVEL",
                "number": "6600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "50",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6610: Vehicle Rental",
                "gl_account_type_display": "Expense",
                "name": "Vehicle Rental",
                "number": "6610",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "51",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6620: Mileage",
                "gl_account_type_display": "Expense",
                "name": "Mileage",
                "number": "6620",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "52",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6630: Meals",
                "gl_account_type_display": "Expense",
                "name": "Meals",
                "number": "6630",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "53",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6400: CLEANING AND MAINTENANCE",
                "gl_account_type_display": "Expense",
                "name": "CLEANING AND MAINTENANCE",
                "number": "6400",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "54",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6410: Carpet Cleaning",
                "gl_account_type_display": "Expense",
                "name": "Carpet Cleaning",
                "number": "6410",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "55",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6420: Janitorial Expense",
                "gl_account_type_display": "Expense",
                "name": "Janitorial Expense",
                "number": "6420",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "56",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6460: General Maintenance Labor",
                "gl_account_type_display": "Expense",
                "name": "General Maintenance Labor",
                "number": "6460",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "57",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6430: Landscaping",
                "gl_account_type_display": "Expense",
                "name": "Landscaping",
                "number": "6430",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "58",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7440: HOA Dues",
                "gl_account_type_display": "Other Expense",
                "name": "HOA Dues",
                "number": "7440",
                "parent_id": "72",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "59",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6490: Cleaning and Maintenance -Other",
                "gl_account_type_display": "Expense",
                "name": "Cleaning and Maintenance -Other",
                "number": "6490",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "60",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7100: INSURANCE",
                "gl_account_type_display": "Expense",
                "name": "INSURANCE",
                "number": "7100",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "61",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7110: Property Insurance",
                "gl_account_type_display": "Expense",
                "name": "Property Insurance",
                "number": "7110",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "62",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7120: Earthquake Insurance",
                "gl_account_type_display": "Expense",
                "name": "Earthquake Insurance",
                "number": "7120",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "63",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7130: Flood Insurance",
                "gl_account_type_display": "Expense",
                "name": "Flood Insurance",
                "number": "7130",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "64",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8200: LEGAL AND OTHER PROFESSIONAL FEES",
                "gl_account_type_display": "Other Expense",
                "name": "LEGAL AND OTHER PROFESSIONAL FEES",
                "number": "8200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "65",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8210: Legal",
                "gl_account_type_display": "Other Expense",
                "name": "Legal",
                "number": "8210",
                "parent_id": "64",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "66",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8220: Accounting",
                "gl_account_type_display": "Other Expense",
                "name": "Accounting",
                "number": "8220",
                "parent_id": "64",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "67",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8230: Other Professional Fee",
                "gl_account_type_display": "Other Expense",
                "name": "Other Professional Fee",
                "number": "8230",
                "parent_id": "64",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "68",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7300: MANAGEMENT FEES",
                "gl_account_type_display": "Expense",
                "name": "MANAGEMENT FEES",
                "number": "7300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "69",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "99999-7310: Management Fees",
                "gl_account_type_display": "Expense",
                "name": "Management Fees",
                "number": "99999-7310",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "70",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7210: Placement Referral Fees",
                "gl_account_type_display": "Expense",
                "name": "Placement Referral Fees",
                "number": "7210",
                "parent_id": "161",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "71",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7330: Vendor Discounts",
                "gl_account_type_display": "Expense",
                "name": "Vendor Discounts",
                "number": "7330",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "72",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7400: MORTGAGE",
                "gl_account_type_display": "Other Expense",
                "name": "MORTGAGE",
                "number": "7400",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "73",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7410: Mortgage Interest",
                "gl_account_type_display": "Other Expense",
                "name": "Mortgage Interest",
                "number": "7410",
                "parent_id": "72",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "74",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7420: Mortgage Principal",
                "gl_account_type_display": "Other Expense",
                "name": "Mortgage Principal",
                "number": "7420",
                "parent_id": "72",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "75",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7430: Mortgage - Other",
                "gl_account_type_display": "Other Expense",
                "name": "Mortgage - Other",
                "number": "7430",
                "parent_id": "72",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "76",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8400: OTHER INTEREST",
                "gl_account_type_display": "Other Expense",
                "name": "OTHER INTEREST",
                "number": "8400",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "77",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6500: REPAIRS",
                "gl_account_type_display": "Expense",
                "name": "REPAIRS",
                "number": "6500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "78",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6510: Painting",
                "gl_account_type_display": "Expense",
                "name": "Painting",
                "number": "6510",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "79",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6520: Plumbing",
                "gl_account_type_display": "Expense",
                "name": "Plumbing",
                "number": "6520",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "80",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6530: Flooring",
                "gl_account_type_display": "Expense",
                "name": "Flooring",
                "number": "6530",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "81",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6540: HVAC ( Heat, Ventilation, Air )",
                "gl_account_type_display": "Expense",
                "name": "HVAC ( Heat, Ventilation, Air )",
                "number": "6540",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "82",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4690: FOB Replacement Fee",
                "gl_account_type_display": "Income",
                "name": "FOB Replacement Fee",
                "number": "4690",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "83",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6560: Roof Repair",
                "gl_account_type_display": "Expense",
                "name": "Roof Repair",
                "number": "6560",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "84",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6590: Repairs - Other",
                "gl_account_type_display": "Expense",
                "name": "Repairs - Other",
                "number": "6590",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "85",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6580: Repair Supplies",
                "gl_account_type_display": "Expense",
                "name": "Repair Supplies",
                "number": "6580",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "86",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7500: TAXES",
                "gl_account_type_display": "Expense",
                "name": "TAXES",
                "number": "7500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "87",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7510: Property Tax",
                "gl_account_type_display": "Expense",
                "name": "Property Tax",
                "number": "7510",
                "parent_id": "86",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "88",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7530: Rental Tax Authority",
                "gl_account_type_display": "Expense",
                "name": "Rental Tax Authority",
                "number": "7530",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "89",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7000: UTILITIES",
                "gl_account_type_display": "Expense",
                "name": "UTILITIES",
                "number": "7000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "90",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7013: Electricity (Garden House 3)",
                "gl_account_type_display": "Expense",
                "name": "Electricity (Garden House 3)",
                "number": "7013",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "91",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7023: Gas (Garden House 3)",
                "gl_account_type_display": "Expense",
                "name": "Gas (Garden House 3)",
                "number": "7023",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "92",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7031: Water (GH)",
                "gl_account_type_display": "Expense",
                "name": "Water (GH)",
                "number": "7031",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "93",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7040: Sewer",
                "gl_account_type_display": "Expense",
                "name": "Sewer",
                "number": "7040",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "94",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7050: Garbage / Recycling",
                "gl_account_type_display": "Expense",
                "name": "Garbage / Recycling",
                "number": "7050",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "95",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8300: DEPRECIATION EXPENSE",
                "gl_account_type_display": "Other Expense",
                "name": "DEPRECIATION EXPENSE",
                "number": "8300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "96",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8100: OTHER EXPENSES",
                "gl_account_type_display": "Other Expense",
                "name": "OTHER EXPENSES",
                "number": "8100",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "97",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6290: Security / Fire Alarm Systems and Services",
                "gl_account_type_display": "Expense",
                "name": "Security / Fire Alarm Systems and Services",
                "number": "6290",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "98",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8900: ESL OS / TS / WV ( Cross community insurance payment )",
                "gl_account_type_display": "Other Expense",
                "name": "ESL OS / TS / WV ( Cross community insurance payment )",
                "number": "8900",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "99",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8130: Equipment Rental",
                "gl_account_type_display": "Other Expense",
                "name": "Equipment Rental",
                "number": "8130",
                "parent_id": "96",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "100",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8000: CAPITAL EXPENSES",
                "gl_account_type_display": "Other Expense",
                "name": "CAPITAL EXPENSES",
                "number": "8000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "101",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8010: Appliances",
                "gl_account_type_display": "Other Expense",
                "name": "Appliances",
                "number": "8010",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "102",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8020: Equipment / Tools",
                "gl_account_type_display": "Other Expense",
                "name": "Equipment / Tools",
                "number": "8020",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "103",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8030: Remodel",
                "gl_account_type_display": "Other Expense",
                "name": "Remodel",
                "number": "8030",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "104",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8040: New Roof",
                "gl_account_type_display": "Other Expense",
                "name": "New Roof",
                "number": "8040",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "105",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8050: Furniture",
                "gl_account_type_display": "Other Expense",
                "name": "Furniture",
                "number": "8050",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "106",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4020: Community Fee",
                "gl_account_type_display": "Income",
                "name": "Community Fee",
                "number": "4020",
                "parent_id": "26",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "108",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4300: Care Level Fee Assisted Living",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee Assisted Living",
                "number": "4300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "109",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4301: AL Care Level Fee 1",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 1",
                "number": "4301",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "110",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4302: AL Care Level Fee 2",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 2",
                "number": "4302",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "111",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4303: AL Care Level Fee 3",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 3",
                "number": "4303",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "112",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4304: AL Care Level Fee 4",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 4",
                "number": "4304",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "113",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5600: COMMISSION",
                "gl_account_type_display": "Expense",
                "name": "COMMISSION",
                "number": "5600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "114",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4210: Pendant Fee",
                "gl_account_type_display": "Income",
                "name": "Pendant Fee",
                "number": "4210",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "115",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4220: Pendant Replacement Fee",
                "gl_account_type_display": "Income",
                "name": "Pendant Replacement Fee",
                "number": "4220",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "117",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4630: Pet Fee",
                "gl_account_type_display": "Income",
                "name": "Pet Fee",
                "number": "4630",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "118",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6550: Key / Lock Replacement",
                "gl_account_type_display": "Expense",
                "name": "Key / Lock Replacement",
                "number": "6550",
                "parent_id": "77",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "119",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4240: Tray Service Fee",
                "gl_account_type_display": "Income",
                "name": "Tray Service Fee",
                "number": "4240",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "120",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4250: Additional Housekeeping Fee",
                "gl_account_type_display": "Income",
                "name": "Additional Housekeeping Fee",
                "number": "4250",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "121",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4260: Guest Meal Fee",
                "gl_account_type_display": "Income",
                "name": "Guest Meal Fee",
                "number": "4260",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "122",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4270: Additional Maintenance Fee",
                "gl_account_type_display": "Income",
                "name": "Additional Maintenance Fee",
                "number": "4270",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "123",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4280: Guest Suite Fee",
                "gl_account_type_display": "Income",
                "name": "Guest Suite Fee",
                "number": "4280",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "124",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7140: Worker's Compensation",
                "gl_account_type_display": "Expense",
                "name": "Worker's Compensation",
                "number": "7140",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "125",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4230: Incontinent Supply Fee",
                "gl_account_type_display": "Income",
                "name": "Incontinent Supply Fee",
                "number": "4230",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "126",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4305: AL Care Level Fee 5",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 5",
                "number": "4305",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "127",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4306: AL Care Level Fee 6",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 6",
                "number": "4306",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "128",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4307: AL Care Level Fee 7",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 7",
                "number": "4307",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "129",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4308: AL Care Level Fee 8",
                "gl_account_type_display": "Income",
                "name": "AL Care Level Fee 8",
                "number": "4308",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "130",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4309: AL Care Leve Fee 9",
                "gl_account_type_display": "Income",
                "name": "AL Care Leve Fee 9",
                "number": "4309",
                "parent_id": "108",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "131",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5500: PAYROLL SERVICES",
                "gl_account_type_display": "Expense",
                "name": "PAYROLL SERVICES",
                "number": "5500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "132",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4401: Care Level Fee MC1",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC1",
                "number": "4401",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "133",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4402: Care Level Fee MC2",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC2",
                "number": "4402",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "134",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4403: Care Level Fee MC3",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC3",
                "number": "4403",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "135",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4404: Care Level Fee MC4",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC4",
                "number": "4404",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "136",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4405: Care Level Fee MC5",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC5",
                "number": "4405",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "137",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4406: Care Level Fee MC6",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC6",
                "number": "4406",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "138",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4407: Care Leve Fee MC7",
                "gl_account_type_display": "Income",
                "name": "Care Leve Fee MC7",
                "number": "4407",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "139",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4408: Care Level Fee MC8",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC8",
                "number": "4408",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "140",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4409: Care Leve Fee MC9",
                "gl_account_type_display": "Income",
                "name": "Care Leve Fee MC9",
                "number": "4409",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "141",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4410: Care Level Fee MC10",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC10",
                "number": "4410",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "142",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4411: Care Level Fee MC11",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee MC11",
                "number": "4411",
                "parent_id": "147",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "143",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4500: Care Level Fee Misc.",
                "gl_account_type_display": "Income",
                "name": "Care Level Fee Misc.",
                "number": "4500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "144",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4600: FEES",
                "gl_account_type_display": "Income",
                "name": "FEES",
                "number": "4600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "145",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4290: Laundry Service",
                "gl_account_type_display": "Income",
                "name": "Laundry Service",
                "number": "4290",
                "parent_id": "35",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "147",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4400: Memory Care Level Fees",
                "gl_account_type_display": "Income",
                "name": "Memory Care Level Fees",
                "number": "4400",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "148",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4625: Unit Transfer Fee",
                "gl_account_type_display": "Income",
                "name": "Unit Transfer Fee",
                "number": "4625",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "149",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5000: PAYROLL EXPENSES",
                "gl_account_type_display": "Expense",
                "name": "PAYROLL EXPENSES",
                "number": "5000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "150",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5001: Wages",
                "gl_account_type_display": "Expense",
                "name": "Wages",
                "number": "5001",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "151",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5200: EMPLOYEE BENEFITS",
                "gl_account_type_display": "Expense",
                "name": "EMPLOYEE BENEFITS",
                "number": "5200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "152",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5210: Employee Retirement Plans",
                "gl_account_type_display": "Expense",
                "name": "Employee Retirement Plans",
                "number": "5210",
                "parent_id": "151",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "153",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5220: Group Term Live Insurance",
                "gl_account_type_display": "Expense",
                "name": "Group Term Live Insurance",
                "number": "5220",
                "parent_id": "151",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "154",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5230: Health Insurance and Accident Plans",
                "gl_account_type_display": "Expense",
                "name": "Health Insurance and Accident Plans",
                "number": "5230",
                "parent_id": "151",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "155",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5240: Dental / Vision Plan",
                "gl_account_type_display": "Expense",
                "name": "Dental / Vision Plan",
                "number": "5240",
                "parent_id": "151",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "156",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5006: 1099-NEC",
                "gl_account_type_display": "Expense",
                "name": "1099-NEC",
                "number": "5006",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "157",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8500: DONATION",
                "gl_account_type_display": "Other Expense",
                "name": "DONATION",
                "number": "8500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "158",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8999: MAIN STREET / MERRILL GARDENS Expenses",
                "gl_account_type_display": "Other Expense",
                "name": "MAIN STREET / MERRILL GARDENS Expenses",
                "number": "8999",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "159",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8111: Inspection / Citation Fee",
                "gl_account_type_display": "Other Expense",
                "name": "Inspection / Citation Fee",
                "number": "8111",
                "parent_id": "96",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "160",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7700: MISCELLANEOUS EXPENSE",
                "gl_account_type_display": "Expense",
                "name": "MISCELLANEOUS EXPENSE",
                "number": "7700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "161",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7200: SENIOR PLACEMENT SERVICE",
                "gl_account_type_display": "Expense",
                "name": "SENIOR PLACEMENT SERVICE",
                "number": "7200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "162",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7320: Asset Management Fee",
                "gl_account_type_display": "Expense",
                "name": "Asset Management Fee",
                "number": "7320",
                "parent_id": "68",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "163",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7030: Water (Main)",
                "gl_account_type_display": "Expense",
                "name": "Water (Main)",
                "number": "7030",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "164",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7022: Gas (Garden House 2)",
                "gl_account_type_display": "Expense",
                "name": "Gas (Garden House 2)",
                "number": "7022",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "165",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7020: Gas (Main)",
                "gl_account_type_display": "Expense",
                "name": "Gas (Main)",
                "number": "7020",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "166",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7012: Electricity (Garden House 2)",
                "gl_account_type_display": "Expense",
                "name": "Electricity (Garden House 2)",
                "number": "7012",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "167",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7010: Electricity (Main)",
                "gl_account_type_display": "Expense",
                "name": "Electricity (Main)",
                "number": "7010",
                "parent_id": "89",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "168",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6640: Hotel/Lodging",
                "gl_account_type_display": "Expense",
                "name": "Hotel/Lodging",
                "number": "6640",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "169",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6650: Fuel",
                "gl_account_type_display": "Expense",
                "name": "Fuel",
                "number": "6650",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "170",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6660: Vehicle Maintenance / Repair",
                "gl_account_type_display": "Expense",
                "name": "Vehicle Maintenance / Repair",
                "number": "6660",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "171",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6670: DMV License/Registration",
                "gl_account_type_display": "Expense",
                "name": "DMV License/Registration",
                "number": "6670",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "172",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6440: Pest Control",
                "gl_account_type_display": "Expense",
                "name": "Pest Control",
                "number": "6440",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "173",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6450: General Maintenance Supplies",
                "gl_account_type_display": "Expense",
                "name": "General Maintenance Supplies",
                "number": "6450",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "174",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6470: Elevator Maintenance / Repair",
                "gl_account_type_display": "Expense",
                "name": "Elevator Maintenance / Repair",
                "number": "6470",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "175",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6300: DINNING ROOM",
                "gl_account_type_display": "Expense",
                "name": "DINNING ROOM",
                "number": "6300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "176",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6310: Kitchen Ingredients / Beverages",
                "gl_account_type_display": "Expense",
                "name": "Kitchen Ingredients / Beverages",
                "number": "6310",
                "parent_id": "175",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "177",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6330: Kitchen - Other",
                "gl_account_type_display": "Expense",
                "name": "Kitchen - Other",
                "number": "6330",
                "parent_id": "175",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "178",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6200: FACILITIES",
                "gl_account_type_display": "Expense",
                "name": "FACILITIES",
                "number": "6200",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "179",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6210: Common Area - Snacks / Treats",
                "gl_account_type_display": "Expense",
                "name": "Common Area - Snacks / Treats",
                "number": "6210",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "180",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6220: Decoration Supplies",
                "gl_account_type_display": "Expense",
                "name": "Decoration Supplies",
                "number": "6220",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "181",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6251: Resident Care / Medical Supplies",
                "gl_account_type_display": "Expense",
                "name": "Resident Care / Medical Supplies",
                "number": "6251",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "182",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6230: Housekeeping / Laundry / Toiletry Supplies",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping / Laundry / Toiletry Supplies",
                "number": "6230",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "183",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6280: Facilities - Other",
                "gl_account_type_display": "Expense",
                "name": "Facilities - Other",
                "number": "6280",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "185",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6260: Water Softener",
                "gl_account_type_display": "Expense",
                "name": "Water Softener",
                "number": "6260",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "186",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6270: Medical Waste Disposal",
                "gl_account_type_display": "Expense",
                "name": "Medical Waste Disposal",
                "number": "6270",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "187",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6100: ACTIVITES",
                "gl_account_type_display": "Expense",
                "name": "ACTIVITES",
                "number": "6100",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "188",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6110: Activities / Entertainments",
                "gl_account_type_display": "Expense",
                "name": "Activities / Entertainments",
                "number": "6110",
                "parent_id": "187",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "189",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6120: Activities Supplies / Materials",
                "gl_account_type_display": "Expense",
                "name": "Activities Supplies / Materials",
                "number": "6120",
                "parent_id": "187",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "190",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6130: Activities Transportation / Fuel",
                "gl_account_type_display": "Expense",
                "name": "Activities Transportation / Fuel",
                "number": "6130",
                "parent_id": "187",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "191",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6000: ADMINISTRATIVE",
                "gl_account_type_display": "Expense",
                "name": "ADMINISTRATIVE",
                "number": "6000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "192",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6010: Copier / Printer Lease",
                "gl_account_type_display": "Expense",
                "name": "Copier / Printer Lease",
                "number": "6010",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "193",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6011: Internet / Cable and Phone",
                "gl_account_type_display": "Expense",
                "name": "Internet / Cable and Phone",
                "number": "6011",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "194",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6012: Postage and Shipping",
                "gl_account_type_display": "Expense",
                "name": "Postage and Shipping",
                "number": "6012",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "195",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6013: Software and Apps",
                "gl_account_type_display": "Expense",
                "name": "Software and Apps",
                "number": "6013",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "196",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6014: Office Supplies",
                "gl_account_type_display": "Expense",
                "name": "Office Supplies",
                "number": "6014",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "197",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6020: Compliance / Registration / License Fees",
                "gl_account_type_display": "Expense",
                "name": "Compliance / Registration / License Fees",
                "number": "6020",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "198",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5800: EMPLOYEE ONBOARDING",
                "gl_account_type_display": "Expense",
                "name": "EMPLOYEE ONBOARDING",
                "number": "5800",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "199",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6060: Admin - Meals and Snacks",
                "gl_account_type_display": "Expense",
                "name": "Admin - Meals and Snacks",
                "number": "6060",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "200",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999000: MAINSTREET Cash (DO NOT USE)",
                "gl_account_type_display": "Cash",
                "name": "MAINSTREET Cash (DO NOT USE)",
                "number": "9999000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "201",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999001: Mainstreet (DO NOT USE) - Rent",
                "gl_account_type_display": "Income",
                "name": "Mainstreet (DO NOT USE) - Rent",
                "number": "9999001",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "202",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999002: Mainstreet (DO NOT USE) - Care Fee",
                "gl_account_type_display": "Income",
                "name": "Mainstreet (DO NOT USE) - Care Fee",
                "number": "9999002",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "203",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999003: Mainstreet (DO NOT USE) - Services/Fees",
                "gl_account_type_display": "Income",
                "name": "Mainstreet (DO NOT USE) - Services/Fees",
                "number": "9999003",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "204",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1900: MISCELLANEOUS ASSET",
                "gl_account_type_display": "Asset",
                "name": "MISCELLANEOUS ASSET",
                "number": "1900",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "205",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999004: Mainstreet (DO NOT USE) - Move-In Charge",
                "gl_account_type_display": "Income",
                "name": "Mainstreet (DO NOT USE) - Move-In Charge",
                "number": "9999004",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "206",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1170: Petty Cash",
                "gl_account_type_display": "Cash",
                "name": "Petty Cash",
                "number": "1170",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "207",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1000: Transfer Fund",
                "gl_account_type_display": "Cash",
                "name": "Transfer Fund",
                "number": "1000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "208",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4011: Rent - MC",
                "gl_account_type_display": "Income",
                "name": "Rent - MC",
                "number": "4011",
                "parent_id": "26",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "209",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6015: Business Cards / Brochures and Name Tags",
                "gl_account_type_display": "Expense",
                "name": "Business Cards / Brochures and Name Tags",
                "number": "6015",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "210",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6021: Bank / Transaction Processing Fee",
                "gl_account_type_display": "Expense",
                "name": "Bank / Transaction Processing Fee",
                "number": "6021",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "211",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6090: Admin - Other",
                "gl_account_type_display": "Expense",
                "name": "Admin - Other",
                "number": "6090",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "212",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5900: EMPLOYEE CONTINUED EDUCTION / TRAINING",
                "gl_account_type_display": "Expense",
                "name": "EMPLOYEE CONTINUED EDUCTION / TRAINING",
                "number": "5900",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "213",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6140: Activities Snacks / Drinks",
                "gl_account_type_display": "Expense",
                "name": "Activities Snacks / Drinks",
                "number": "6140",
                "parent_id": "187",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "214",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6250: Resident Care / Consultation Service",
                "gl_account_type_display": "Expense",
                "name": "Resident Care / Consultation Service",
                "number": "6250",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "215",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6252: Resident Pendant System / Monitoring Service",
                "gl_account_type_display": "Expense",
                "name": "Resident Pendant System / Monitoring Service",
                "number": "6252",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "216",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6320: Kitchen Wares",
                "gl_account_type_display": "Expense",
                "name": "Kitchen Wares",
                "number": "6320",
                "parent_id": "175",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "217",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6350: Dietitian / Nutritionist / Contract Chef",
                "gl_account_type_display": "Expense",
                "name": "Dietitian / Nutritionist / Contract Chef",
                "number": "6350",
                "parent_id": "175",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "218",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5999: Mainstreet Payroll",
                "gl_account_type_display": "Expense",
                "name": "Mainstreet Payroll",
                "number": "5999",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "219",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5300: EMPLOYEER PAYROLL TAXES",
                "gl_account_type_display": "Expense",
                "name": "EMPLOYEER PAYROLL TAXES",
                "number": "5300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "220",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5311: ER Social Security",
                "gl_account_type_display": "Expense",
                "name": "ER Social Security",
                "number": "5311",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "221",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5312: ER Medicare",
                "gl_account_type_display": "Expense",
                "name": "ER Medicare",
                "number": "5312",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "222",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5313: ER Federal Unemployment Tax",
                "gl_account_type_display": "Expense",
                "name": "ER Federal Unemployment Tax",
                "number": "5313",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "223",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5314: ER State Unemployment Tax",
                "gl_account_type_display": "Expense",
                "name": "ER State Unemployment Tax",
                "number": "5314",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "224",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5315: ER Employment Training Tax",
                "gl_account_type_display": "Expense",
                "name": "ER Employment Training Tax",
                "number": "5315",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "225",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5002: OT Salaries and Wages",
                "gl_account_type_display": "Expense",
                "name": "OT Salaries and Wages",
                "number": "5002",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "226",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5003: DT Salaries and Wages",
                "gl_account_type_display": "Expense",
                "name": "DT Salaries and Wages",
                "number": "5003",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "227",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5004: Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Sick Day",
                "number": "5004",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "228",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5005: Holiday",
                "gl_account_type_display": "Expense",
                "name": "Holiday",
                "number": "5005",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "229",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5007: Bonus",
                "gl_account_type_display": "Expense",
                "name": "Bonus",
                "number": "5007",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "230",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001: PROGRAM ASSISTANT",
                "gl_account_type_display": "Expense",
                "name": "PROGRAM ASSISTANT",
                "number": "001",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "231",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-1: Program Assistant - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - Reg Salaries/Wages",
                "number": "001-1",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "232",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-2: Program Assistant - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - OT Salaries/Wages",
                "number": "001-2",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "233",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-3: Program Assistant - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - DT Salaries/Wages",
                "number": "001-3",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "234",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-4: Program Assistant - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - Sick Day",
                "number": "001-4",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "235",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-5: Program Assistant - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - Holiday",
                "number": "001-5",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "236",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004: ACTIVITIES DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "ACTIVITIES DIRECTOR",
                "number": "004",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "237",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-1: Activities Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - Reg Salaries/Wages",
                "number": "004-1",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "238",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-2: Activities Director - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - OT Salaries/Wages",
                "number": "004-2",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "240",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-4: Activities Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - Sick Day",
                "number": "004-4",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "241",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-5: Activities Director - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - Holiday",
                "number": "004-5",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "242",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-6: Activities Director - 1099-NEC",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - 1099-NEC",
                "number": "004-6",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "243",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005: EXECUTIVE DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "EXECUTIVE DIRECTOR",
                "number": "005",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "244",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005-1: Executive Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Executive Director - Reg Salaries/Wages",
                "number": "005-1",
                "parent_id": "243",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "245",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005-4: Executive Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Executive Director - Sick Day",
                "number": "005-4",
                "parent_id": "243",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "246",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005-8: Executive Director - PTO",
                "gl_account_type_display": "Expense",
                "name": "Executive Director - PTO",
                "number": "005-8",
                "parent_id": "243",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "247",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005-7: Executive Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Executive Director - Bonus",
                "number": "005-7",
                "parent_id": "243",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "248",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006: BUSINESS OFFICE DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "BUSINESS OFFICE DIRECTOR",
                "number": "006",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "249",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006-1: Business Office Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Business Office Director - Reg Salaries/Wages",
                "number": "006-1",
                "parent_id": "248",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "250",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006-4: Business Office Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Business Office Director - Sick Day",
                "number": "006-4",
                "parent_id": "248",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "251",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006-8: Business Office Director - PTO",
                "gl_account_type_display": "Expense",
                "name": "Business Office Director - PTO",
                "number": "006-8",
                "parent_id": "248",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "252",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006-7: Business Office Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Business Office Director - Bonus",
                "number": "006-7",
                "parent_id": "248",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "253",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007: RECEPTIONIST",
                "gl_account_type_display": "Expense",
                "name": "RECEPTIONIST",
                "number": "007",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "254",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-1: Receptionist - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Reg Salaries/Wages",
                "number": "007-1",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "255",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-2: Receptionist - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - OT Salaries/Wages",
                "number": "007-2",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "256",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-3: Receptionist - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - DT Salaries/Wages",
                "number": "007-3",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "257",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-4: Receptionist - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Sick Day",
                "number": "007-4",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "258",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-5: Receptionist - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Holiday",
                "number": "007-5",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "259",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-8: Receptionist - PTO",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - PTO",
                "number": "007-8",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "260",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008: RESIDENT SERVICES DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "RESIDENT SERVICES DIRECTOR",
                "number": "008",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "261",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008-1: Resident Services Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Resident Services Director - Reg Salaries/Wages",
                "number": "008-1",
                "parent_id": "260",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "262",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008-4: Resident Services Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Resident Services Director - Sick Day",
                "number": "008-4",
                "parent_id": "260",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "263",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008-8: Resident Services Director - PTO",
                "gl_account_type_display": "Expense",
                "name": "Resident Services Director - PTO",
                "number": "008-8",
                "parent_id": "260",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "264",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008-7: Resident Services Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Resident Services Director - Bonus",
                "number": "008-7",
                "parent_id": "260",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "265",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009: ACTIVITIES",
                "gl_account_type_display": "Expense",
                "name": "ACTIVITIES",
                "number": "009",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "266",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-1: Activities - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Activities - Reg Salaries/Wages",
                "number": "009-1",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "267",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-2: Activities - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Activities - OT Salaries/Wages",
                "number": "009-2",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "268",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-3: Activities - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Activities - DT Salaries/Wages",
                "number": "009-3",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "269",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-4: Activities - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Activities - Sick Day",
                "number": "009-4",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "270",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-5: Activities - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Activities - Holiday",
                "number": "009-5",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "271",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010: ASSISTED LIVING CAREGIVER",
                "gl_account_type_display": "Expense",
                "name": "ASSISTED LIVING CAREGIVER",
                "number": "010",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "272",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-1: A/L Caregiver -  Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Reg Salaries/Wages",
                "number": "010-1",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "273",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-2: A/L Caregiver -  OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  OT Salaries/Wages",
                "number": "010-2",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "274",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-3: A/L Caregiver -  DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  DT Salaries/Wages",
                "number": "010-3",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "275",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-5: A/L Caregiver -  Holiday",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Holiday",
                "number": "010-5",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "276",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-4: A/L Caregiver -  Sick Day",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Sick Day",
                "number": "010-4",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "277",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012: MED TECH",
                "gl_account_type_display": "Expense",
                "name": "MED TECH",
                "number": "012",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "278",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-1: Med Tech - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Reg Salaries/Wages",
                "number": "012-1",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "279",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-2: Med Tech - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - OT Salaries/Wages",
                "number": "012-2",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "280",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-3: Med Tech - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - DT Salaries/Wages",
                "number": "012-3",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "281",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-4: Med Tech - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Sick Day",
                "number": "012-4",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "282",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-5: Med Tech - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Holiday",
                "number": "012-5",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "283",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015: COMMUNITY RELATIONS",
                "gl_account_type_display": "Expense",
                "name": "COMMUNITY RELATIONS",
                "number": "015",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "284",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-1: Community Relations - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - Reg Salaries/Wages",
                "number": "015-1",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "285",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-5.2: Server - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Server - Holiday DT",
                "number": "020-5.2",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "286",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-5.2: Lead Server - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Holiday DT",
                "number": "019-5.2",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "287",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-8: Dishwasher - PTO",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - PTO",
                "number": "021-8",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "288",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-5.2: Dishwasher - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Holiday DT",
                "number": "021-5.2",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "289",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-7: Community Relations - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - Bonus",
                "number": "015-7",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "290",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016: EXECUTIVE CHEF",
                "gl_account_type_display": "Expense",
                "name": "EXECUTIVE CHEF",
                "number": "016",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "291",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016-1: Executive Chef - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Executive Chef - Reg Salaries/Wages",
                "number": "016-1",
                "parent_id": "290",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "292",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016-4: Executive Chef - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Executive Chef - Sick Day",
                "number": "016-4",
                "parent_id": "290",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "293",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016-8: Executive Chef - PTO",
                "gl_account_type_display": "Expense",
                "name": "Executive Chef - PTO",
                "number": "016-8",
                "parent_id": "290",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "294",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016-7: Executive Chef - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Executive Chef - Bonus",
                "number": "016-7",
                "parent_id": "290",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "295",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018: COOK",
                "gl_account_type_display": "Expense",
                "name": "COOK",
                "number": "018",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "296",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-1: Cook - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Cook - Reg Salaries/Wages",
                "number": "018-1",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "297",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-2: Cook - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Cook - OT Salaries/Wages",
                "number": "018-2",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "298",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-5.2: Cook - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Cook - Holiday DT",
                "number": "018-5.2",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "299",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-4: Cook - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Cook - Sick Day",
                "number": "018-4",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "300",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-5: Cook - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Cook - Holiday",
                "number": "018-5",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "301",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019: LEAD SERVER",
                "gl_account_type_display": "Expense",
                "name": "LEAD SERVER",
                "number": "019",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "302",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-1: Lead Server - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Reg Salaries/Wages",
                "number": "019-1",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "303",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-2: Lead Server - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - OT Salaries/Wages",
                "number": "019-2",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "304",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-3: Lead Server - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - DT Salaries/Wages",
                "number": "019-3",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "305",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-4: Lead Server - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Sick Day",
                "number": "019-4",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "306",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-8: Lead Server - PTO",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - PTO",
                "number": "019-8",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "307",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020: SERVER",
                "gl_account_type_display": "Expense",
                "name": "SERVER",
                "number": "020",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "308",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-1: Server - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Server - Reg Salaries/Wages",
                "number": "020-1",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "309",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-2: Server - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Server - OT Salaries/Wages",
                "number": "020-2",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "310",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-3: Server - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Server - DT Salaries/Wages",
                "number": "020-3",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "311",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-4: Server - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Server - Sick Day",
                "number": "020-4",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "312",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-5: Server - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Server - Holiday",
                "number": "020-5",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "313",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021: DISHWASHER",
                "gl_account_type_display": "Expense",
                "name": "DISHWASHER",
                "number": "021",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "314",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-1: Dishwasher - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Reg Salaries/Wages",
                "number": "021-1",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "315",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-2: Dishwasher - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - OT Salaries/Wages",
                "number": "021-2",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "316",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-3: Dishwasher - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - DT Salaries/Wages",
                "number": "021-3",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "317",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-4: Dishwasher - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Sick Day",
                "number": "021-4",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "318",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-5: Dishwasher - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Holiday",
                "number": "021-5",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "319",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022: MAINTENANCE DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "MAINTENANCE DIRECTOR",
                "number": "022",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "320",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-1: Maintenance Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - Reg Salaries/Wages",
                "number": "022-1",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "321",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-4: Maintenance Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - Sick Day",
                "number": "022-4",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "322",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-8: Maintenance Director - PTO",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - PTO",
                "number": "022-8",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "323",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-7: Maintenance Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - Bonus",
                "number": "022-7",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "324",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023: MAINTENANCE ASSISTANT",
                "gl_account_type_display": "Expense",
                "name": "MAINTENANCE ASSISTANT",
                "number": "023",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "325",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2300: PAYROLL DEDUCTION/TAXES TO PAY",
                "gl_account_type_display": "Liability",
                "name": "PAYROLL DEDUCTION/TAXES TO PAY",
                "number": "2300",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "326",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2320: Employee Payroll Taxes",
                "gl_account_type_display": "Liability",
                "name": "Employee Payroll Taxes",
                "number": "2320",
                "parent_id": "325",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "327",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2321: EE Social Security",
                "gl_account_type_display": "Liability",
                "name": "EE Social Security",
                "number": "2321",
                "parent_id": "326",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "328",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2322: EE Medicare",
                "gl_account_type_display": "Liability",
                "name": "EE Medicare",
                "number": "2322",
                "parent_id": "326",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "329",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2323: EE Federal Tax Withholdings",
                "gl_account_type_display": "Liability",
                "name": "EE Federal Tax Withholdings",
                "number": "2323",
                "parent_id": "326",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "330",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2324: EE State Tax Withholdings",
                "gl_account_type_display": "Liability",
                "name": "EE State Tax Withholdings",
                "number": "2324",
                "parent_id": "326",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "331",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2325: EE State Disability Insurance Tax",
                "gl_account_type_display": "Liability",
                "name": "EE State Disability Insurance Tax",
                "number": "2325",
                "parent_id": "326",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "332",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2350: Deduction - Benefits / Garnishments",
                "gl_account_type_display": "Liability",
                "name": "Deduction - Benefits / Garnishments",
                "number": "2350",
                "parent_id": "325",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "333",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2351: Medical insurance",
                "gl_account_type_display": "Liability",
                "name": "Medical insurance",
                "number": "2351",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "334",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2352: Dental Insurance",
                "gl_account_type_display": "Liability",
                "name": "Dental Insurance",
                "number": "2352",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "335",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2353: Vision Insurance",
                "gl_account_type_display": "Liability",
                "name": "Vision Insurance",
                "number": "2353",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "336",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2354: Voluntary Life Insurance",
                "gl_account_type_display": "Liability",
                "name": "Voluntary Life Insurance",
                "number": "2354",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "337",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2355: State/Federal Tax Levy",
                "gl_account_type_display": "Liability",
                "name": "State/Federal Tax Levy",
                "number": "2355",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "338",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2358: Deduction-Other",
                "gl_account_type_display": "Liability",
                "name": "Deduction-Other",
                "number": "2358",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "339",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2400: Sales Commission Tax Withholdings",
                "gl_account_type_display": "Liability",
                "name": "Sales Commission Tax Withholdings",
                "number": "2400",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "340",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-1: Maintenance Assistant - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - Reg Salaries/Wages",
                "number": "023-1",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "341",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-2: Maintenance Assistant - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - OT Salaries/Wages",
                "number": "023-2",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "342",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-3: Maintenance Assistant - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - DT Salaries/Wages",
                "number": "023-3",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "343",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-4: Maintenance Assistant - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - Sick Day",
                "number": "023-4",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "344",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-5: Maintenance Assistant - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - Holiday",
                "number": "023-5",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "345",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024: HOUSEKEEPING",
                "gl_account_type_display": "Expense",
                "name": "HOUSEKEEPING",
                "number": "024",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "346",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-1: Housekeeping - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Reg Salaries/Wages",
                "number": "024-1",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "347",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-2: Housekeeping - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - OT Salaries/Wages",
                "number": "024-2",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "348",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-3: Housekeeping - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - DT Salaries/Wages",
                "number": "024-3",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "349",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-5.2: Housekeeping - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Holiday DT",
                "number": "024-5.2",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "350",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-4: Housekeeping - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Sick Day",
                "number": "024-4",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "351",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025: MEMORY CARE DIRECTOR",
                "gl_account_type_display": "Expense",
                "name": "MEMORY CARE DIRECTOR",
                "number": "025",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "352",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025-1: Memory Care Director - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Memory Care Director - Reg Salaries/Wages",
                "number": "025-1",
                "parent_id": "351",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "353",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025-4: Memory Care Director - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Memory Care Director - Sick Day",
                "number": "025-4",
                "parent_id": "351",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "354",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025-8: Memory Care Director - PTO",
                "gl_account_type_display": "Expense",
                "name": "Memory Care Director - PTO",
                "number": "025-8",
                "parent_id": "351",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "355",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025-7: Memory Care Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Memory Care Director - Bonus",
                "number": "025-7",
                "parent_id": "351",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "356",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7101: CGL / PL - Commercial Liability",
                "gl_account_type_display": "Expense",
                "name": "CGL / PL - Commercial Liability",
                "number": "7101",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "357",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7150: Auto Insurance",
                "gl_account_type_display": "Expense",
                "name": "Auto Insurance",
                "number": "7150",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "358",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7520: Supplemental Property Tax",
                "gl_account_type_display": "Expense",
                "name": "Supplemental Property Tax",
                "number": "7520",
                "parent_id": "86",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "359",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999009: Mainstreet-Prepaid insurance",
                "gl_account_type_display": "Other Expense",
                "name": "Mainstreet-Prepaid insurance",
                "number": "9999009",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "360",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "999999-9999: (OLD) Operating Cash - WALNUT",
                "gl_account_type_display": "Cash",
                "name": "(OLD) Operating Cash - WALNUT",
                "number": "999999-9999",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "363",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-5.1: Receptionist - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Holiday OT",
                "number": "007-5.1",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "364",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-5.2: Receptionist - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Holiday DT",
                "number": "007-5.2",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "365",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-5.1: A/L Caregiver -  Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Holiday OT",
                "number": "010-5.1",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "366",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-5.2: A/L Caregiver -  Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Holiday DT",
                "number": "010-5.2",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "367",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-8: A/L Caregiver -  PTO",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  PTO",
                "number": "010-8",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "368",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-9: A/L Caregiver -  PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  PTO Payout",
                "number": "010-9",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "369",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-5.1: Med Tech - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Holiday OT",
                "number": "012-5.1",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "370",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-5.2: Med Tech - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Holiday DT",
                "number": "012-5.2",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "371",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-8: Med Tech - PTO",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - PTO",
                "number": "012-8",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "372",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-8: Housekeeping - PTO",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - PTO",
                "number": "024-8",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "373",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5008: PTO",
                "gl_account_type_display": "Expense",
                "name": "PTO",
                "number": "5008",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "374",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5008-1: PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "PTO Payout",
                "number": "5008-1",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "375",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-7: Receptionist - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Bonus",
                "number": "007-7",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "376",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6311: Kitchen - Truck Delivery Fee",
                "gl_account_type_display": "Expense",
                "name": "Kitchen - Truck Delivery Fee",
                "number": "6311",
                "parent_id": "175",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "377",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8600: GIFTS",
                "gl_account_type_display": "Other Expense",
                "name": "GIFTS",
                "number": "8600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "393",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "999999-4000: RENTS",
                "gl_account_type_display": "Income",
                "name": "RENTS",
                "number": "999999-4000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "394",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "999999-4010: Rent - AL",
                "gl_account_type_display": "Income",
                "name": "Rent - AL",
                "number": "999999-4010",
                "parent_id": "393",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "395",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "999999-4011: Rent - MC",
                "gl_account_type_display": "Income",
                "name": "Rent - MC",
                "number": "999999-4011",
                "parent_id": "393",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "453",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-7: Program Assistant - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - Bonus",
                "number": "001-7",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "455",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-8: Program Assistant - PTO",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - PTO",
                "number": "001-8",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "456",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "001-9: Program Assistant - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Program Assistant - PTO Payout",
                "number": "001-9",
                "parent_id": "230",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "458",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999999-1000: Credit Card - TUSTIN (   )",
                "gl_account_type_display": "Cash",
                "name": "Credit Card - TUSTIN (   )",
                "number": "9999999-1000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "459",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-7: Activities Director - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - Bonus",
                "number": "004-7",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "460",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-8: Activities Director - PTO ",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - PTO ",
                "number": "004-8",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "461",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "004-9: Activities Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Activities Director - PTO Payout",
                "number": "004-9",
                "parent_id": "236",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "471",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "005-9: Executive Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Executive Director - PTO Payout",
                "number": "005-9",
                "parent_id": "243",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "478",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "006-9: Business Office Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Business Office Director - PTO Payout",
                "number": "006-9",
                "parent_id": "248",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "485",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-9: Receptionist - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - PTO Payout",
                "number": "007-9",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "497",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "008-9: Resident Services Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Resident Services Director - PTO Payout",
                "number": "008-9",
                "parent_id": "260",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "504",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-7: Activities - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Activities - Bonus",
                "number": "009-7",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "505",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-8: Activities - PTO",
                "gl_account_type_display": "Expense",
                "name": "Activities - PTO",
                "number": "009-8",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "506",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-9: Activities - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Activities - PTO Payout",
                "number": "009-9",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "516",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-7: A/L Caregiver -  Bonus",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver -  Bonus",
                "number": "010-7",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "528",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-7: Med Tech - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - Bonus",
                "number": "012-7",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "529",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "012-9: Med Tech - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Med Tech - PTO Payout",
                "number": "012-9",
                "parent_id": "277",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "541",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-4: Community Relations - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - Sick Day",
                "number": "015-4",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "542",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-5: Community Relations - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - Holiday",
                "number": "015-5",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "543",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-8: Community Relations - PTO",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - PTO",
                "number": "015-8",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "544",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-9: Community Relations - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Community Relations - PTO Payout",
                "number": "015-9",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "552",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "016-9: Executive Chef - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Executive Chef - PTO Payout",
                "number": "016-9",
                "parent_id": "290",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "559",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-5.1: Cook - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Cook - Holiday OT",
                "number": "018-5.1",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "560",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-7: Cook - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Cook - Bonus",
                "number": "018-7",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "561",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-8: Cook - PTO",
                "gl_account_type_display": "Expense",
                "name": "Cook - PTO",
                "number": "018-8",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "562",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-9: Cook - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Cook - PTO Payout",
                "number": "018-9",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "573",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-5: Lead Server - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Holiday",
                "number": "019-5",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "574",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-5.1: Lead Server - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Holiday OT",
                "number": "019-5.1",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "575",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-7: Lead Server - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - Bonus",
                "number": "019-7",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "576",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "019-9: Lead Server - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Lead Server - PTO Payout",
                "number": "019-9",
                "parent_id": "301",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "588",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-5.1: Server - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Server - Holiday OT",
                "number": "020-5.1",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "589",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-7: Server - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Server - Bonus",
                "number": "020-7",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "590",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-8: Server - PTO",
                "gl_account_type_display": "Expense",
                "name": "Server - PTO",
                "number": "020-8",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "591",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-9: Server - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Server - PTO Payout",
                "number": "020-9",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "603",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-5.1: Dishwasher - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Holiday OT",
                "number": "021-5.1",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "604",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-7: Dishwasher - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Bonus",
                "number": "021-7",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "605",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-9: Dishwasher - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - PTO Payout",
                "number": "021-9",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "617",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-9: Maintenance Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - PTO Payout",
                "number": "022-9",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "624",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-7: Maintenance Assistant - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - Bonus",
                "number": "023-7",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "625",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-8: Maintenance Assistant - PTO",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - PTO",
                "number": "023-8",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "626",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-9: Maintenance Assistant - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - PTO Payout",
                "number": "023-9",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "636",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-5: Housekeeping - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Holiday",
                "number": "024-5",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "637",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-5.1: Housekeeping - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Holiday OT",
                "number": "024-5.1",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "638",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-7: Housekeeping - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Bonus",
                "number": "024-7",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "639",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-9: Housekeeping - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - PTO Payout",
                "number": "024-9",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "651",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "025-9: Memory Care Director - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Memory Care Director - PTO Payout",
                "number": "025-9",
                "parent_id": "351",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "779",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200: MANAGEMENT",
                "gl_account_type_display": "Expense",
                "name": "MANAGEMENT",
                "number": "200",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "780",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-4: Management - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Management - Sick Day",
                "number": "200-4",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "781",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-8: Management - PTO",
                "gl_account_type_display": "Expense",
                "name": "Management - PTO",
                "number": "200-8",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "782",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "201: Senior Management Salaries",
                "gl_account_type_display": "Expense",
                "name": "Senior Management Salaries",
                "number": "201",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "783",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "202: Mid-Level Management Salaries",
                "gl_account_type_display": "Expense",
                "name": "Mid-Level Management Salaries",
                "number": "202",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "784",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "203: Supervisory Management Salaries",
                "gl_account_type_display": "Expense",
                "name": "Supervisory Management Salaries",
                "number": "203",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "785",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011: MEMORY CARE CAREGIVER",
                "gl_account_type_display": "Expense",
                "name": "MEMORY CARE CAREGIVER",
                "number": "011",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "786",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-1: M/C Caregiver - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Reg Salaries/Wages",
                "number": "011-1",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "787",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-2: M/C Caregiver - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - OT Salaries/Wages",
                "number": "011-2",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "788",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-3: M/C Caregiver - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - DT Salaries/Wages",
                "number": "011-3",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "789",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-4: M/C Caregiver - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Sick Day",
                "number": "011-4",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "790",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-5: M/C Caregiver - Holiday",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Holiday",
                "number": "011-5",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "791",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-7: M/C Caregiver - Bonus",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Bonus",
                "number": "011-7",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "792",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-8: M/C Caregiver - PTO",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - PTO",
                "number": "011-8",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "793",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-9: M/C Caregiver - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - PTO Payout",
                "number": "011-9",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "794",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-1.1: M/C Caregiver - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Meal Premium",
                "number": "011-1.1",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "795",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-5.1: M/C Caregiver - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Holiday OT",
                "number": "011-5.1",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "796",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "011-5.2: M/C Caregiver - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "M/C Caregiver - Holiday DT",
                "number": "011-5.2",
                "parent_id": "785",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "797",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "999999-1050: Operating Cash WALNUT (OSB 7823)",
                "gl_account_type_display": "Cash",
                "name": "Operating Cash WALNUT (OSB 7823)",
                "number": "999999-1050",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "798",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-9: Management - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Management - PTO Payout",
                "number": "200-9",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "799",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-7: Management - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Management - Bonus",
                "number": "200-7",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "800",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "007-1.1: Receptionist - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Receptionist - Meal Premium",
                "number": "007-1.1",
                "parent_id": "253",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "836",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4682: Cable / TV",
                "gl_account_type_display": "Income",
                "name": "Cable / TV",
                "number": "4682",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1066",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "99999-1050: General Cash",
                "gl_account_type_display": "Cash",
                "name": "General Cash",
                "number": "99999-1050",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1067",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7310: Management Fees",
                "gl_account_type_display": "Expense",
                "name": "Management Fees",
                "number": "7310",
                "parent_id": "68",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1068",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "99999-4010: Rent",
                "gl_account_type_display": "Income",
                "name": "Rent",
                "number": "99999-4010",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1070",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4681: Parking Fee",
                "gl_account_type_display": "Income",
                "name": "Parking Fee",
                "number": "4681",
                "parent_id": "144",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1071",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-5.2: Activities - DT Holiday",
                "gl_account_type_display": "Expense",
                "name": "Activities - DT Holiday",
                "number": "009-5.2",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1072",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-5.2: Maintenance Assistant - DT Holiday",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - DT Holiday",
                "number": "023-5.2",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1073",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-1150: HC Operating Cash",
                "gl_account_type_display": "Cash",
                "name": "HC Operating Cash",
                "number": "900-1150",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1074",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-1160: HC Security Deposit",
                "gl_account_type_display": "Cash",
                "name": "HC Security Deposit",
                "number": "900-1160",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1075",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-7700: HC Miscellaneous Expense",
                "gl_account_type_display": "Expense",
                "name": "HC Miscellaneous Expense",
                "number": "900-7700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1076",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4630: HC Pet Fee",
                "gl_account_type_display": "Income",
                "name": "HC Pet Fee",
                "number": "900-4630",
                "parent_id": "1139",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1077",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4635: HC Pet Security Deposit",
                "gl_account_type_display": "Income",
                "name": "HC Pet Security Deposit",
                "number": "900-4635",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1078",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4681: HC Parking / Garage Fee",
                "gl_account_type_display": "Income",
                "name": "HC Parking / Garage Fee",
                "number": "900-4681",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1079",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4900: HC Miscellaneous Income / Fee",
                "gl_account_type_display": "Income",
                "name": "HC Miscellaneous Income / Fee",
                "number": "900-4900",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1080",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-6420: HC Janitorial / Cleaning Service",
                "gl_account_type_display": "Expense",
                "name": "HC Janitorial / Cleaning Service",
                "number": "900-6420",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1081",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-6430: HC Gardening / Landscape Service",
                "gl_account_type_display": "Expense",
                "name": "HC Gardening / Landscape Service",
                "number": "900-6430",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1082",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-6470: HC Maintenance / Repair",
                "gl_account_type_display": "Expense",
                "name": "HC Maintenance / Repair",
                "number": "900-6470",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1087",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "9999999-9999: (OLD) Operating Cash - TUSTIN",
                "gl_account_type_display": "Cash",
                "name": "(OLD) Operating Cash - TUSTIN",
                "number": "9999999-9999",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1095",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5700: REIMBURSEMENT",
                "gl_account_type_display": "Expense",
                "name": "REIMBURSEMENT",
                "number": "5700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1098",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4012: Parking Fee",
                "gl_account_type_display": "Income",
                "name": "Parking Fee",
                "number": "900-4012",
                "parent_id": "1139",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1099",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-1.1: A/L Caregiver - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver - Meal Premium",
                "number": "010-1.1",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1114",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "010-6: A/L Caregiver - 1099-NEC",
                "gl_account_type_display": "Expense",
                "name": "A/L Caregiver - 1099-NEC",
                "number": "010-6",
                "parent_id": "271",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1118",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "023-1.1: Maintenance Assistant - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Assistant - Meal Premium",
                "number": "023-1.1",
                "parent_id": "324",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1139",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4000: HC RENT",
                "gl_account_type_display": "Income",
                "name": "HC RENT",
                "number": "900-4000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1140",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4010: HC Rent",
                "gl_account_type_display": "Income",
                "name": "HC Rent",
                "number": "900-4010",
                "parent_id": "1139",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1141",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "99999-1000: QB Adjustment",
                "gl_account_type_display": "Asset",
                "name": "QB Adjustment",
                "number": "99999-1000",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1142",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7102: XS - Excess Insurance",
                "gl_account_type_display": "Expense",
                "name": "XS - Excess Insurance",
                "number": "7102",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1144",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2399: Insurance Payables (Estimated)",
                "gl_account_type_display": "Liability",
                "name": "Insurance Payables (Estimated)",
                "number": "2399",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1145",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8910: ESL - Corporate Insurance ( Community allocated )",
                "gl_account_type_display": "Other Expense",
                "name": "ESL - Corporate Insurance ( Community allocated )",
                "number": "8910",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1146",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5316: Payroll Tax Due",
                "gl_account_type_display": "Expense",
                "name": "Payroll Tax Due",
                "number": "5316",
                "parent_id": "219",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1149",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8120: Penalty Fee",
                "gl_account_type_display": "Other Expense",
                "name": "Penalty Fee",
                "number": "8120",
                "parent_id": "96",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1150",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4999: Transfer Fund",
                "gl_account_type_display": "Other Income",
                "name": "Transfer Fund",
                "number": "4999",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1151",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "022-2: Maintenance Director - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Maintenance Director - OT Salaries/Wages",
                "number": "022-2",
                "parent_id": "319",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1152",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2359: Payroll Payable",
                "gl_account_type_display": "Liability",
                "name": "Payroll Payable",
                "number": "2359",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1153",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-1.1: Activities - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Activities - Meal Premium",
                "number": "009-1.1",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1154",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-1.1: Cook - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Cook - Meal Premium",
                "number": "018-1.1",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1155",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8700: Transfer Fund",
                "gl_account_type_display": "Other Expense",
                "name": "Transfer Fund",
                "number": "8700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1157",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2201: Payroll Clearing Account",
                "gl_account_type_display": "Liability",
                "name": "Payroll Clearing Account",
                "number": "2201",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1159",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8060: Major Repair",
                "gl_account_type_display": "Other Expense",
                "name": "Major Repair",
                "number": "8060",
                "parent_id": "100",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1160",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2369: Tax Payables (Estimated)",
                "gl_account_type_display": "Liability",
                "name": "Tax Payables (Estimated)",
                "number": "2369",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1161",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5290: Employee Benefits - Other",
                "gl_account_type_display": "Expense",
                "name": "Employee Benefits - Other",
                "number": "5290",
                "parent_id": "151",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1162",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "8800: Other Expense",
                "gl_account_type_display": "Other Expense",
                "name": "Other Expense",
                "number": "8800",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1163",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "009-5.1: Activities - OT Holiday",
                "gl_account_type_display": "Expense",
                "name": "Activities - OT Holiday",
                "number": "009-5.1",
                "parent_id": "265",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1164",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-5: Management - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Management - Holiday",
                "number": "200-5",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1165",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-5.1: Management - Holiday OT",
                "gl_account_type_display": "Expense",
                "name": "Management - Holiday OT",
                "number": "200-5.1",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1166",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-5.2: Management - Holiday DT",
                "gl_account_type_display": "Expense",
                "name": "Management - Holiday DT",
                "number": "200-5.2",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1167",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4001: Eternity Investment LLC",
                "gl_account_type_display": "Cash",
                "name": "Eternity Investment LLC",
                "number": "900-4001",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1168",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4003: Xihan Investment LLC",
                "gl_account_type_display": "Cash",
                "name": "Xihan Investment LLC",
                "number": "900-4003",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1169",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4002: CS&Z Investment LLC",
                "gl_account_type_display": "Cash",
                "name": "CS&Z Investment LLC",
                "number": "900-4002",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1170",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "900-4005: Springfield Investment LLC",
                "gl_account_type_display": "Cash",
                "name": "Springfield Investment LLC",
                "number": "900-4005",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1171",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2600: Short-Term Loan",
                "gl_account_type_display": "Liability",
                "name": "Short-Term Loan",
                "number": "2600",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1172",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6261: Drinking Water",
                "gl_account_type_display": "Expense",
                "name": "Drinking Water",
                "number": "6261",
                "parent_id": "178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1176",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6031: Friends and Family Referral",
                "gl_account_type_display": "Expense",
                "name": "Friends and Family Referral",
                "number": "6031",
                "parent_id": "191",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1177",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "200-2: Management - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Management - OT Salaries/Wages",
                "number": "200-2",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1178",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014: MARKETING COORDINATOR",
                "gl_account_type_display": "Expense",
                "name": "MARKETING COORDINATOR",
                "number": "014",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1179",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-1: Marketing Coordinator - Reg Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - Reg Salaries/Wages",
                "number": "014-1",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1180",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-2: Marketing Coordinator - OT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - OT Salaries/Wages",
                "number": "014-2",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1181",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-3: Marketing Coordinator - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - DT Salaries/Wages",
                "number": "014-3",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1182",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-4: Marketing Coordinator - Sick Day",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - Sick Day",
                "number": "014-4",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1183",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-5: Marketing Coordinator - Holiday",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - Holiday",
                "number": "014-5",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1184",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-5.2: Marketing Coordinator - DT Holiday",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - DT Holiday",
                "number": "014-5.2",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1185",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-7: Marketing Coordinator - Bonus",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - Bonus",
                "number": "014-7",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1186",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-8: Marketing Coordinator - PTO",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - PTO",
                "number": "014-8",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1187",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "014-9: Marketing Coordinator - PTO Payout",
                "gl_account_type_display": "Expense",
                "name": "Marketing Coordinator - PTO Payout",
                "number": "014-9",
                "parent_id": "1178",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1188",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-6: Cook - 1099 NEC",
                "gl_account_type_display": "Expense",
                "name": "Cook - 1099 NEC",
                "number": "018-6",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1189",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7103: EPLI - Employment Practice Liability",
                "gl_account_type_display": "Expense",
                "name": "EPLI - Employment Practice Liability",
                "number": "7103",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1193",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "1500: Short-Term Loan",
                "gl_account_type_display": "Asset",
                "name": "Short-Term Loan",
                "number": "1500",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1194",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7199: Insurance - Other",
                "gl_account_type_display": "Expense",
                "name": "Insurance - Other",
                "number": "7199",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1195",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6480: Backflow",
                "gl_account_type_display": "Expense",
                "name": "Backflow",
                "number": "6480",
                "parent_id": "53",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1196",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "018-3: Cook - DT Salaries/Wages",
                "gl_account_type_display": "Expense",
                "name": "Cook - DT Salaries/Wages",
                "number": "018-3",
                "parent_id": "295",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1197",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2700: Vehicle / Equipment Loan",
                "gl_account_type_display": "Liability",
                "name": "Vehicle / Equipment Loan",
                "number": "2700",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1198",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "6680: Vehicle Payment",
                "gl_account_type_display": "Expense",
                "name": "Vehicle Payment",
                "number": "6680",
                "parent_id": "49",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1199",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2356: Hospital Indemnity",
                "gl_account_type_display": "Liability",
                "name": "Hospital Indemnity",
                "number": "2356",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1200",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "2357: Critical Illness",
                "gl_account_type_display": "Liability",
                "name": "Critical Illness",
                "number": "2357",
                "parent_id": "332",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1201",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-1.1: Dishwasher - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - Meal Premium",
                "number": "021-1.1",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1202",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "020-1.1: Server - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Server - Meal Premium",
                "number": "020-1.1",
                "parent_id": "307",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1203",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "203-2: Supervisory Management OT Salaries",
                "gl_account_type_display": "Expense",
                "name": "Supervisory Management OT Salaries",
                "number": "203-2",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1204",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "024-1.1: Housekeeping - Meal Premium",
                "gl_account_type_display": "Expense",
                "name": "Housekeeping - Meal Premium",
                "number": "024-1.1",
                "parent_id": "345",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1205",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "021-6: Dishwasher - 1099 NEC",
                "gl_account_type_display": "Expense",
                "name": "Dishwasher - 1099 NEC",
                "number": "021-6",
                "parent_id": "313",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1206",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "201-2: Senior Management - OT Salaries",
                "gl_account_type_display": "Expense",
                "name": "Senior Management - OT Salaries",
                "number": "201-2",
                "parent_id": "779",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1207",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7160: Crime",
                "gl_account_type_display": "Expense",
                "name": "Crime",
                "number": "7160",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1208",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7170: Cyber",
                "gl_account_type_display": "Expense",
                "name": "Cyber",
                "number": "7170",
                "parent_id": "60",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1209",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5009: Other Compensation",
                "gl_account_type_display": "Expense",
                "name": "Other Compensation",
                "number": "5009",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1210",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "5010: Employee Reimbursement",
                "gl_account_type_display": "Expense",
                "name": "Employee Reimbursement",
                "number": "5010",
                "parent_id": "149",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1211",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "015-2: OT Salaries/Wages ",
                "gl_account_type_display": "Expense",
                "name": "OT Salaries/Wages ",
                "number": "015-2",
                "parent_id": "283",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1212",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "7450: Property Tax - Impound",
                "gl_account_type_display": "Other Expense",
                "name": "Property Tax - Impound",
                "number": "7450",
                "parent_id": "72",
                "hidden": false
            },
            "relationships": {}
        },
        {
            "id": "1213",
            "type": "gl_accounts",
            "attributes": {
                "display_name": "4910: Settlement / Distribution",
                "gl_account_type_display": "Other Income",
                "name": "Settlement / Distribution",
                "number": "4910",
                "parent_id": null,
                "hidden": false
            },
            "relationships": {}
        }
    ]
}

const glAccountList = {
    "order": [],
    "data": []
}

glCodeList.data.forEach(data => {

    let childs = null;
    let parentGlaccount = null;
    if(data.attributes.parent_id !== null){
        parentGlaccount = glCodeList.data.find(item => item.id === data.attributes.parent_id).attributes.number;
    }
    const results = glCodeList.data.filter(item => item.attributes.parent_id === data.id);
    if (results.length !== 0) {
        childs = results.map(child => ({
            "id": child.id,
            "name": child.attributes.name,
            "classification": child.attributes.gl_account_type_display,
            "displayName": child.attributes.display_name
        }));
    }

    glAccountList.data.push({
        "id": data.id,
        "order": [],
        "glCode": data.attributes.number,
        "name": data.attributes.name,
        "classification": data.attributes.gl_account_type_display,
        "displayName": data.attributes.gl_account_type_display,
        "parentId": data.attributes.parent_id,
        "parentGlaccount": parentGlaccount,
        "childs": childs,
    })
})

fs.writeFile('result.json', JSON.stringify(glAccountList, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Successfully wrote to result.json');
    }
});


