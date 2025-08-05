const properties_options_data = window.propertiesDataComponent.data;
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
                option.name.toLowerCase().includes(searchText)
            );

            // Clear the results
            properties_options.innerHTML = '';

            filtered.forEach(option => {
                let wrapper = document.createElement('label');
                wrapper.innerHTML = `
                    <input type="radio" name="properties" value='${option.id}' propertyName='${option.name}'>
                    <div class="properties_selector_options_label">${option.name}</div>
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

            const propertyName = checkedRadio.getAttribute('propertyname');
            const propertyId = checkedRadio.value;

            appendSelectOption(propertyName, propertyId); // This gives you the value attribute

        }
        document.getElementById(`${tablePrefix}properties_selector_options`).style.display = 'none';
        properties_input.value = "";
    }

    function appendSelectOption(propertyName, propertyId) {

        let wrapper = document.createElement('label');

        wrapper.innerHTML = `
            <input type="checkbox" name="properties_checkbox" value="${propertyId}" propertyName="${propertyName}" checked>
            <div>${propertyName}</div>
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

function formartPropertiesStr(selectedPropertiesList){
    if (selectedPropertiesList.length === 3) {
        return "All Properties";
    }
    let formartStr = selectedPropertiesList[0].propertyName;

    for(let i = 1; i<selectedPropertiesList.length; i++){
        formartStr += ` | ${selectedPropertiesList[i].propertyName}`
    }
    
    return formartStr;

}

function getSelectedProperties() {
    const propertiesCheckboxs = Array.from(document.querySelectorAll('input[name="properties_checkbox"]:checked'));
    const selectedPropertiesList = [];

    if(propertiesCheckboxs.length === 0){
        properties_options_data.forEach (propertie => {
            selectedPropertiesList.push(
                {
                    "propertyName":propertie.name,
                    "propertyId": propertie.id
                }
            )
        })
    } else {
        propertiesCheckboxs.forEach(propertiesCheckbox => {
            selectedPropertiesList.push(
                {
                    "propertyName":propertiesCheckbox.getAttribute('propertyname'),
                    "propertyId": propertiesCheckbox.value
                }
            )
        });
    }
    return selectedPropertiesList;

}   
