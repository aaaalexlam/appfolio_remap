const payeeList = [
    "Everest Senior Living Management Inc.",
    "SYSCO (Oceanside)",
    "SYSCO (Walnut)",
    "SYSCO (Tustin)",
]
const createPayeeHTML = (displayName, tablePrefix) => {
    return `
                <tr class="tr-default">
                    <td class="input_field">${displayName}</td>
                    <td class="input_column">
                        <div class="payee_input">
                            <div class="payee_input_div">
                                <input type="text" id="${tablePrefix}payee_input" placeholder="Type to search payee">
                            </div>
                            <div class="payee_input_radio_group_div">
                                <div id="${tablePrefix}payee_input_radio_group" class="payee_input_radio_group"></div>
                            </div>
                        </div>

                    </td>
                </tr>
    `;
}

const addPayeeEventListener = (tablePrefix) => {
    // Add a flag to prevent selecting radio when using ArrowDown
    let arrowKeyNavigation = false;
    const payeeInput = document.getElementById(`${tablePrefix}payee_input`);

    payeeInput.addEventListener('input', function (event) {

        const payee_input_radio_group = document.getElementById(`${tablePrefix}payee_input_radio_group`);

        payee_input_radio_group.innerHTML = '';
        if (event.target.value.length > 1) {

            const resultList = payeeList.filter(payee => payee.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

            if (resultList.length === 1) {
                payee_input_radio_group.innerHTML += radioTemplate(resultList[0], true, tablePrefix);
                document.getElementById(`${tablePrefix}payee_input_radio_group`).style.display = "flex";

            }

            if (resultList.length > 1) {
                payee_input_radio_group.innerHTML += radioTemplate(resultList[0], true, tablePrefix)
                for (let i = 1; i < resultList.length; i++) {
                    payee_input_radio_group.innerHTML += radioTemplate(resultList[i], false, tablePrefix)
                }
                document.getElementById(`${tablePrefix}payee_input_radio_group`).style.display = "flex";

            }

            // change bgc on hover
            payee_input_radio_group.querySelectorAll("label").forEach(label => {
                label.addEventListener("mouseenter", () => {
                    const input = label.querySelector('input[type="radio"]');
                    if (input) input.focus();
                });

                label.addEventListener("mousedown", () => {
                    payeeInput.value = getCheckedRadio(tablePrefix);
                    document.getElementById(`${tablePrefix}payee_input_radio_group`).style.display = "none";
                });
            });

            const radios = payee_input_radio_group.querySelectorAll('label input[type="radio"]');
            radios.forEach(radio => {

                radio.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        payeeInput.value = event.target.value;
                        document.getElementById(`${tablePrefix}payee_input_radio_group`).style.display = "none";
                    }
                });
            });

        }
    });

    payeeInput.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            arrowKeyNavigation = true;
            const payee_input_radio_group = document.getElementById(`${tablePrefix}payee_input_radio_group`);
            if (payee_input_radio_group.childElementCount > 0) {
                const firstRadio = document.querySelector(`input[name="${tablePrefix}payee_option"]`);
                firstRadio.focus();
            }
        }
    });
}

const getCheckedRadio = (tablePrefix) =>{
    return document.querySelector(`#${tablePrefix}payee_input_radio_group input[type="radio"]:checked`).value;
}

const radioTemplate = (result, isChecked, tablePrefix) => {
    return (
        ` 
            <label>
                <input type="radio" name="${tablePrefix}payee_option" value="${result}"  ${isChecked ? 'checked' : ''}>
                ${result}
            </label>
        `
    )
}