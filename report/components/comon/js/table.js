function initResizeTable(){

    const table = document.querySelector("table");
    const resizers = table.querySelectorAll(".resizer");
    let currentResizer;

    resizers.forEach(resizer => {
        resizer.addEventListener("mousedown", mousedownHandler);

        function mousedownHandler(e) {
            currentResizer = resizer;
            let th = currentResizer.parentElement;
            console.log('th::: ', th);
            let startX = e.pageX;
            console.log('startX::: ', startX);
            let startWidth = th.offsetWidth;
            console.log('startWidth::: ', startWidth);

            function mousemoveHandler(e) {
                const newWidth = startWidth + (e.pageX - startX);
                console.log('newWidth::: ', newWidth);
                if (newWidth > 40) {
                    th.style.flexGrow = null;
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

}


function toSnakeCase(str) {
    return str
        .trim()                   // remove leading/trailing spaces
        .toLowerCase()            // convert to lowercase
        .replace(/\s+/g, '_');    // replace spaces with underscores
}
