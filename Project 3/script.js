document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const inputDegrees = document.getElementById('inputDegrees').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (inputDegrees === '') {
        alert("Please enter a temperature value.");
        return;
    }

    const degrees = inputDegrees;

    let convertedDegrees;

    if (fromUnit === 'celsius' && toUnit === 'F') {
        convertedDegrees = (degrees * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'C') {
        convertedDegrees = (degrees - 32) * 5 / 9;
    } else {
        convertedDegrees = degrees;
    }

    document.getElementById('output').innerText = ` ${convertedDegrees.toFixed(2)}  ${toUnit}`;
}