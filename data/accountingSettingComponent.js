window.accountingSetting = [
        {
            "header": "Rent Key Accounts",
            "components": [
                {
                    "id": "rentIncomeAccount",
                    "displayName": "Rent Income Account",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": true,
                    "glAccounts": ["cash"],
                    "selectedGLaccountIds": ["27"]
                },
                {
                    "id": "additionalRentIncomeAccounts",
                    "displayName": "Additional Rent Income Accounts",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["cash"],
                    "selectedGLaccountIds": ["208", "1098"]
                },
                {
                    "id": "subsidizedRentIncomeAccounts",
                    "displayName": "Subsidized Rent Income Accounts",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["cash", "liability"],
                    "selectedGLaccountIds": []
                },
                {
                    "id": "hudRentIncomeAccount",
                    "displayName": "HUD Rent Income Account",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["cash", "liability"],
                    "selectedGLaccountIds": []
                },
                {
                    "id": "hudUtilityReimbursementAccount",
                    "displayName": "HUD Utility Reimbursement Account",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["cash", "liability"],
                    "selectedGLaccountIds": []
                },
                {
                    "id": "hudRepaymentAgreementAccount",
                    "displayName": "HUD Repayment Agreement Account",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["cash", "liability"],
                    "selectedGLaccountIds": []
                },
            ]
        },
        {
            "header": "Other Key Accounts",
            "components": [
                {
                    "id": "accountsReceivableAccount",
                    "displayName": "Accounts Receivable Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["asset"],
                    "selectedGLaccountIds": ["4"]
                },
                {
                    "id": "accountsPayableAccount",
                    "displayName": "Accounts Payable Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["liability"],
                    "selectedGLaccountIds": ["19"]
                },
                {
                    "id": "prepaymentAccount",
                    "displayName": "Prepayment Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["liability", "income"],
                    "selectedGLaccountIds": ["18"]
                },
                {
                    "id": "ownerDisbursementsAccount",
                    "displayName": "Owner Disbursements Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["capital"],
                    "selectedGLaccountIds": ["22"]
                },
                {
                    "id": "ownerContributionsAccount",
                    "displayName": "Owner Contributions Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["capital"],
                    "selectedGLaccountIds": ["21"]
                },
                {
                    "id": "retainedEarningsAccount",
                    "displayName": "Retained Earnings Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["capital"],
                    "selectedGLaccountIds": ["23"]
                },
                {
                    "id": "managementFeesAccount",
                    "displayName": "Management Fees Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["expense"],
                    "selectedGLaccountIds": ["1067"]
                },
                {
                    "id": "leaseFeeAccount",
                    "displayName": "leaseFeeAccount",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["expense", "other_expense"],
                    "selectedGLaccountIds": ["70"]
                },
                {
                    "id": "renewalFeeAccount",
                    "displayName": "Renewal Fee Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["expense", "other_expense"],
                    "selectedGLaccountIds": [""]
                },
                {
                    "id": "maintenanceFeesAccount",
                    "displayName": "Maintenance Fees Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["expense", "other_expense"],
                    "selectedGLaccountIds": ["71"]
                },
                {
                    "id": "taxAuthorityAccount",
                    "displayName": "Tax Authority Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income", "liability"],
                    "selectedGLaccountIds": ["88"]
                },
                {
                    "id": "taxPassthruAccount",
                    "displayName": "Tax Passthru Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income", "liability"],
                    "selectedGLaccountIds": ["37"]
                },
                {
                    "id": "applicationFeesAccount",
                    "displayName": "Application Fees Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["39"]
                },
                {
                    "id": "securityClearingAccount",
                    "displayName": "Security Clearing Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["17"]
                },
                {
                    "id": "lateFeesAccount",
                    "displayName": "Late Fees Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["41"]
                },
                {
                    "id": "nSFFeesAccount",
                    "displayName": "NSF Fees Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["36"]
                },
                {
                    "id": "interestAccount",
                    "displayName": "Interest Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
                {
                    "id": "mTMAdditionalFeeAccount",
                    "displayName": "MTM Additional Fee Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["43"]
                },
                {
                    "id": "associationIncomeAccount",
                    "displayName": "Association Income Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["29"]
                },
                {
                    "id": "securityDepositAccount",
                    "displayName": "Security Deposit Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["liability"],
                    "selectedGLaccountIds": ["13"]
                },
                {
                    "id": "holdingDepositAccount",
                    "displayName": "Holding Deposit Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": true,
                    "glAccounts": ["liability"],
                    "selectedGLaccountIds": ["13"]
                },
                {
                    "id": "additionalDepositAccounts",
                    "displayName": "Additional Deposit Accounts",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["liability"],
                    "selectedGLaccountIds": ["13", "14", "15", "16"]
                },
                {
                    "id": "additionalRecurringReceivablesAccounts",
                    "displayName": "additionalRecurringReceivablesAccounts",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
            ]
        },
        {
            "header": "Key Accounts For GPR Reporting & Automated Application of Rent Concession Credits",
            "components": [
                {
                    "id": "rentConcessionAccounts",
                    "displayName": "Rent Concession Accounts",
                    "canAddAnotherAccount": true,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": []
                },
            ]
        },
        {
            "header": "Key Accounts For GPR Journal Entries",
            "components": [
                {
                    "id": "vacancyLossAccount",
                    "displayName": "Vacancy Loss Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["34"]
                },
                {
                    "id": "delinquencyLossAccount",
                    "displayName": "Delinquency Loss Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["33"]
                },
                {
                    "id": "lossOrGaintoMarketAccount",
                    "displayName": "Loss/Gain to Market Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
                {
                    "id": "grossPotentialRentAccount",
                    "displayName": "Gross Potential Rent Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": ["30"]
                },
                {
                    "id": "modelLossAccount",
                    "displayName": "Model Loss Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
                {
                    "id": "renovationLossAccount",
                    "displayName": "Renovation Loss Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
                {
                    "id": "officeLossAccount",
                    "displayName": "Office Loss Account",
                    "canAddAnotherAccount": false,
                    "requireDefaultAccount": false,
                    "glAccounts": ["income"],
                    "selectedGLaccountIds": [""]
                },
            ]
        }
    ]
