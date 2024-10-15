function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    const result = Math.sqrt(eval(display.value));
    display.value = result;
}

function calculatePow() {
    const display = document.getElementById('display');
    const result = Math.pow(eval(display.value), 2);
    display.value = result;
}

function calculateSin() {
    const display = document.getElementById('display');
    const result = Math.sin(eval(display.value) * (Math.PI / 180)); // Convert to radians
    display.value = result;
}

function calculateCos() {
    const display = document.getElementById('display');
    const result = Math.cos(eval(display.value) * (Math.PI / 180)); // Convert to radians
    display.value = result;
}

function calculateTan() {
    const display = document.getElementById('display');
    const result = Math.tan(eval(display.value) * (Math.PI / 180)); // Convert to radians
    display.value = result;
}
