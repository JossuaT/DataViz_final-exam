let counter = 0;

function decreaseCounter() {
    counter--;
    document.getElementById('counter').innerText = `${counter}`;
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerText = `${counter}`;
}

function increaseCounter() {
    counter++;
    document.getElementById('counter').innerText = `${counter}`;
}

document.getElementById('decreaseButton').addEventListener('click', decreaseCounter);
document.getElementById('resetButton').addEventListener('click', resetCounter);
document.getElementById('increaseButton').addEventListener('click', increaseCounter);
