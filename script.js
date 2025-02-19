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

        let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        square.style.backgroundColor = randomColor;
        square.style.opacity = '0';

        square.addEventListener('mouseover', ()=> {
            square.classList.add('gridSquare-hover')
            square.style.opacity = `${Number(square.style.opacity)+0.1}`
        });

        grid.appendChild(square);
    }
}

