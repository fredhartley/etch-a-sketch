
const gridContainer = document.getElementById("grid-container")
const gridSlider = document.getElementById("grid-slider")
let gridSize = document.getElementById("grid-slider").value
// const colorModeBtn = document.getElementById('color-mode-btn');
// const rainbowModeBtn = document.getElementById('rainbow-mode-btn');
const resetBtn = document.getElementById('reset-mode-btn');
const colorPicker = document.getElementById('color-picker');
const optionsContainer = document.getElementById('options-container');

// Set it by default to color mode
let currentColorMode = 1;

function generateGrid(gridSize) {
    const gridItems = document.querySelectorAll(".grid__item");
    let gridContainerWidth = (gridContainer.offsetWidth - 2)
    console.log(gridContainerWidth)
    let squareHW = gridContainerWidth / parseInt(gridSize);
    gridSize = gridSize * gridSize

    gridItems.forEach(element => element.remove());

    for (let i = 0; i < gridSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid__item");
        gridElement.style.height = `${squareHW}px`;
        gridElement.style.width = `${squareHW}px`;
        // gridElement.addEventListener()
        gridContainer.append(gridElement);
        changeColorMode(gridElement)
    }
}
let mediaQueryDesktop = window.matchMedia('(min-width: 992px)');
let mediaQueryTabletSmall = window.matchMedia('(min-width: 600px) and (max-width: 767px)');
let mediaQueryTabletBig = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
let mediaQueryMobile = window.matchMedia('(max-width: 599px)');

function handleViewportChange() {
  if (mediaQueryDesktop.matches || mediaQueryTabletSmall.matches || mediaQueryTabletBig.matches || mediaQueryMobile.matches) {
    generateGrid(gridSize);
  }
}

handleViewportChange(); // Run initially

mediaQueryDesktop.addEventListener("change", handleViewportChange);
mediaQueryTabletSmall.addEventListener("change", handleViewportChange);
mediaQueryTabletBig.addEventListener("change", handleViewportChange);
mediaQueryMobile.addEventListener("change", handleViewportChange);

// const sliderEl = document.querySelector("#options__slider")

function progressScript() {
  gridSlider.style.background = `linear-gradient(to right, #f50 25%, #ccc 25%)`;
//   gridSlider.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
}

progressScript()

const sliderValue = document.querySelector(".value")

gridSlider.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue + ' x ' + tempSliderValue;

  const progress = (tempSliderValue / gridSlider.max) * 100;

  gridSlider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})


// Generates random number for each rgb value of the rainbow mode
// function rainbowColorGenerate() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     return [red, green, blue];
// }

function changeColorMode(element) {
    if (currentColorMode === 1) {
        // colour mode
        element.addEventListener('click', () => {
            element.style.backgroundColor = colorPicker.value;
        });        
    }
    // else if (currentColorMode === 2) {
    //     // rainbow mode 
    //     element.addEventListener('click', () => {
    //         let rgbValues = rainbowColorGenerate();
    //         let [red, green, blue] = rgbValues;
    //         element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //     });  
    // }
//     // if color mode active, if rainbow mode active, if eraser mode active
}
 
// colorModeBtn.addEventListener('click', () => {
//     currentColorMode = 1;
//     console.log(currentColorMode)
//     changeColorMode()
// })

// rainbowModeBtn.addEventListener('click', () => {
//     currentColorMode = 2;
//     console.log(currentColorMode)
//     changeColorMode()
// })

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

// function setGridItemColorFromPickerClickEvent(element) {
//     element.addEventListener('click', () => {
//         element.style.backgroundColor = colorPicker.value;
//     });
// }
