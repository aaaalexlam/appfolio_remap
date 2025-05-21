// table prefix
const tablePrefix = 'bill_detail_';

// get the customization components
const billDetailObject = window.reportComponent.data.find(item => item.hasOwnProperty('billDetail'));
const columns = billDetailObject.billDetail.columns;
const customization = billDetailObject.billDetail.customization;

// init balance sheet html elements; it must be init when the dom was loaded;
document.addEventListener("DOMContentLoaded", function () {

    initCustomizationForm(customization, tablePrefix);

    initHeader(columns, `${tablePrefix}checkbox`, `${tablePrefix}table_header`);
    initResizeColumn();
    document.addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (clickedElement.id !== '' && clickedElement.id === `${tablePrefix}modal`) {
            document.getElementById(`${tablePrefix}modal`).style.display = "none";
        }
    });


    // handel customization search update
    document.getElementById(`${tablePrefix}post_form_btn`).onclick = function () {

        const selectedProperties = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked')).map(cb => cb.value);
        const selectedPayee = document.getElementById(`${tablePrefix}payee_input`).value;
        const selectedPaymentTyep = document.getElementById(`${tablePrefix}payment_type`).value;
        const createdBy = document.getElementById(`${tablePrefix}created_by`).value;
        const selectedGlAccounts = Array.from(document.querySelectorAll('input[name="gl_account_checkbox"]:checked')).map(cb => cb.value);
        const paymentType = document.getElementById(`${tablePrefix}payment_type`).value;
        const dateType = document.getElementById(`${tablePrefix}date_type`).value;
        const dateRange = getSelectedDateRange(tablePrefix);
        const showReversedTransactions = document.querySelector('input[name="checkBox_show_reversed_transactions"]').checked ? 'Y' : 'N';

        document.getElementById(`${tablePrefix}custom_search_summary_properties`).innerText = formatCustomSearchStr(`custom_search_summary_properties`, selectedProperties);
        document.getElementById(`${tablePrefix}custom_search_summary_payee`).innerText = selectedPayee;
        document.getElementById(`${tablePrefix}custom_search_summary_paymentType`).innerText = selectedPaymentTyep;
        document.getElementById(`${tablePrefix}custom_search_summary_createdBy`).innerText = createdBy;
        document.getElementById(`${tablePrefix}custom_search_summary_glAccounts`).innerText = selectedGlAccounts;
        document.getElementById(`${tablePrefix}custom_search_summary_billStatus`).innerText = paymentType;
        document.getElementById(`${tablePrefix}custom_search_summary_dateType`).innerText = dateType;
        document.getElementById(`${tablePrefix}custom_search_summary_dateRange`).innerText = dateRange;
        document.getElementById(`${tablePrefix}custom_search_summary_show_reversed_transactions`).innerText = showReversedTransactions;
    };

    document.getElementById(`${tablePrefix}post_form_btn_cancel`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "none";
    }

    document.getElementById(`${tablePrefix}customization_btn`).onclick = function () {
        document.getElementById(`${tablePrefix}modal`).style.display = "flex";
    }
})