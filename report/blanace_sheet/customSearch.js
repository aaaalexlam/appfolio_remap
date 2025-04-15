const properties_options_data = [
    {
        "id": "1",
        "type": "property",
        "address": "Everest at Oceanside - 3500 Lake Blvd.  Oceanside, CA 92056"
    },
    {
        "id": "2",
        "type": "property",
        "address": "Walnut Valley Senior Living  - 19850 Colima Road  Walnut, CA 91789"
    },
    {
        "id": "3",
        "type": "owner",
        "address": "Everest Senior Living Management Inc - 801 S. Garfield Ave. #308 Alhambra, CA 91801"
    }
];
const properties_options = document.getElementById("properties_selector_options")
const properties_input = document.getElementById("properties_input");
const selected_properties = document.getElementById("selected_properties");

properties_input.addEventListener('input', function () {
    
    if (this.value.length === 0) {
        properties_options.innerHTML = '';
        properties_options.hidden = true;
    }
    if (this.value.length > 1) {
        properties_options.hidden = false;
        const searchText = this.value.toLowerCase();
        const filtered = properties_options_data.filter(option =>
            option.address.toLowerCase().includes(searchText)
        );

        // Clear the results
        properties_options.innerHTML = '';

        filtered.forEach(option => {
            const optionBox = document.createElement('option');
            optionBox.value = option.address;
            // div.onclick = function () {
            //     appendSelectOption(div.textContent)
            // };
            properties_options.appendChild(optionBox);
        });
        properties_options.selectedIndex = 0;
    }

});

function appendSelectOption(selected) {
    properties_options.innerHTML = '';
    properties_input.value = '';
    let boxElement =
        `
        <div class="selected_properties_box">
            <div class="selected_properties_text">
                ${selected}
            </div>
           <div class="cross">x</div>
        </div>
    `
    selected_properties.innerHTML += boxElement
};

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cross')) {
        const box = e.target.closest('.selected_properties_box');
        if (box) box.remove();
    }
});