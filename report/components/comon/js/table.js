document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector("table");
    const resizers = table.querySelectorAll(".resizer");
    let currentResizer;

    resizers.forEach(resizer => {
        resizer.addEventListener("mousedown", mousedownHandler);

        function mousedownHandler(e) {
            currentResizer = resizer;
            let th = currentResizer.parentElement;
            let startX = e.pageX;
            let startWidth = th.offsetWidth;

            function mousemoveHandler(e) {
                const newWidth = startWidth + (e.pageX - startX);
                if(newWidth > 100){
                    th.style.width = newWidth + "px";
                }
            }

            function mouseupHandler() {
                document.removeEventListener("mousemove", mousemoveHandler);
                document.removeEventListener("mouseup", mouseupHandler);
            }

            document.addEventListener("mousemove", mousemoveHandler);
            document.addEventListener("mouseup", mouseupHandler);
        }
    });

});


function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}
