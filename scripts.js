
const gridContainer = document.getElementById("grid-container")
const gridSlider = document.getElementById("grid-slider")
let gridSize = document.getElementById("grid-slider").value
const resetBtn = document.getElementById('reset-mode-btn');
const colorPicker = document.getElementById('color-picker');
const optionsContainer = document.getElementById('options-container');

// Set it by default to color mode
let currentColorMode = 1;

function generateGrid(gridSize) {
  // Wait for the grid container to be fully rendered
  setTimeout(() => {
    const gridItems = document.querySelectorAll(".grid__item");
    let gridContainerWidth = gridContainer.clientWidth;    
    console.log(gridContainerWidth);

    let squareHW = gridContainerWidth / parseInt(gridSize);
    let totalGridItems = parseInt(gridSize) * parseInt(gridSize);

    gridItems.forEach((element) => element.remove());

    for (let i = 0; i < totalGridItems; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid__item");
      gridElement.style.height = `${squareHW}px`;
      gridElement.style.width = `${squareHW}px`;
      gridContainer.append(gridElement);
      changeColorMode(gridElement);
    }
  }, 0);
}

window.addEventListener('load', () => {
  generateGrid(gridSize);
});

gridSlider.addEventListener("input", (e) => {
      gridSize = e.target.value
      generateGrid(gridSize)
})

let mediaQueryDesktop = window.matchMedia('(min-width: 992px)');
let mediaQueryTabletSmall = window.matchMedia('(min-width: 600px) and (max-width: 767px)');
let mediaQueryTabletBig = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
let mediaQueryMobile = window.matchMedia('(max-width: 599px)');

function handleViewportChange() {
  if (mediaQueryDesktop.matches || mediaQueryTabletSmall.matches || mediaQueryTabletBig.matches || mediaQueryMobile.matches) {
    let currentGridSize = gridSlider.value;
    console.log(currentGridSize);
    generateGrid(currentGridSize);
  }
}

handleViewportChange(); 

mediaQueryDesktop.addEventListener("change", handleViewportChange);
mediaQueryTabletSmall.addEventListener("change", handleViewportChange);
mediaQueryTabletBig.addEventListener("change", handleViewportChange);
mediaQueryMobile.addEventListener("change", handleViewportChange);

function progressScript() {
  gridSlider.style.background = `linear-gradient(to right, #f50 25%, #ccc 25%)`;
}

progressScript()

const sliderValue = document.querySelector(".value")

gridSlider.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue + ' x ' + tempSliderValue;

  const progress = (tempSliderValue / gridSlider.max) * 100;

  gridSlider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})

function changeColorMode(element) {
    if (currentColorMode === 1) {
        // colour mode
        element.addEventListener('click', () => {
            element.style.backgroundColor = colorPicker.value;
        });        
    }
}
 
resetBtn.addEventListener('click', () => {
    resetAction()
})

function resetAction() {
    let elements = document.querySelectorAll('.grid__item')
    elements.forEach(function(element) {
        element.style.backgroundColor = 'white';
      });
}
