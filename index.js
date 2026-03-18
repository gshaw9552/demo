// Get display input from iframe
function getDisplay() {
    return document.getElementById('display-frame').contentWindow.document.getElementById('display');
}

function press(value) {
    const display = getDisplay();
    if (display.value === "0") display.value = value;
    else display.value += value;
}

function calculate() {
    const display = getDisplay();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    const display = getDisplay();
    display.value = "0";
}