var colorCounter = 0;

document.querySelectorAll("li.cell").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("hover");
    }, false);

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hover");
    }, false);

    item.addEventListener("click", () => {
        item.style.backgroundColor = "hsla(265, 25%, " + (5 + colorCounter*3) + "%, 1)";
        console.log("counter value", colorCounter);
        colorCounter++;

        if (colorCounter > 27) {
            colorCounter = 0;
        }
        
    }, false);

});

const changeBG = () => {
    const bg = document.createElement("form");
    bg.innerHTML = `
        <input type="color" name="bg">
        <button>update</button> 
    `;
    
    bg.addEventListener("submit", (e) => {
        e.preventDefault();
        let colorval = bg.querySelector("input").value;
        document.querySelectorAll(".cell").forEach((item) => {
            item.style.backgroundColor = colorval;
        });
    });

    document.querySelector("main").append(bg);
}

changeBG();
