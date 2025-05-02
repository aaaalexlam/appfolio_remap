// get the customization components
const vendorLedgerComponents = window.reportComponent.data.find(item => item.hasOwnProperty('vendorLedger')).vendorLedger;
const columns = vendorLedgerComponents.columns;
const customization = vendorLedgerComponents.customization;

document.addEventListener("DOMContentLoaded", function () {
    initTable();
});


function initTable() {
    const table = document.getElementById("main_container");
    const columnCheckbox = document.getElementById("column_checkbox");

    columns.forEach((column) => {
        table.innerHTML += columnHeaderTemplate(column.name);
        columnCheckbox.innerHTML += columnCheckboxTemplate(column.name);

    });


    const resizers = document.querySelectorAll(".resize_div");
    let currentResizer;

    resizers.forEach(resizer => {
        resizer.addEventListener("mousedown", mousedownHandler);

        function mousedownHandler(e) {
            currentResizer = resizer;
            let main_container_header = currentResizer.parentElement;
            let startX = e.pageX;
            let startWidth = main_container_header.offsetWidth;

            function mousemoveHandler(e) {
                const newWidth = startWidth + (e.pageX - startX);
                main_container_header.style.width = newWidth + "px";
            }

            function mouseupHandler() {
                document.removeEventListener("mousemove", mousemoveHandler);
                document.removeEventListener("mouseup", mouseupHandler);
            }

            document.addEventListener("mousemove", mousemoveHandler);
            document.addEventListener("mouseup", mouseupHandler);
        }
    })
}

function handleCheckboxClick(event) {
    const isChecked = event.target.checked;
    const value = event.target.value;
    const column = document.getElementById(`main_container_${toSnakeCase(value)}`)

    if (isChecked) {
        column.style.display = 'none'
    } else {
        column.style.display = 'block'
    }
}



function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}
