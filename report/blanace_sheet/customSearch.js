const properties_options_data = [
    {
        "id": "1",
        "type": "property",
        "address": "Everest at Oceanside - 3500 Lake Blvd.  Oceanside, CA 92056"
    },
    {
        "id": "2",
        "type": "property",
        "address": "Everest Valley Senior Living  - 19850 Colima Road  Walnut, CA 91789"
    },
    {
        "id": "3",
        "type": "owner",
        "address": "Everest Senior Living Management Inc - 801 S. Garfield Ave. #308 Alhambra, CA 91801"
    },
    {
        "id": "4",
        "type": "owner",
        "address": "Everest Senior Living Management Inc - 801 S. Garfield Ave. #308 Alhambra, CA 91801"
    }
];
const properties_options = document.getElementById("properties_selector_options")
const properties_input = document.getElementById("properties_input");
const selected_properties = document.getElementById("selected_properties");
const properties_selector_remove_all = document.getElementById("properties_selector_remove_all");

// as of Radio group
const as_of_radio_input_date = document.getElementById("as_of_radio_input_date");
const as_of_radio_select_date = document.getElementById("as_of_radio_select_date");
const as_of_date = document.getElementById('as_of_date');
const as_of_select_date = document.getElementById('as_of_select_date');

as_of_radio_input_date.addEventListener('change', updateDateInputs);
as_of_radio_select_date.addEventListener('change', updateDateInputs);
as_of_select_date.addEventListener('change', updateSelectedDate);


properties_input.addEventListener('input', function () {

    if (this.value.length === 0) {
        properties_options.innerHTML = '';

    }
    if (this.value.length > 1) {
        const searchText = this.value.toLowerCase();
        const filtered = properties_options_data.filter(option =>
            option.address.toLowerCase().includes(searchText)
        );

        // Clear the results
        properties_options.innerHTML = '';

        filtered.forEach(option => {
            let wrapper = document.createElement('label');
            wrapper.innerHTML = `
                <input type="radio" name="properties" value='${option.address}'>
                <div class="properties_selector_options_label">${option.address}</div>
            `;

            wrapper.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    handleRationChange();
                }
            });

            wrapper.addEventListener('mousedown', (e) => {
                handleRationChange();
            });

            wrapper.addEventListener('mouseenter', (e) => {
                const input = wrapper.querySelector('input');
                input.checked = true;
            });

            properties_options.appendChild(wrapper);

        });

        const radio = document.querySelector('input[type="radio"][name="properties"]');
        if (radio) {
            radio.checked = true;
        }

        document.getElementById('properties_selector_options').style.display = 'block';

    }

});

properties_selector_remove_all.addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="properties"]');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.closest('label').style.display = 'none';
    })
});

properties_input.addEventListener('keydown', (e) => {

    if (e.key === 'ArrowDown') {
        const firstRadio = document.querySelector('input[type="radio"][name="properties"]');

        if (firstRadio) {
            e.preventDefault(); // prevent the default tabbing
            firstRadio.focus();
            firstRadio.checked = true; // optional, if you want to auto-select it
        }
    }

    if (e.key === 'Enter') {
        handleRationChange();
    }
});

function handleRationChange() {
    const checkedRadio = document.querySelector('input[type="radio"][name="properties"]:checked');
    if (checkedRadio) {
        appendSelectOption(checkedRadio.value); // This gives you the value attribute
    }
    document.getElementById('properties_selector_options').style.display = 'none';
    properties_input.value = "";
}

function appendSelectOption(selected) {
    let wrapper = document.createElement('label');
    wrapper.innerHTML = `
        <input type="checkbox" name="properties" value="${selected}" checked>
        <div>${selected}</div>
    `;

    selected_properties.appendChild(wrapper)

    const checkbox = wrapper.querySelector('input[type="checkbox"][name="properties"]');
    checkbox.addEventListener('change', (e) => {
        if (!checkbox.checked) {
            // Hide the entire wrapper
            wrapper.style.display = 'none';
        }
    });
};

function updateDateInputs() {
    if (as_of_radio_input_date.checked) {
        as_of_date.disabled = false;
        as_of_select_date.disabled = true;
    } else if (as_of_radio_select_date.checked) {
        as_of_date.disabled = true;
        as_of_select_date.disabled = false;
    }
}

function updateSelectedDate() {
    let date = new Date();
    let month = date.getMonth();

    switch (as_of_select_date.value) {
        case "end_of_last_week":
            const dayOfWeek = date.getDay();
            const daysToSubtract = dayOfWeek + 7;
            date.setDate(date.getDate() - daysToSubtract);
            break;
        case "end_of_last_month":
            date = new Date(date.getFullYear(), date.getMonth(), 0);
            break;
        case "end_of_last_quarter":
            const currentQuarter = Math.floor(month / 3);
            const lastQuarterEndMonth = currentQuarter * 3 - 1;
            if (lastQuarterEndMonth < 0) {
                // Go to last year's Q4
                date = new Date(date.getFullYear() - 1, 11, 31);
            } else {
                // Go to last quarter's last day
                date = new Date(date.getFullYear(), lastQuarterEndMonth + 1, 0);
            }
            break;
        case "end_of_this_quarter":
            const nextQuarterStartMonth = Math.floor(month / 3 + 1) * 3;
            date = new Date(date.getFullYear(), nextQuarterStartMonth, 0);
            break;
        case "end_of_this_year":
            date = new Date(date.getFullYear(), 11, 31);
            break;
        case "yesterday":
            date.setDate(date.getDate() - 1);
            break;
        case "today":
        default:
        break;
    }
}
updateDateInputs();