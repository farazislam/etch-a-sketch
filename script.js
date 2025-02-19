const grid = document.querySelector('.grid');
const button = document.querySelector('.button')

createGrid(16);

button.addEventListener('click', ()=> {
    const newGrid = prompt('Please enter a new grid size (not greater than 100)');
    grid.replaceChildren();
    createGrid(parseInt(newGrid));
})


function createGrid(number) {

    const gridSize = number * number;

    for(let i=0; i<gridSize; i++) {
        let square = document.createElement("div");
        square.classList.add('gridSquare');
        square.style.height = `${960/number}px`;
        square.style.width = `${960/number}px`;
        square.addEventListener('mouseover', ()=> square.classList.add('gridSquare-hover'));

        grid.appendChild(square);
    }
}

