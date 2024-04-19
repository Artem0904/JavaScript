
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("color-block")) {
            event.target.remove();
        }
    });

    document.querySelector("button").addEventListener("click", function () {
        createColorBlock();
    });

    function createColorBlock() {
        const colorBlock = document.createElement("div");
        colorBlock.className = "color-block";
        colorBlock.style.backgroundColor = getRandomColor();
        document.body.appendChild(colorBlock);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
