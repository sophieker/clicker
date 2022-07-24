/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

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