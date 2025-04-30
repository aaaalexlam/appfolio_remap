window.reportComponent = {
    "data": [
        {
            "accountingTotal": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "glAccount",
                    "dateRange",
                    "accountingBasis"
                ]
            }
        },
        {
            "balanceSheet": {
                "columns": [
                    {
                        "name": "Account Name",
                        "display": true,
                        "inLineCss": "width:100px"
                    },
                    {
                        "name": "Balance",
                        "display": true,
                        "inLineCss": "flex-grow: 1; text-align: right; min-width:150px;"
                    },
                    {
                        "name": "Account Number",
                        "display": false,
                        "inLineCss": ""
                    }
                ],
                "customization": [
                    {
                        "inputType": "properties",
                        "displayName": "Properties"
                    },
                    {
                        "inputType": "asOf",
                        "displayName": "As of"
                    },
                    {
                        "inputType": "accountingBasis",
                        "displayName": "Accounting Basis"
                    },
                    {
                        "inputType": "levelOfDetail",
                        "displayName": "Level Of Detail"
                    },
                    {
                        "inputType": "checkBox",
                        "displayName": "Include Zero Balance GL Account"
                    }
                ]
            }
        },
        {
            "balanceSheetComparative": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "date",
                    "compareTo",
                    "accountingBasis",
                    "levelOfDetail"
                ]
            }
        },
        {
            "balanceSheetPropertyComparison": {
                "columns": [
                    {
                        "name": "Total",
                        "display": true
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "date",
                    "accountingBasis",
                    "levelOfDetail"
                ]
            }
        },
        {
            "bankAccountActivity": {
                "columns": [
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    }
                ],
                "customization": [
                    "bankAccount",
                    "dateRange",
                    "basedOn"
                ]
            }
        },
        {
            "BankAccountAssociation": {
                "columns": [
                    {
                        "name": "Bank Account",
                        "display": false
                    },
                    {
                        "name": "Bank Name",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "bankAccounts",
                    "cashAccounts"
                ]
            }
        },
        {
            "cashFlow": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis",
                    "additionalCashGLaccount",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount",
                    "excludeSuppressedFees"
                ]
            }
        },
        {
            "cashFlow12Month": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount",
                    "excludeSuppressedFees"
                ]
            }
        },
        {
            "cashFlowPropertyComparison": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis",
                    "additionalCashGLaccount",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount",
                    "excludeSuppressedFees"
                ]
            }
        },
        {
            "cashFlowDetail": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Remarks",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis",
                    "excludeSuppressedFees"
                ]
            }
        },
        {
            "chartOfAccount": {
                "columns": [
                    {
                        "name": "subjectToTaxAuthority",
                        "display": false
                    },
                    {
                        "name": "fundAccount",
                        "display": false
                    }
                ],
                "customization": []
            }
        },
        {
            "expenseDistribution": {
                "columns": [
                    {
                        "name": "Account",
                        "display": false
                    },
                    {
                        "name": "Account Name",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "payee",
                    "billDateRange"
                ]
            }
        },
        {
            "generalLedger": {
                "columns": [
                    {
                        "name": "GL Account",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Month",
                        "display": false
                    },
                    {
                        "name": "Quarter",
                        "display": false
                    },
                    {
                        "name": "Year",
                        "display": false
                    },
                    {
                        "name": "Bank Account",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Invoice Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Account Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Remarks",
                        "display": false
                    },
                    {
                        "name": "Deposit Date",
                        "display": false
                    },
                    {
                        "name": "Deposit Number",
                        "display": false
                    },
                    {
                        "name": "Cash Account",
                        "display": false
                    },
                    {
                        "name": "Vendor Account Number",
                        "display": false
                    },
                    {
                        "name": "Service Form",
                        "display": false
                    },
                    {
                        "name": "Service To",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "createBy",
                    "glAccounts",
                    "excludeZeroDollarReceiptsFromCashAccounts",
                    "dateRange",
                    "lastEditedRange",
                    "accountingBasis",
                    "showReversedTransactions"
                ]
            }
        },
        {
            "incomeStatement": {
                "columns": [
                    {
                        "name": "lastYearOfMonthEnd",
                        "display": false
                    },
                    {
                        "name": "percentageOfLastYearOfMonthEnd",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    },
                    {
                        "name": "pricePerUnitForSelectedMonth",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "date",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "incomeStatement12Month": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "fundType",
                    "periodRange",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "incomeStatementComparative": {
                "columns": [
                    {
                        "name": "Period $ Var.",
                        "display": false
                    },
                    {
                        "name": "YTD $ Var.",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "incomeStatementPropertyComparison": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "incomeStatementDateRange": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis",
                    "levelOfDetail",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "Loans": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Next Interest Rate",
                        "display": false
                    },
                    {
                        "name": "Next Interest Rate Date",
                        "display": false
                    },
                    {
                        "name": "Escrow",
                        "display": false
                    },
                    {
                        "name": "Payment Penalty",
                        "display": false
                    },
                    {
                        "name": "Ballon Amount",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "date",
                    "showHiddenLoans"
                ]
            }
        },
        {
            "trailBalance": {
                "columns": [],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis"
                ]
            }
        },
        {
            "trailBalanceByProperty": {
                "columns": [],
                "customization": [
                    "properties",
                    "dateRange",
                    "accountingBasis"
                ]
            }
        },
        {
            "TrustAccountBalance": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Deposits",
                        "display": false
                    },
                    {
                        "name": "Unpaid Bills Amount",
                        "display": false
                    },
                    {
                        "name": "Unused Prepayment Amount",
                        "display": false
                    },
                    {
                        "name": "Operating Bank Account",
                        "display": false
                    },
                    {
                        "name": "Reserve Amount",
                        "display": false
                    },
                    {
                        "name": "Work Order Estimates",
                        "display": false
                    },
                    {
                        "name": "Future Reversed Receipts",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "date",
                    "accountingBasis",
                    "operatingBankAccounts",
                    "additionalCashGLaccount"
                ]
            }
        },
        {
            "TrustAccountDetail": {
                "columns": [
                    {
                        "name": "GL Account",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Month",
                        "display": false
                    },
                    {
                        "name": "Quarter",
                        "display": false
                    },
                    {
                        "name": "Year",
                        "display": false
                    },
                    {
                        "name": "Bank Account",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Invoice Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Account Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Remarks",
                        "display": false
                    },
                    {
                        "name": "Deposit Date",
                        "display": false
                    },
                    {
                        "name": "Cash Account",
                        "display": false
                    },
                    {
                        "name": "Owner(s)",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "cashAccount",
                    "dateRange",
                    "showReversedTransactions"
                ]
            }
        },
        {
            "emailDeliveryErrors": {
                "columns": [
                    {
                        "name": "First Name",
                        "display": false
                    },
                    {
                        "name": "Last Name",
                        "display": false
                    }
                ],
                "customization": [
                    "category",
                    "properties",
                    "sentAtRange"
                ]
            }
        },
        {
            "lateFeePolicyComparison": {
                "columns": [
                    {
                        "name": "Max Daily Lates Fee Amount",
                        "display": false
                    },
                    {
                        "name": "End Date",
                        "display": false
                    },
                    {
                        "name": "Property ID",
                        "display": false
                    },
                    {
                        "name": "Tenant ID",
                        "display": false
                    },
                    {
                        "name": "Calculate Fee From",
                        "display": false
                    },
                    {
                        "name": "Custom Policy",
                        "display": false
                    }
                ],
                "customization": [
                    "tenants",
                    "tenantStatus",
                    "tenantType",
                    "properties",
                    "lateFeepolicyEffectiveAsOf"
                ]
            }
        },
        {
            "guestCardInquires": {
                "columns": [
                    {
                        "name": "Latest Interest Date",
                        "display": false
                    },
                    {
                        "name": "Latest Interest Source",
                        "display": false
                    },
                    {
                        "name": "Source",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Notes",
                        "display": false
                    },
                    {
                        "name": "Applicant(s)",
                        "display": false
                    },
                    {
                        "name": "Inquiry Type",
                        "display": false
                    },
                    {
                        "name": "Total Interest Received",
                        "display": false
                    },
                    {
                        "name": "Interest Received in Range",
                        "display": false
                    },
                    {
                        "name": "Showings",
                        "display": false
                    },
                    {
                        "name": "Interest to Showing Scheduled (Hrs)",
                        "display": false
                    },
                    {
                        "name": "Showing to Application Received (Hrs)",
                        "display": false
                    },
                    {
                        "name": "Application Received to Decision (Hrs)",
                        "display": false
                    },
                    {
                        "name": "Interest to Lease Signed (Hrs)",
                        "display": false
                    },
                    {
                        "name": "Inactive Reason",
                        "display": false
                    },
                    {
                        "name": "CRM",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "source",
                    "status",
                    "leadType",
                    "assignedUser",
                    "filterDateRangeBy",
                    "dateRange"
                ]
            }
        },
        {
            "guestCardInterest": {
                "columns": [
                    {
                        "name": "Source",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Notes",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "source",
                    "status",
                    "leadType",
                    "assignedUser",
                    "interestReceivedRange"
                ]
            }
        },
        {
            "InactiveGuestCardInterest": {
                "columns": [
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Lead Type",
                        "display": false
                    },
                    {
                        "name": "Source",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "source",
                    "leadType",
                    "interestReceivedRange"
                ]
            }
        },
        {
            "leaseExpirationDetailByMonth": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Lease Expires Month",
                        "display": false
                    },
                    {
                        "name": "Rent status",
                        "display": false
                    },
                    {
                        "name": "Legal Rent",
                        "display": false
                    },
                    {
                        "name": "Owner(s) - Phone Numbers",
                        "display": false
                    },
                    {
                        "name": "Owner(s)",
                        "display": false
                    },
                    {
                        "name": "Last Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Eligible for Rent Date",
                        "display": false
                    },
                    {
                        "name": "Lease Sign Date",
                        "display": false
                    },
                    {
                        "name": "Last Lease Renewal",
                        "display": false
                    },
                    {
                        "name": "Status",
                        "display": false
                    },
                    {
                        "name": "Renewal Start Date",
                        "display": false
                    },
                    {
                        "name": "Notice Given Date",
                        "display": false
                    },
                    {
                        "name": "Move out",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    },
                    {
                        "name": "Affortable Program",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tags",
                    "filterDateRangeBy",
                    "dateRange",
                    "excludeTenantsWithMoveOutDateSelected",
                    "excludeMonthToMonthLeases"
                ]
            }
        },
        {
            "leaseExpirationSummaryByMonth": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "leaseEndsFrom"
                ]
            }
        },
        {
            "leaseHistory": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Occupancy Name",
                        "display": false
                    },
                    {
                        "name": "Most Recent Rent",
                        "display": false
                    },
                    {
                        "name": "Market Rent",
                        "display": false
                    },
                    {
                        "name": "Sent Date",
                        "display": false
                    },
                    {
                        "name": "Signed On Date",
                        "display": false
                    },
                    {
                        "name": "Countersigned By",
                        "display": false
                    },
                    {
                        "name": "Renewal",
                        "display": false
                    },
                    {
                        "name": "Secuirty Deposit",
                        "display": false
                    },
                    {
                        "name": "Move In",
                        "display": false
                    },
                    {
                        "name": "Move out",
                        "display": false
                    },
                    {
                        "name": "Time from Spending to Signing",
                        "display": false
                    },
                    {
                        "name": "Time from Spending to Countersigning",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Updated At",
                        "display": false
                    },
                    {
                        "name": "Lease UUID",
                        "display": false
                    },
                    {
                        "name": "Lease Document UUID",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tenants",
                    "filterLeasesBy",
                    "dateRange",
                    "statuses"
                ]
            }
        },
        {
            "leasingAgentPerformance": {
                "columns": [],
                "customization": [
                    "guestCardsReceivedRange",
                    "assignedUser"
                ]
            }
        },
        {
            "leasingFunnelPerformance": {
                "columns": [
                    {
                        "name": "Inquires -> Completed Showing",
                        "display": false
                    },
                    {
                        "name": "Completed Showing -> Apps",
                        "display": false
                    },
                    {
                        "name": "Approved App Rate",
                        "display": false
                    },
                    {
                        "name": "Apps -> Signed Leases",
                        "display": false
                    },
                    {
                        "name": "Inquires -> Leases",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "interestReceivedRange",
                    "assignedUser"
                ]
            }
        },
        {
            "leasingSummary": {
                "columns": [
                    {
                        "name": "# of Model Units",
                        "display": false
                    },
                    {
                        "name": "Units Advertised",
                        "display": false
                    },
                    {
                        "name": "# of Active Campaigns",
                        "display": false
                    },
                    {
                        "name": "# of Ended Campaigns",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "dateRange"
                ]
            }
        },
        {
            "occupancySummary": {
                "columns": [
                    {
                        "name": "Average Rent",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "date"
                ]
            }
        },
        {
            "ownerLeasing": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "receivedRange",
                    "includeUnitsWhichAreNotRentReady",
                    "includeUnitsWhichAreHiddenFromTheVacanciesDashBoard"
                ]
            }
        },
        {
            "premiumListingBillingDetail": {
                "columns": [
                    {
                        "name": "Guest Card ID",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "month"
                ]
            }
        },
        {
            "prospectSourceTracking": {
                "columns": [],
                "customization": [
                    "properties",
                    "units",
                    "receivedRange"
                ]
            }
        },
        {
            "renewalSummary": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Unit ID",
                        "display": false
                    },
                    {
                        "name": "Respond By Date",
                        "display": false
                    },
                    {
                        "name": "Renewal Sent Date",
                        "display": false
                    },
                    {
                        "name": "Countersigned Date",
                        "display": false
                    },
                    {
                        "name": "Automatic Renewal Date",
                        "display": false
                    },
                    {
                        "name": "Lease Start Nonth",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    },
                    {
                        "name": "Lease UUID",
                        "display": false
                    },
                    {
                        "name": "Lease Document UUID",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "leaseRange",
                    "statuses",
                    "includeTenantTransfer"
                ]
            }
        },
        {
            "rentalApplications": {
                "columns": [
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Reason For Status",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Unit Name",
                        "display": false
                    },
                    {
                        "name": "Campaign Title",
                        "display": false
                    },
                    {
                        "name": "Applying For",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Applicant Reported Source",
                        "display": false
                    },
                    {
                        "name": "Screen On Date",
                        "display": false
                    },
                    {
                        "name": "Approved At",
                        "display": false
                    },
                    {
                        "name": "Denied At",
                        "display": false
                    },
                    {
                        "name": "Canceled At",
                        "display": false
                    },
                    {
                        "name": "Decision Made Date",
                        "display": false
                    },
                    {
                        "name": "Time to Conversion (Days)",
                        "display": false
                    },
                    {
                        "name": "Application Fee Paid",
                        "display": false
                    },
                    {
                        "name": "Rental Application Group ID",
                        "display": false
                    },
                    {
                        "name": "Move In Date",
                        "display": false
                    },
                    {
                        "name": "Lease Start Date",
                        "display": false
                    },
                    {
                        "name": "Lease End Date",
                        "display": false
                    },
                    {
                        "name": "Application Status",
                        "display": false
                    },
                    {
                        "name": "Primary Email",
                        "display": false
                    },
                    {
                        "name": "Primary Phone Number",
                        "display": false
                    },
                    {
                        "name": "Current Address 1",
                        "display": false
                    },
                    {
                        "name": "Current Address 2",
                        "display": false
                    },
                    {
                        "name": "Current City",
                        "display": false
                    },
                    {
                        "name": "Current State",
                        "display": false
                    },
                    {
                        "name": "Current Zip",
                        "display": false
                    },
                    {
                        "name": "Current Monthly Rent",
                        "display": false
                    },
                    {
                        "name": "Resided From",
                        "display": false
                    },
                    {
                        "name": "Resided To",
                        "display": false
                    },
                    {
                        "name": "Landlord Name",
                        "display": false
                    },
                    {
                        "name": "Landlord Phone Number",
                        "display": false
                    },
                    {
                        "name": "Landlord Email",
                        "display": false
                    },
                    {
                        "name": "Previous 1 Address 1",
                        "display": false
                    },
                    {
                        "name": "Previous 1 Address 2",
                        "display": false
                    },
                    {
                        "name": "Previous City 1",
                        "display": false
                    },
                    {
                        "name": "Previous State 1",
                        "display": false
                    },
                    {
                        "name": "Previous Zip 1",
                        "display": false
                    },
                    {
                        "name": "Previous Monthly Rent 1",
                        "display": false
                    },
                    {
                        "name": "Previous Resided From 1",
                        "display": false
                    },
                    {
                        "name": "Previous Resided To 1",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 1 Name",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 1 Phone",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 1 Email",
                        "display": false
                    },
                    {
                        "name": "Previous 2 Address 1",
                        "display": false
                    },
                    {
                        "name": "Previous 2 Address 2",
                        "display": false
                    },
                    {
                        "name": "Previous City 2",
                        "display": false
                    },
                    {
                        "name": "Previous State 2",
                        "display": false
                    },
                    {
                        "name": "Previous Zip 2",
                        "display": false
                    },
                    {
                        "name": "Previous Monthly Rent 2",
                        "display": false
                    },
                    {
                        "name": "Previous Resided From 2",
                        "display": false
                    },
                    {
                        "name": "Previous Resided To 2",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 2 Name",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 2 Phone",
                        "display": false
                    },
                    {
                        "name": "Previous Landlord 2 Email",
                        "display": false
                    },
                    {
                        "name": "Employer Name",
                        "display": false
                    },
                    {
                        "name": "Employer Phone Number",
                        "display": false
                    },
                    {
                        "name": "Monthly Salary",
                        "display": false
                    },
                    {
                        "name": "Position Held",
                        "display": false
                    },
                    {
                        "name": "Years Worked",
                        "display": false
                    },
                    {
                        "name": "Total Additional Income",
                        "display": false
                    },
                    {
                        "name": "Pets Name",
                        "display": false
                    },
                    {
                        "name": "Pets Kinds",
                        "display": false
                    },
                    {
                        "name": "Pets Weights",
                        "display": false
                    },
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "status",
                    "filterDateRangeBy",
                    "dateRange"
                ]
            }
        },
        {
            "showings": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Lead Type",
                        "display": false
                    },
                    {
                        "name": "Source",
                        "display": false
                    },
                    {
                        "name": "Inquiry Type",
                        "display": false
                    },
                    {
                        "name": "Rental Application Received",
                        "display": false
                    },
                    {
                        "name": "Rental Application Status",
                        "display": false
                    },
                    {
                        "name": "Showing To Application Time (Days)",
                        "display": false
                    }
                ],
                "customization": [
                    "showingTimeRange",
                    "properties",
                    "statuses",
                    "assignedUser"
                ]
            }
        },
        {
            "unitVacnacyDetail": {
                "columns": [
                    {
                        "name": "Advertised Rent",
                        "display": false
                    },
                    {
                        "name": "Posted To Website",
                        "display": false
                    },
                    {
                        "name": "Posted to Internet",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Amenities",
                        "display": false
                    },
                    {
                        "name": "Lockbox Enabled",
                        "display": false
                    },
                    {
                        "name": "Afforable Program",
                        "display": false
                    },
                    {
                        "name": "Address",
                        "display": false
                    },
                    {
                        "name": "Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Street Address 2",
                        "display": false
                    },
                    {
                        "name": "City",
                        "display": false
                    },
                    {
                        "name": "State",
                        "display": false
                    },
                    {
                        "name": "Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Amenities Price",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    },
                    {
                        "name": "Ready For Showing On",
                        "display": false
                    },
                    {
                        "name": "Unit Turn Target Date",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tags"
                ]
            }
        },
        {
            "projectBudgetDetail": {
                "columns": [
                    {}
                ],
                "customization": [
                    "project"
                ]
            }
        },
        {
            "projectDirectory": {
                "columns": [
                    {
                        "name": "Notes",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "status",
                    "projects",
                    "startDateRange",
                    "endDateRange"
                ]
            }
        },
        {
            "purchaseOrder": {
                "columns": [
                    {
                        "name": "Item Subtotal",
                        "display": false
                    },
                    {
                        "name": "Tax Estiamte",
                        "display": false
                    },
                    {
                        "name": "Shipping Estimate",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "GL Account Name",
                        "display": false
                    },
                    {
                        "name": "GL Account Number",
                        "display": false
                    },
                    {
                        "name": "Shipped To",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Updated At",
                        "display": false
                    },
                    {
                        "name": "Canceled",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "glAccounts",
                    "vendor",
                    "approvalStatus",
                    "received",
                    "completed",
                    "dateRange"
                ]
            }
        },
        {
            "unitTurnDetail": {
                "columns": [
                    {
                        "name": "Move In Date",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "moveOutDateRange",
                    "unitTurnStatus"
                ]
            }
        },
        {
            "vendorDirectory": {
                "columns": [
                    {
                        "name": "Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Street Address 2",
                        "display": false
                    },
                    {
                        "name": "City",
                        "display": false
                    },
                    {
                        "name": "State",
                        "display": false
                    },
                    {
                        "name": "Zip",
                        "display": false
                    },
                    {
                        "name": "Vendor Trades",
                        "display": false
                    },
                    {
                        "name": "Marked as do not use",
                        "display": false
                    },
                    {
                        "name": "Terms",
                        "display": false
                    },
                    {
                        "name": "First Name",
                        "display": false
                    },
                    {
                        "name": "Last Name",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Vendor Type",
                        "display": false
                    }
                ],
                "customization": [
                    "workersCompExpiresBefore",
                    "LiabilityInsuranceBefore",
                    "EPAcertificationExpiresBefore",
                    "autoInsuranceExpiresBefore",
                    "stateLicenseExpiresBefore",
                    "contractExpiresBefore",
                    "tags",
                    "vendors",
                    "paymentType",
                    "createdBy",
                    "vendorType"
                ]
            }
        },
        {
            "vendorLedger": {
                "columns": [
                    {
                        "name": "Posting Date",
                        "display": false
                    },
                    {
                        "name": "GL Account Name",
                        "display": false
                    },
                    {
                        "name": "GL Account Number",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Previous City",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Payee Name",
                        "display": false
                    },
                    {
                        "name": "Work Order #",
                        "display": false
                    },
                    {
                        "name": "Cash Account",
                        "display": false
                    },
                    {
                        "name": "Quantity",
                        "display": false
                    },
                    {
                        "name": "Rate",
                        "display": false
                    },
                    {
                        "name": "Work Order Assignee",
                        "display": false
                    },
                    {
                        "name": "Approval Status",
                        "display": false
                    },
                    {
                        "name": "Approved By",
                        "display": false
                    },
                    {
                        "name": "Last Approver",
                        "display": false
                    },
                    {
                        "name": "Next Approver",
                        "display": false
                    },
                    {
                        "name": "Days Pending Approval",
                        "display": false
                    },
                    {
                        "name": "Board Approval Status",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Bank Account",
                        "display": false
                    },
                    {
                        "name": "Vendor Account Number",
                        "display": false
                    },
                    {
                        "name": "Service Form",
                        "display": false
                    },
                    {
                        "name": "Service To",
                        "display": false
                    },
                    {
                        "name": "Order Payment Type",
                        "display": false
                    },
                    {
                        "name": "Purchase Order #",
                        "display": false
                    },
                    {
                        "name": "Cost Center Name",
                        "display": false
                    },
                    {
                        "name": "Cost Center Number",
                        "display": false
                    }
                ],
                "customization": [
                    "payee",
                    "properties",
                    "billDateRange",
                    "showReversedTransactions"
                ]
            }
        },
        {
            "workOrder": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Service Request Number",
                        "display": false
                    },
                    {
                        "name": "Service Request Description",
                        "display": false
                    },
                    {
                        "name": "Primary Resident Email",
                        "display": false
                    },
                    {
                        "name": "Primary Resident Phone Number",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Last Billed On",
                        "display": false
                    },
                    {
                        "name": "Canceled On",
                        "display": false
                    },
                    {
                        "name": "Corporate Charge Amount",
                        "display": false
                    },
                    {
                        "name": "Discount Amount",
                        "display": false
                    },
                    {
                        "name": "Markup Amount",
                        "display": false
                    },
                    {
                        "name": "Tenant Total Charge Amount",
                        "display": false
                    },
                    {
                        "name": "Vendor Charge Amount",
                        "display": false
                    },
                    {
                        "name": "Inspection Date",
                        "display": false
                    },
                    {
                        "name": "Resident Requested",
                        "display": false
                    },
                    {
                        "name": "Requesting Resident",
                        "display": false
                    },
                    {
                        "name": "Maintenance Limit",
                        "display": false
                    },
                    {
                        "name": "Status Notes",
                        "display": false
                    },
                    {
                        "name": "Next Followup Date",
                        "display": false
                    },
                    {
                        "name": "Vendor Trade",
                        "display": false
                    },
                    {
                        "name": "Unit Turn Category",
                        "display": false
                    },
                    {
                        "name": "Vendor Portal Invoces",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenants",
                    "vendor",
                    "assignedUser",
                    "createdBy",
                    "priority",
                    "fromInspection",
                    "currentEstimateApprovalStatus",
                    "currentWorkOrderStatus",
                    "workOrderType",
                    "unitTurnCategory",
                    "statusDate",
                    "statusDateRange"
                ]
            }
        },
        {
            "workOrderBillableDetail": {
                "columns": [
                    {
                        "name": "Service Request Number",
                        "display": false
                    },
                    {
                        "name": "Labor Date",
                        "display": false
                    },
                    {
                        "name": "Work Completed On",
                        "display": false
                    },
                    {
                        "name": "Maintenance Tech",
                        "display": false
                    },
                    {
                        "name": "Marked After Hours",
                        "display": false
                    },
                    {
                        "name": "Billable Item Adjustment",
                        "display": false
                    },
                    {
                        "name": "Work Order Status",
                        "display": false
                    },
                    {
                        "name": "Job Description",
                        "display": false
                    },
                    {
                        "name": "Work Order Issue",
                        "display": false
                    },
                    {
                        "name": "Work Order Type",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "vendor",
                    "assignedUser",
                    "itemCreatedDateRange",
                    "statusDate",
                    "statusDateRange",
                    "currentWorkOrderStatus",
                    "workOrderType"
                ]
            }
        },
        {
            "workOrderLaborSummary": {
                "columns": [
                    {
                        "name": "Marked After Hours",
                        "display": false
                    },
                    {
                        "name": "Unit Turn ID",
                        "display": false
                    },
                    {
                        "name": "Timer Start",
                        "display": false
                    },
                    {
                        "name": "Timer Stop",
                        "display": false
                    },
                    {
                        "name": "GL Account",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "maintenanceTech",
                    "currentWorkOrderStatus",
                    "dateRange"
                ]
            }
        },
        {
            "ownerDirectory": {
                "columns": [
                    {
                        "name": "Last Packet Sent",
                        "display": false
                    },
                    {
                        "name": "Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Street Address 2",
                        "display": false
                    },
                    {
                        "name": "City",
                        "display": false
                    },
                    {
                        "name": "State",
                        "display": false
                    },
                    {
                        "name": "Zip",
                        "display": false
                    },
                    {
                        "name": "Country",
                        "display": false
                    },
                    {
                        "name": "Notes For The Owner",
                        "display": false
                    },
                    {
                        "name": "First Name",
                        "display": false
                    },
                    {
                        "name": "Last Name",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tags",
                    "owners",
                    "createBy"
                ]
            }
        },
        {
            "ownerWithholdings": {
                "columns": [
                    {
                        "name": "Owner Name",
                        "display": false
                    },
                    {
                        "name": "Recipient Street Address",
                        "display": false
                    },
                    {
                        "name": "Recipient City",
                        "display": false
                    },
                    {
                        "name": "Recipient ZIP",
                        "display": false
                    },
                    {
                        "name": "Recipient Address",
                        "display": false
                    },
                    {
                        "name": "Federal Tax ID",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "owner",
                    "dateRange",
                    "showOutOfStateOwnersOnly",
                    "withHoldPercent"
                ]
            }
        },
        {
            "activitiesSummary": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Completed By",
                        "display": false
                    },
                    {
                        "name": "Last Edited By",
                        "display": false
                    },
                    {
                        "name": "Created On",
                        "display": false
                    },
                    {
                        "name": "Completed On",
                        "display": false
                    },
                    {
                        "name": "Last Edited On",
                        "display": false
                    },
                    {
                        "name": "Status",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenantsHomeownersOwnersAndApplicants",
                    "activityStatus",
                    "AssignedUser",
                    "DueDateRange"
                ]
            }
        },
        {
            "additionalFees": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Account Name",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties"
                ]
            }
        },
        {
            "amenitiesByProperty": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties"
                ]
            }
        },
        {
            "annualBudgetComparative": {
                "columns": [
                    {
                        "name": "Account Name",
                        "display": false
                    },
                    {
                        "name": "Note",
                        "display": false
                    },
                    {
                        "name": "Variance Note",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "asOf",
                    "additionalAccountTypes",
                    "accountingBasis",
                    "levelOfDetail"
                ]
            }
        },
        {
            "annualBudgetForeast": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Note",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "consolidate",
                    "accountingBasis"
                ]
            }
        },
        {
            "budgetComparative": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "comparisonPeriodRange",
                    "additionalAccountTypes",
                    "accountingBasis",
                    "levelOfDetail"
                ]
            }
        },
        {
            "budgetPropertyComparison": {
                "columns": [
                    {
                        "name": "Total Period Actual",
                        "display": false
                    },
                    {
                        "name": "Total Period Budget",
                        "display": false
                    },
                    {
                        "name": "Total Period $ Variance",
                        "display": false
                    },
                    {
                        "name": "Total Period % Variance",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "additionalAccountTypes",
                    "accountingBasis",
                    "levelOfDetail"
                ]
            }
        },
        {
            "budgetDetail": {
                "columns": [
                    {
                        "name": "Account Number",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Note",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "periodRange",
                    "consolidate",
                    "includeZeroBalanceGLAccount"
                ]
            }
        },
        {
            "fixedAssets": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Cost($)",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "includeProperyLevelFixedAssets",
                    "AssetTypes",
                    "Status"
                ]
            }
        },
        {
            "grossPotentialRent": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Tags",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Market Rent",
                        "display": false
                    },
                    {
                        "name": "Rent Charges",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tags",
                    "monthOf",
                    "accountingBasis"
                ]
            }
        },
        {
            "InventoryStatus": {
                "columns": [],
                "customization": [
                    "locations",
                    "category",
                    "onlyShowItemsAtOrBelowReorderThreshold"
                ]
            }
        },
        {
            "inventoryUsage": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "currentWorkOrderStatus",
                    "dateRange"
                ]
            }
        },
        {
            "keysDetail": {
                "columns": [
                    {
                        "name": "Key Quantity",
                        "display": false
                    },
                    {
                        "name": "Checked Out Date",
                        "display": false
                    },
                    {
                        "name": "Move In Date",
                        "display": false
                    },
                    {
                        "name": "Move Out Date",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenantsOwnersAndVendors",
                    "assigneeType",
                    "includeNotCheckedOut"
                ]
            }
        },
        {
            "propertyDirectory": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Property Country",
                        "display": false
                    },
                    {
                        "name": "Tax Authority",
                        "display": false
                    },
                    {
                        "name": "Vendor 1099 Payer",
                        "display": false
                    },
                    {
                        "name": "Portfolio",
                        "display": false
                    },
                    {
                        "name": "Premium Status",
                        "display": false
                    },
                    {
                        "name": "Premium Monhly Cap",
                        "display": false
                    },
                    {
                        "name": "Premium Activation Date",
                        "display": false
                    },
                    {
                        "name": "Maintenance Limit",
                        "display": false
                    },
                    {
                        "name": "Maintenance Notes",
                        "display": false
                    },
                    {
                        "name": "Site Manager Name",
                        "display": false
                    },
                    {
                        "name": "Site Manager Phone Number",
                        "display": false
                    },
                    {
                        "name": "Management Fee Type",
                        "display": false
                    },
                    {
                        "name": "Lease Fee Percent",
                        "display": false
                    },
                    {
                        "name": "Lease Fee Percent",
                        "display": false
                    },
                    {
                        "name": "Renewal Fee Type",
                        "display": false
                    },
                    {
                        "name": "Renewal Flat Fee",
                        "display": false
                    },
                    {
                        "name": "Renewal Fee Percent",
                        "display": false
                    },
                    {
                        "name": "Future Management Fee Start Date",
                        "display": false
                    },
                    {
                        "name": "Future Management Fee Percent",
                        "display": false
                    },
                    {
                        "name": "Future Management Flat Fee",
                        "display": false
                    },
                    {
                        "name": "Future Minimum Fee",
                        "display": false
                    },
                    {
                        "name": "Future Maximum Fee",
                        "display": false
                    },
                    {
                        "name": "Future Management Fee Type",
                        "display": false
                    },
                    {
                        "name": "Future Waive Fees When Vacant",
                        "display": false
                    },
                    {
                        "name": "Owner Payment Type",
                        "display": false
                    },
                    {
                        "name": "Property Type",
                        "display": false
                    },
                    {
                        "name": "Property Created On",
                        "display": false
                    },
                    {
                        "name": "Property Created On",
                        "display": false
                    },
                    {
                        "name": "Property Created By",
                        "display": false
                    },
                    {
                        "name": "Owner(s)",
                        "display": false
                    },
                    {
                        "name": "Accounting Basis",
                        "display": false
                    },
                    {
                        "name": "Late Fee Type",
                        "display": false
                    },
                    {
                        "name": "Late Fee Base Amount",
                        "display": false
                    },
                    {
                        "name": "Late Fee Daily Amount",
                        "display": false
                    },
                    {
                        "name": "Grace Period",
                        "display": false
                    },
                    {
                        "name": "Grace Period Fixed Day",
                        "display": false
                    },
                    {
                        "name": "Grace Balance",
                        "display": false
                    },
                    {
                        "name": "Max Daily Lates Fee Amount",
                        "display": false
                    },
                    {
                        "name": "Year Build",
                        "display": false
                    },
                    {
                        "name": "Contract Expiration",
                        "display": false
                    },
                    {
                        "name": "Management Start Date",
                        "display": false
                    },
                    {
                        "name": "Management End Date",
                        "display": false
                    },
                    {
                        "name": "Management End Reason",
                        "display": false
                    },
                    {
                        "name": "Renter's Tax Region Code",
                        "display": false
                    },
                    {
                        "name": "Class",
                        "display": false
                    },
                    {
                        "name": "Online Maintenance Request Instrctions",
                        "display": false
                    },
                    {
                        "name": "Amenitites",
                        "display": false
                    },
                    {
                        "name": "Listing Type",
                        "display": false
                    }
                ],
                "customization": [
                    "properties"
                ]
            }
        },
        {
            "propertyGroupDirectory": {
                "columns": [
                    {
                        "name": "Property"
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Property Country",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1 (Alphabetical Sorting)",
                        "display": false
                    },
                    {
                        "name": "Property Group Name",
                        "display": false
                    },
                    {
                        "name": "Portfolio",
                        "display": false
                    }
                ],
                "customization": [
                    "properties"
                ]
            }
        },
        {
            "rentRoll": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property ID",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Property Type",
                        "display": false
                    },
                    {
                        "name": "Occupancy ID",
                        "display": false
                    },
                    {
                        "name": "Unit ID",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Status by SF",
                        "display": false
                    },
                    {
                        "name": "Advertised Rent",
                        "display": false
                    },
                    {
                        "name": "Monthly Market Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Annual Market Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Annual Rent",
                        "display": false
                    },
                    {
                        "name": "Monthly Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Annual Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Deposit Authorized",
                        "display": false
                    },
                    {
                        "name": "Amenities",
                        "display": false
                    },
                    {
                        "name": "Additional Tenants",
                        "display": false
                    },
                    {
                        "name": "Monthly Charges",
                        "display": false
                    },
                    {
                        "name": "Rent Ready",
                        "display": false
                    },
                    {
                        "name": "Rent Status",
                        "display": false
                    },
                    {
                        "name": "Legal Rent",
                        "display": false
                    },
                    {
                        "name": "Preferential Rent",
                        "display": false
                    },
                    {
                        "name": "Last Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Amount",
                        "display": false
                    },
                    {
                        "name": "Eligible for Rent Increase",
                        "display": false
                    },
                    {
                        "name": "Application Fee",
                        "display": false
                    },
                    {
                        "name": "Amenities Price",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    },
                    {
                        "name": "Property Group ID(s)",
                        "display": false
                    },
                    {
                        "name": "Portfolio ID",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    },
                    {
                        "name": "Lease Expires Month",
                        "display": false
                    },
                    {
                        "name": "Tenant ID",
                        "display": false
                    },
                    {
                        "name": "Additional Tenant ID(s)",
                        "display": false
                    },
                    {
                        "name": "Previous Occupancy Rent",
                        "display": false
                    },
                    {
                        "name": "Previous Rent",
                        "display": false
                    },
                    {
                        "name": "Last Move Out",
                        "display": false
                    },
                    {
                        "name": "Tenant Agent",
                        "display": false
                    },
                    {
                        "name": "Occupancy Import UID",
                        "display": false
                    },
                    {
                        "name": "Affordable Program",
                        "display": false
                    },
                    {
                        "name": "Building ID",
                        "display": false
                    },
                    {
                        "name": "Room Name",
                        "display": false
                    },
                    {
                        "name": "Bed Name",
                        "display": false
                    },
                    {
                        "name": "Square Feet Helper",
                        "display": false
                    },
                    {
                        "name": "Market Rent Helper",
                        "display": false
                    },
                    {
                        "name": "Advertised Rent Helper",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tags",
                    "asOf",
                    "includeNonRevenueUnits"
                ]
            }
        },
        {
            "rentRollCommerical": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property ID",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Name",
                        "display": false
                    },
                    {
                        "name": "Unit ID",
                        "display": false
                    },
                    {
                        "name": "Occupant ID",
                        "display": false
                    },
                    {
                        "name": "Group Name",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    },
                    {
                        "name": "Property Group ID(s)",
                        "display": false
                    },
                    {
                        "name": "Portfolio ID",
                        "display": false
                    },
                    {
                        "name": "Lease Option Dates",
                        "display": false
                    },
                    {
                        "name": "Lease Option Terms",
                        "display": false
                    },
                    {
                        "name": "Lease Option Descriptions",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "asOf",
                    "glAccounts",
                    "includeUnitsThathaveNoRecurringCharges"
                ]
            }
        },
        {
            "rentRollItemized": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Property Type",
                        "display": false
                    },
                    {
                        "name": "Tags",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Tenant",
                        "display": false
                    },
                    {
                        "name": "Market Rent",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    },
                    {
                        "name": "Advertised Rent",
                        "display": false
                    },
                    {
                        "name": "Monthly Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Annual Rent / SF",
                        "display": false
                    },
                    {
                        "name": "Deposit",
                        "display": false
                    },
                    {
                        "name": "Lease From",
                        "display": false
                    },
                    {
                        "name": "Lease To",
                        "display": false
                    },
                    {
                        "name": "Last Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Amount",
                        "display": false
                    },
                    {
                        "name": "Eligible for Rent Increase",
                        "display": false
                    },
                    {
                        "name": "Move-in",
                        "display": false
                    },
                    {
                        "name": "Move-out",
                        "display": false
                    },
                    {
                        "name": "Past Due",
                        "display": false
                    },
                    {
                        "name": "NSF Count",
                        "display": false
                    },
                    {
                        "name": "Late Count",
                        "display": false
                    },
                    {
                        "name": "Amenities",
                        "display": false
                    },
                    {
                        "name": "Additional Tenants",
                        "display": false
                    },
                    {
                        "name": "Monthly Charges",
                        "display": false
                    },
                    {
                        "name": "Rent Ready",
                        "display": false
                    },
                    {
                        "name": "Rent Status",
                        "display": false
                    },
                    {
                        "name": "Legal Rent",
                        "display": false
                    },
                    {
                        "name": "Preferential Rent",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tags",
                    "glAccounts",
                    "asOf"
                ]
            }
        },
        {
            "rentableItems": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Start Date",
                        "display": false
                    },
                    {
                        "name": "End Date",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "License Plates",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "glAccounts",
                    "availability"
                ]
            }
        },
        {
            "unitDirectory": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Marketing Title",
                        "display": false
                    },
                    {
                        "name": "Marketing Description",
                        "display": false
                    },
                    {
                        "name": "Advertised Rent",
                        "display": false
                    },
                    {
                        "name": "Posted To Website",
                        "display": false
                    },
                    {
                        "name": "Posted To Internet",
                        "display": false
                    },
                    {
                        "name": "YouTube URL",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Created On",
                        "display": false
                    },
                    {
                        "name": "Rent Status",
                        "display": false
                    },
                    {
                        "name": "Legal Rent",
                        "display": false
                    },
                    {
                        "name": "Application Fee",
                        "display": false
                    },
                    {
                        "name": "Rent Ready",
                        "display": false
                    },
                    {
                        "name": "Computed Market Rent",
                        "display": false
                    },
                    {
                        "name": "Ready For Showing On",
                        "display": false
                    },
                    {
                        "name": "Rentable UID",
                        "display": false
                    },
                    {
                        "name": "Amenities",
                        "display": false
                    },
                    {
                        "name": "Appliances",
                        "display": false
                    },
                    {
                        "name": "Utilities",
                        "display": false
                    },
                    {
                        "name": "Billed As",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "tags"
                ]
            }
        },
        {
            "unitInspection": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Revenue",
                        "display": false
                    },
                    {
                        "name": "Unit Tags",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "units",
                    "lastInspectionDateOlderThan",
                    "includeUnitsWithBlankInspectionDate"
                ]
            }
        },
        {
            "owner1099Detail": {
                "columns": [
                    {
                        "name": "Recipient Street Address",
                        "display": false
                    },
                    {
                        "name": "Recipient City",
                        "display": false
                    },
                    {
                        "name": "Recipient State",
                        "display": false
                    },
                    {
                        "name": "Recipient ZIP",
                        "display": false
                    },
                    {
                        "name": "Recipient Country",
                        "display": false
                    },
                    {
                        "name": "Recipient Address",
                        "display": false
                    },
                    {
                        "name": "Owner Email",
                        "display": false
                    },
                    {
                        "name": "Send 1099?",
                        "display": false
                    },
                    {
                        "name": "Owner Electronic Consent",
                        "display": false
                    },
                    {
                        "name": "Owner 1099 Preference",
                        "display": false
                    },
                    {
                        "name": "Federal Tax ID",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "owners",
                    "taxyear",
                    "showOnlyOwnersThathaveBeenDesignatedToReceiveA1099",
                    "amount"
                ]
            }
        },
        {
            "owner1099Summary": {
                "columns": [
                    {
                        "name": "Recipient Address",
                        "display": false
                    },
                    {
                        "name": "Owner Electronic Consent",
                        "display": false
                    },
                    {
                        "name": "Owner 1099 Preference",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "owners",
                    "taxyear",
                    "showOnlyOwnersThathaveBeenDesignatedToReceiveA1099",
                    "amount"
                ]
            }
        },
        {
            "vendor1099Detail": {
                "columns": [
                    {
                        "name": "Bank Account Number",
                        "display": false
                    },
                    {
                        "name": "Cleared",
                        "display": false
                    },
                    {
                        "name": "Check Memo",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "1099 Payer Name",
                        "display": false
                    }
                ],
                "customization": [
                    "vendor",
                    "taxyear"
                ]
            }
        },
        {
            "vendor1099Summary": {
                "columns": [
                    {
                        "name": "Recipient Address",
                        "display": false
                    },
                    {
                        "name": "Payer Street Address",
                        "display": false
                    },
                    {
                        "name": "Payer City",
                        "display": false
                    },
                    {
                        "name": "Payer State",
                        "display": false
                    },
                    {
                        "name": "Payer ZIP",
                        "display": false
                    },
                    {
                        "name": "Payer Country",
                        "display": false
                    },
                    {
                        "name": "Payer Address",
                        "display": false
                    }
                ],
                "customization": [
                    "vendors",
                    "amount",
                    "taxyear"
                ]
            }
        },
        {
            "debtCollectionsStatus": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Amount Forgiven",
                        "display": false
                    },
                    {
                        "name": "Date Cancelled",
                        "display": false
                    }
                ],
                "customization": [
                    "tenants",
                    "properties"
                ]
            }
        },
        {
            "delinquency": {
                "columns": [
                    {
                        "name": "Primary Tenant Email",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Not Yet Due",
                        "display": false
                    },
                    {
                        "name": "30-60",
                        "display": false
                    },
                    {
                        "name": "60+",
                        "display": false
                    },
                    {
                        "name": "60-90",
                        "display": false
                    },
                    {
                        "name": "90+",
                        "display": false
                    },
                    {
                        "name": "Prepayment Amount",
                        "display": false
                    },
                    {
                        "name": "NSF Count",
                        "display": false
                    },
                    {
                        "name": "Certified Funds Only",
                        "display": false
                    },
                    {
                        "name": "Rent",
                        "display": false
                    },
                    {
                        "name": "Delinquent Rent",
                        "display": false
                    },
                    {
                        "name": "Delinquency Notes",
                        "display": false
                    },
                    {
                        "name": "Monthly Charges",
                        "display": false
                    },
                    {
                        "name": "In Collections",
                        "display": false
                    },
                    {
                        "name": "Collections Agency",
                        "display": false
                    },
                    {
                        "name": "Payment Plan",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "delinquencyNoteRange",
                    "tenantStatus",
                    "tags",
                    "amountOwedInAccount",
                    "balance",
                    "includeFutureDatedCharges"
                ]
            }
        },
        {
            "delinquencyAsOf": {
                "columns": [
                    {
                        "name": "Primary Tenant Email",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "30-60",
                        "display": false
                    },
                    {
                        "name": "60+",
                        "display": false
                    },
                    {
                        "name": "60-90",
                        "display": false
                    },
                    {
                        "name": "90+",
                        "display": false
                    },
                    {
                        "name": "This Month",
                        "display": false
                    },
                    {
                        "name": "Last Month",
                        "display": false
                    },
                    {
                        "name": "Month Before Last",
                        "display": false
                    },
                    {
                        "name": "Delinquent Rent",
                        "display": false
                    },
                    {
                        "name": "Delinquency Notes",
                        "display": false
                    },
                    {
                        "name": "Certified Funds Only",
                        "display": false
                    },
                    {
                        "name": "In Collections",
                        "display": false
                    },
                    {
                        "name": "Collections Agency",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "asOf",
                    "Delinquency Note Range",
                    "tenantStatus",
                    "tags",
                    "amountOwedInAccount",
                    "Balance"
                ]
            }
        },
        {
            "eligibleDebtSummary": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties"
                ]
            }
        },
        {
            "securityDepositFundsDetail": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Eligible for eCheck Security Deposit Return",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenant",
                    "tenantStatus",
                    "Liability Accounts",
                    "asOf",
                    "accountingBasis"
                ]
            }
        },
        {
            "surveysResponses": {
                "columns": [
                    {
                        "name": "Survey Type",
                        "display": false
                    },
                    {
                        "name": "Work Order Number",
                        "display": false
                    },
                    {
                        "name": "Job Description",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Vendor Name",
                        "display": false
                    }
                ],
                "customization": [
                    "curveyType",
                    "properties",
                    "dataType",
                    "dateRange"
                ]
            }
        },
        {
            "tenantDirectory": {
                "columns": [
                    {
                        "name": "Tenant Address",
                        "display": false
                    },
                    {
                        "name": "Tenant Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Tenant Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Tenant City",
                        "display": false
                    },
                    {
                        "name": "Tenant State",
                        "display": false
                    },
                    {
                        "name": "Tenant Zip",
                        "display": false
                    },
                    {
                        "name": "Tenant Birthdate",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Certified Funds Only",
                        "display": false
                    },
                    {
                        "name": "Lease From",
                        "display": false
                    },
                    {
                        "name": "Last Lease Renewal",
                        "display": false
                    },
                    {
                        "name": "Move-out",
                        "display": false
                    },
                    {
                        "name": "Eligible for Rent Increase",
                        "display": false
                    },
                    {
                        "name": "Last Rent Increase",
                        "display": false
                    },
                    {
                        "name": "Next Rent Increase Date",
                        "display": false
                    },
                    {
                        "name": "Eligible for eCheck Security Deposit Return",
                        "display": false
                    },
                    {
                        "name": "Online Portal Activated",
                        "display": false
                    },
                    {
                        "name": "Online Payments Recurring Total",
                        "display": false
                    },
                    {
                        "name": "Online Payments Recurring Count",
                        "display": false
                    },
                    {
                        "name": "Online Portal Login",
                        "display": false
                    },
                    {
                        "name": "Tenant Notes",
                        "display": false
                    },
                    {
                        "name": "Send Rent Reminders",
                        "display": false
                    },
                    {
                        "name": "Unit Tags",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Late Fee Type",
                        "display": false
                    },
                    {
                        "name": "Late Fee Base Amount",
                        "display": false
                    },
                    {
                        "name": "Late Fee Daily Amount",
                        "display": false
                    },
                    {
                        "name": "Grace Period",
                        "display": false
                    },
                    {
                        "name": "Grace Period Fixed Day",
                        "display": false
                    },
                    {
                        "name": "Grace Balance",
                        "display": false
                    },
                    {
                        "name": "Max Daily Late Fees Amount",
                        "display": false
                    },
                    {
                        "name": "Insurance Provider",
                        "display": false
                    },
                    {
                        "name": "Insurance Expiration",
                        "display": false
                    },
                    {
                        "name": "Insurance Policy Number",
                        "display": false
                    },
                    {
                        "name": "Transaction Fee",
                        "display": false
                    },
                    {
                        "name": "Primary Tenant",
                        "display": false
                    },
                    {
                        "name": "First Name",
                        "display": false
                    },
                    {
                        "name": "Last Name",
                        "display": false
                    },
                    {
                        "name": "Company Name",
                        "display": false
                    },
                    {
                        "name": "License Plates",
                        "display": false
                    },
                    {
                        "name": "Pets",
                        "display": false
                    },
                    {
                        "name": "NSF Fee Amount",
                        "display": false
                    },
                    {
                        "name": "Require Online Payments In Full",
                        "display": false
                    },
                    {
                        "name": "Security Deposit Return Payment",
                        "display": false
                    },
                    {
                        "name": "Commercial Lease Type",
                        "display": false
                    }
                ],
                "customization": [
                    "tenants",
                    "tenantStatus",
                    "tenantType",
                    "properties"
                ]
            }
        },
        {
            "tenantLedger": {
                "columns": [],
                "customization": [
                    "tenants",
                    "dateRange",
                    "transactionsShown"
                ]
            }
        },
        {
            "tenantTickler": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Tenant Tags",
                        "display": false
                    },
                    {
                        "name": "Move Out Date",
                        "display": false
                    },
                    {
                        "name": "Move Out Reason",
                        "display": false
                    },
                    {
                        "name": "Move In Date",
                        "display": false
                    },
                    {
                        "name": "Lease Sign Date",
                        "display": false
                    },
                    {
                        "name": "Assigned User",
                        "display": false
                    },
                    {
                        "name": "Tenant Status",
                        "display": false
                    },
                    {
                        "name": "Security Deposit Return Payment",
                        "display": false
                    },
                    {
                        "name": "Eligible for eCheck Security Deposit Return",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "occurredRange",
                    "events"
                ]
            }
        },
        {
            "tenantTransactionsSummary": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    }
                ],
                "customization": [
                    "tenants",
                    "properties",
                    "monthOf"
                ]
            }
        },
        {
            "tenantUnpaidChargesSummary": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Account Name",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenantStatus",
                    "asOf",
                    "balance"
                ]
            }
        },
        {
            "tenantVehicleInfo": {
                "columns": [
                    {
                        "name": "Rentable Item"
                    }
                ],
                "customization": [
                    "properties",
                    "tenants",
                    "tenantStatus"
                ]
            }
        },
        {
            "aged_payables_summary": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "31+",
                        "display": false
                    },
                    {
                        "name": "61+",
                        "display": false
                    },
                    {
                        "name": "Payee ID",
                        "display": false
                    },
                    {
                        "name": "Payee Type",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "asOf",
                    "payee",
                    "balance"
                ]
            }
        },
        {
            "agedReceivablesDetail": {
                "columns": [
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Future Charges",
                        "display": false
                    },
                    {
                        "name": "31+",
                        "display": false
                    },
                    {
                        "name": "61+",
                        "display": false
                    },
                    {
                        "name": "Unit & Payer Name",
                        "display": false
                    },
                    {
                        "name": "GL Account",
                        "display": false
                    },
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Unit Name",
                        "display": false
                    },
                    {
                        "name": "Unit Type",
                        "display": false
                    },
                    {
                        "name": "Unit Tags",
                        "display": false
                    },
                    {
                        "name": "Tenant Status",
                        "display": false
                    },
                    {
                        "name": "Payment Plan",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tags",
                    "amountReceivable",
                    "tenantStatus",
                    "asOf"
                ]
            }
        },
        {
            "billDetail": {
                "columns": [
                    {
                        "name": "Posting Date",
                        "display": false
                    },
                    {
                        "name": "GL Account Name",
                        "display": false
                    },
                    {
                        "name": "GL Account Number",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Work Order #",
                        "display": false
                    },
                    {
                        "name": "Cash Account",
                        "display": false
                    },
                    {
                        "name": "Quantity",
                        "display": false
                    },
                    {
                        "name": "Rate",
                        "display": false
                    },
                    {
                        "name": "Work Order Assignee",
                        "display": false
                    },
                    {
                        "name": "Approval Status",
                        "display": false
                    },
                    {
                        "name": "Approved By",
                        "display": false
                    },
                    {
                        "name": "Last Approver",
                        "display": false
                    },
                    {
                        "name": "Next Approvers",
                        "display": false
                    },
                    {
                        "name": "Days Pending Approval",
                        "display": false
                    },
                    {
                        "name": "Board Approval Status",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Bank Account",
                        "display": false
                    },
                    {
                        "name": "Vendor Account Number",
                        "display": false
                    },
                    {
                        "name": "Service From",
                        "display": false
                    },
                    {
                        "name": "Service To",
                        "display": false
                    },
                    {
                        "name": "Other Payment Type",
                        "display": false
                    },
                    {
                        "name": "Purchase Order #",
                        "display": false
                    },
                    {
                        "name": "Cost Center Name",
                        "display": false
                    },
                    {
                        "name": "Cost Center Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "payee",
                    "paymentType",
                    "createdBy",
                    "glAccounts",
                    "billStatus",
                    "dateType",
                    "dateRange",
                    "showReversedTransactions"
                ]
            }
        },
        {
            "chargeDetail": {
                "columns": [
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Charge Description",
                        "display": false
                    },
                    {
                        "name": "Receipt Type",
                        "display": false
                    },
                    {
                        "name": "Receipt Date",
                        "display": false
                    },
                    {
                        "name": "Receipt Reference",
                        "display": false
                    },
                    {
                        "name": "Owner(s) - Phone Number - Email",
                        "display": false
                    },
                    {
                        "name": "Owner(s)",
                        "display": false
                    },
                    {
                        "name": "Posting Date",
                        "display": false
                    },
                    {
                        "name": "Created By",
                        "display": false
                    },
                    {
                        "name": "Created At",
                        "display": false
                    },
                    {
                        "name": "Last Edited At",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenants",
                    "tenantStatus",
                    "glAccounts",
                    "dateType",
                    "chargeStatus",
                    "chargeDateRange",
                    "receiptType",
                    "receiptDateRange"
                ]
            }
        },
        {
            "checkRegister": {
                "columns": [
                    {
                        "name": "Bank Account Number",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "bankAccounts",
                    "payee",
                    "paymentType",
                    "checkNumbers",
                    "includeVoiedChecks",
                    "excludeClearedChecks"
                ]
            }
        },
        {
            "checkRegisterDetail": {
                "columns": [
                    {
                        "name": "Bank Account Number",
                        "display": false
                    },
                    {
                        "name": "ACH Batch Generation Date",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "dateRange",
                    "bankAccounts",
                    "payee",
                    "paymentType",
                    "checkNumbers",
                    "includeVoiedChecks",
                    "groupGLTotalsPerCheck"
                ]
            }
        },
        {
            "depositRegister": {
                "columns": [
                    {
                        "name": "Receipt Description",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    }
                ],
                "customization": [
                    "dateRange",
                    "bankAccounts"
                ]
            }
        },
        {
            "expenseRegister": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Due Date",
                        "display": false
                    },
                    {
                        "name": "Expense Account Name",
                        "display": false
                    },
                    {
                        "name": "Expense Account Number",
                        "display": false
                    },
                    {
                        "name": "Cash Account Name",
                        "display": false
                    },
                    {
                        "name": "Cash Account Number",
                        "display": false
                    },
                    {
                        "name": "Check Amount",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "payee",
                    "billStatus",
                    "billDateRange"
                ]
            }
        },
        {
            "incomeRegister": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "receiptDateRange",
                    "payer"
                ]
            }
        },
        {
            "journalEntryRegister": {
                "columns": [],
                "customization": []
            }
        },
        {
            "paymentPlans": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenantsAndHomeowners",
                    "tags",
                    "originalChargePeriodRange",
                    "showReversedTransactions"
                ]
            }
        },
        {
            "receivablesActivity": {
                "columns": [
                    {
                        "name": "Property Name",
                        "display": false
                    },
                    {
                        "name": "Property Address",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Property Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Property City",
                        "display": false
                    },
                    {
                        "name": "Property State",
                        "display": false
                    },
                    {
                        "name": "Property Zip",
                        "display": false
                    },
                    {
                        "name": "Online Payments Recurring Count",
                        "display": false
                    },
                    {
                        "name": "Online Payments Recurring Total",
                        "display": false
                    },
                    {
                        "name": "Move-in",
                        "display": false
                    },
                    {
                        "name": "Emails",
                        "display": false
                    },
                    {
                        "name": "Phone Numbers",
                        "display": false
                    },
                    {
                        "name": "Certified Funds Only",
                        "display": false
                    },
                    {
                        "name": "Opted Out Of Portal",
                        "display": false
                    },
                    {
                        "name": "Payment Type",
                        "display": false
                    },
                    {
                        "name": "Require Online Payments In Full",
                        "display": false
                    },
                    {
                        "name": "Portfolio",
                        "display": false
                    }
                ],
                "customization": [
                    "tenants",
                    "tenantStatus",
                    "properties",
                    "receiptDateRange",
                    "showManuallyEnteredReceiptsOnly"
                ]
            }
        },
        {
            "residentFinancialActivity": {
                "columns": [
                    {
                        "name": "Account",
                        "display": false
                    },
                    {
                        "name": "Account Number",
                        "display": false
                    },
                    {
                        "name": "Unit Address",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 1",
                        "display": false
                    },
                    {
                        "name": "Unit Street Address 2",
                        "display": false
                    },
                    {
                        "name": "Unit City",
                        "display": false
                    },
                    {
                        "name": "Unit State",
                        "display": false
                    },
                    {
                        "name": "Unit Zip",
                        "display": false
                    },
                    {
                        "name": "Unit & Payer Name",
                        "display": false
                    },
                    {
                        "name": "Unit",
                        "display": false
                    },
                    {
                        "name": "Property",
                        "display": false
                    },
                    {
                        "name": "Payer",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenantStatus",
                    "dateRange"
                ]
            }
        },
        {
            "unpaidBalancesByMonth": {
                "columns": [
                    {
                        "name": "Tags",
                        "display": false
                    }
                ],
                "customization": [
                    "properties",
                    "tenants",
                    "tenantStatus",
                    "tags",
                    "glAccounts",
                    "periodRange",
                    "accountingBasis",
                    "totalBalance"
                ]
            }
        }
    ]
}
