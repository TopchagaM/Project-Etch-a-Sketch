let grid_container = document.getElementById("grid-container");
let gridSize = 16;

function gridReset()
{
    gridSize = prompt("Enter grid size (1 to 100): ", "16");
    gridSize = gridSize < 101 ? gridSize : 100;
    const squareSize = 720 / gridSize;
    grid_container.innerHTML = "";
    for (let i = 0; i < (gridSize * gridSize); i++)
    {
        const square = document.createElement('div');
        square.classList.add("square")
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover" , function(){
            this.classList.add("passedOver");
        });
        grid_container.appendChild(square)
    }
    
}