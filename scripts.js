const gridContainer = document.querySelector(".grid-container")

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
       // create element
       const gridElement = document.createElement("div")
       // assign it a class of grid-item
       gridElement.classList.add("grid__item")
       // append it to the grid container
       gridContainer.append(gridElement)
} }

// set it so that the grid is 16x16 on load
// Do I want to do this by fetching the value from the slider?
document.addEventListener("DOMContentLoaded", () => {
    // call gridGenerate with a value of 16
})

// connect to slider
