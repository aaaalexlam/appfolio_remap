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
    }
];

function createPropertiesHTML(displayName, tablePrefix) {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="${tablePrefix}properties_field">${displayName}</td>
                    <td class="input_column">
                        <div class="properties_input_group">
                            <div id="${tablePrefix}properties_select_group" class="properties_select_group">
                                <div id="${tablePrefix}selected_properties" class="selected_properties"></div>
                                <input id="${tablePrefix}properties_input" class="properties_input" type="text"
                                    placeholder="Search by property, group, portfolio, or owner">
                                <div id="${tablePrefix}properties_selector_options" class="properties_selector_options"></div>
                            </div>
                            <div id="${tablePrefix}properties_selector_remove_all" class="properties_selector_remove_all"><i class="fa fa-close"></i></div>
                        </div>
                    </td>
                </tr>
    `;
}


function addPropertiesEventListener(tablePrefix) {
    const properties_options = document.getElementById(`${tablePrefix}properties_selector_options`)
    const properties_input = document.getElementById(`${tablePrefix}properties_input`);
    const selected_properties = document.getElementById(`${tablePrefix}selected_properties`);
    const properties_selector_remove_all = document.getElementById(`${tablePrefix}properties_selector_remove_all`);

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
                        handleRationChange(tablePrefix);
                    }
                });

                wrapper.addEventListener('mousedown', (e) => {
                    handleRationChange(tablePrefix);
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

            document.getElementById(`${tablePrefix}properties_selector_options`).style.display = 'block';
        }

    });

    properties_selector_remove_all.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="properties_checkbox"]');

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
            handleRationChange(tablePrefix);
        }
    });

    function handleRationChange(tablePrefix) {
        const checkedRadio = document.querySelector('input[type="radio"][name="properties"]:checked');
        if (checkedRadio) {
            appendSelectOption(checkedRadio.value); // This gives you the value attribute
        }
        document.getElementById(`${tablePrefix}properties_selector_options`).style.display = 'none';
        properties_input.value = "";
    }

    function appendSelectOption(selected) {
        let wrapper = document.createElement('label');
        wrapper.innerHTML = `
            <input type="checkbox" name="properties_checkbox" value="${selected}" checked>
            <div>${selected}</div>
        `;

        selected_properties.appendChild(wrapper)

        const checkbox = wrapper.querySelector('input[type="checkbox"][name="properties_checkbox"]');
        checkbox.addEventListener('change', (e) => {
            if (!checkbox.checked) {
                // Hide the entire wrapper
                wrapper.style.display = 'none';
            }
        });
    };
}

function formartPropertiesStr(str) {
    if (str.length === 0) {
        return "All Properties";
    }

    let propertiesStr = str[0];

    for (let i = 1; i < str.length; i++) {
        propertiesStr += ' | ' + str[i];
    }
    
    return `[${propertiesStr}]`;
}

