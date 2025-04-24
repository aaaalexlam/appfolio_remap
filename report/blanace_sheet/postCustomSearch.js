

const post_form_btn = document.getElementById("post_form_btn");
post_form_btn.addEventListener('click', handle_post_form_btn_click);

function handle_post_form_btn_click() {

    let form = {
        "properties_value": [],
        "as_of_date_value": "",
        "accounting_basis_value": "",
        "level_of_detail_value": ""
    }

    // properties
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="properties"]:checked');

    // as of Radio group
    const as_of_radio_input_date = document.getElementById("as_of_radio_input_date");
    const as_of_radio_select_date = document.getElementById("as_of_radio_select_date");
    const as_of_date = document.getElementById('as_of_date');
    const as_of_select_date = document.getElementById('as_of_select_date');

    //
    const accounting_basis = document.getElementById("accounting_basis");
    const level_of_detail = document.querySelector('input[name="level_of_detail"]:checked');


    checkboxes.forEach((checkbox) => {
        form.properties_value.push(checkbox.value)
    });
    form.as_of_date_value = as_of_radio_input_date.checked === true ? as_of_date.value : as_of_select_date.value;
    form.accounting_basis_value = accounting_basis.value;
    form.level_of_detail_value = level_of_detail.value;

    console.log(form)

}

