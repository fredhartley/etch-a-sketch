
const gridContainer = document.getElementById("grid-container")
const gridSlider = document.getElementById("grid-slider")
let gridSize = document.getElementById("grid-slider").value
const colorModeBtn = document.getElementById('color-mode-btn');
const rainbowModeBtn = document.getElementById('rainbow-mode-btn');
const resetBtn = document.getElementById('reset-mode-btn');
const colorPicker = document.getElementById('color-picker');
const optionsContainer = document.getElementById('options-container');

// Set it by default to color mode
let currentColorMode = 1;

function generateGrid(gridSize) {
    const gridItems = document.querySelectorAll(".grid__item");
    let containerHW = 400 / parseInt(gridSize);
    gridSize = gridSize * gridSize

    gridItems.forEach(element => element.remove());

    for (let i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid__item");
        gridElement.style.height = `${containerHW}px`;
        gridElement.style.width = `${containerHW}px`;
        // gridElement.addEventListener()
        gridContainer.append(gridElement);
        changeColorMode(gridElement)
    }
}

// Generates random number for each rgb value of the rainbow mode
function raindowColorGenerate() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
}

function changeColorMode(element) {
    if (currentColorMode === 1) {
        // colour mode
        element.addEventListener('click', () => {
            element.style.backgroundColor = colorPicker.value;
        });        
    }
    else if (currentColorMode === 2) {
        // rainbow mode 
        element.addEventListener('click', () => {
            let rgbValues = raindowColorGenerate();
            let [red, green, blue] = rgbValues;

            element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });  
    }
    // if color mode active, if rainbow mode active, if eraser mode active
}

function setGridItemColorFromPickerClickEvent(element) {
    element.addEventListener('click', () => {
        element.style.backgroundColor = colorPicker.value;
    });
}

colorModeBtn.addEventListener('click', () => {
    currentColorMode = 1;
    console.log(currentColorMode)
})

rainbowModeBtn.addEventListener('click', () => {
    currentColorMode = 2;
    console.log(currentColorMode)
})

resetBtn.addEventListener('click', () => {
    resetAction()
})

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
