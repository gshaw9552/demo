// Get the display from the iframe
function getDisplay() {
    return document.querySelector('#display-container iframe').contentWindow.document.getElementById('display');
}

// Press a button
function press(value) {
    const display = getDisplay();
    if (display.value === "0") display.value = value;
    else display.value += value;
}

// Calculate result
function calculate() {
    const display = getDisplay();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Clear display
function clearDisplay() {
    const display = getDisplay();
    display.value = "0";
}
