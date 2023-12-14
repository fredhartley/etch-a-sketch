// global variables for DOM declared here
const gridContainer = document.getElementById("grid-container")
const gridSlider = document.getElementById("grid-slider")
let gridSize = document.getElementById("grid-slider").value

// count the number of grid items
// if the new value is less, delete them
// if the new value is more, add them

function generateGrid(gridSize) {
    const gridItems = document.querySelectorAll(".grid__item");
    const currentGridSize = gridItems.length
    gridSize = gridSize * gridSize

    if (gridSize > currentGridSize) {
        const divsToAdd = gridSize - currentGridSize;

        for (let i = 0; i < divsToAdd; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid__item");
            gridContainer.append(gridElement);
        }
    } else if (gridSize < currentGridSize) {
        const divsToRemove = currentGridSize - gridSize;

        for (let i = 0; i < divsToRemove; i++) {
            gridContainer.lastElementChild.remove();
        }
    }
}

function generateGrid2(gridSize) {
    const gridItems = document.querySelectorAll(".grid__item");
    const currentGridItems = gridItems.length
    gridSize = gridSize * gridSize

    if (gridSize > currentGridItems) {
        const divsToAdd = gridSize - currentGridItems;
    
        for (let i = 0; i < divsToAdd; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid__item");
            gridContainer.append(gridElement);
        }
    }   else if(gridSize < currentGridItems) {
            const divsToRemove = currentGridItems - gridSize
        
            for (let i = 0; i < divsToRemove; i++) {
                gridContainer.lastElementChild.remove();
            }
    }
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

// connect to slider (add event listener to the slider that calls generateGrid)
