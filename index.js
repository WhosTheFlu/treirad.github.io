// ******* index.js *******

// Mouse events
// element.addEventListener(type, function);

const cells = document.querySelectorAll(".cell");
cells.backgroundColor = "grey";
var turn = "X";
var running = true;
var xcells = ["","","","","","","","",""];
var ocells = ["","","","","","","","",""];

cells.forEach(cell => cell.addEventListener("mousedown", Pressed));
cells.forEach(cell => cell.addEventListener("mouseup", ResetColor));
cells.forEach(cell => cell.addEventListener("mouseover", Hovering));
cells.forEach(cell => cell.addEventListener("mouseleave", ResetColor));

function Hovering() {
    const cellIndex = this.getAttribute("cellIndex");
    this.style.backgroundColor = "blue";
    
}
function Pressed() {
    if (running) {
        const cellIndex = this.getAttribute("cellIndex");
        this.style.backgroundColor = "red";
        this.textContent = turn;
        TurnSwitch();
    }
}
function ResetColor() {
    const cellIndex = this.getAttribute("cellIndex");
    this.style.backgroundColor = "grey";
    
}
function TurnSwitch() {
    if (turn == "X") {
        turn = "O"
    } else {
        turn = "X"
    }
}

