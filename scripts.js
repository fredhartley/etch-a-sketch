let currentMode

const gridContainer = document.getElementById("grid-container")
const gridSlider = document.getElementById("grid-slider")
let gridSize = document.getElementById("grid-slider").value
const colorModeBtn = document.querySelector('.options__color-mode');
const rainbowModeBtn = document.querySelector('.options__raindow-mode');
const resetBtn = document.querySelector('.options__reset');
const colorPicker = document.getElementById('color-picker');
const optionsContainer = document.getElementById('options-container');

function generateGrid(gridSize) {
    const gridItems = document.querySelectorAll(".grid__item");
    let height = 400 / parseInt(gridSize);
    gridSize = gridSize * gridSize

    gridItems.forEach(element => element.remove());

    for (let i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid__item");
        gridElement.style.height = `${height}px`;
        gridElement.style.width = `${height}px`;
        // gridElement.addEventListener(changeColor)
        gridContainer.append(gridElement);
    }
}

function changeColor(e) {
    if (currentMode === rainbowModeBtn) {

    }
    else if (currentMode === colorModeBtn) {

    }
    // if color mode active, if rainbow mode active, if esracer mode active
}

function setGridItemColorFromPickerClickEvent(element) {
    element.addEventListener('click', () => {
        element.style.backgroundColor = colorPicker.value;
    });
}

optionsContainer.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.classList[0]) {
        case 'options__raindow-mode':
            currentMode = rainbowModeBtn;
            break;
        case 'options__color-mode':
            currentMode = colorModeBtn;
            break;
        case 'options__reset':
            resetAction();
            break;
    }
});

function resetAction() {
    let elements = document.querySelectorAll('.grid__item')
    elements.forEach(function(element) {
        element.style.backgroundColor = 'white';
      });
}

// set it so that the grid is 16x16 on load
// do I want to do this by fetching the value from the slider?
document.addEventListener("DOMContentLoaded", () => {
    generateGrid(gridSize)
    // call gridGenerate with a value of 16
})

gridSlider.addEventListener("input", (e) => {
        gridSize = e.target.value
        generateGrid(gridSize)
})
