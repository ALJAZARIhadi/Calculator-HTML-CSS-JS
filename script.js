let display = document.getElementById("input");

function appenToDisplay() {
    display.value += event.target.innerText;
    // console.log(event.target.innerText);
}
function calculate() {
    try {
        display.value = eval(display.value);
        } catch (error) {
        alert("Invalid expression");
        display.value = "Error";
        }
    
}
function clearDisplay() {
    display.value = "";
}