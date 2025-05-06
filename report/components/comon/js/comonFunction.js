function initResizeColumn(){
    const resizers = document.querySelectorAll(".resize_div");
    let currentResizer;

    resizers.forEach(resizer => {
        resizer.addEventListener("mousedown", mousedownHandler);

        function mousedownHandler(e) {
            currentResizer = resizer;

            let headerComponent  = currentResizer.parentElement.parentElement;
            let headerId = headerComponent .id;
            let column_account_name = document.querySelectorAll(`.${headerId}`);

            let startX = e.pageX;
            let startWidth = headerComponent .offsetWidth;

            function mousemoveHandler(e) {
                const newWidth = startWidth + (e.pageX - startX);
                column_account_name.forEach(el => {
                    el.style.width = newWidth+"px"; // or any desired value
                });
                headerComponent .style.width = newWidth + "px";
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

    if (isChecked) {
        [...document.getElementsByClassName(`column_${value}`)].forEach(header => {
            header.style.display = 'none';
        });
    } else {
        [...document.getElementsByClassName(`column_${value}`)].forEach(header => {
            header.style.display = 'flex';
        });
    }
}

function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}

function toCamelCase(input) {
    return input
      .toLowerCase()
      .replace(/[_\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
      .replace(/^[A-Z]/, chr => chr.toLowerCase());
  }