const grid = document.querySelector('.grid');
const button = document.querySelector('.button')

createGrid(20);

function createGrid(number) {

    const gridSize = number * number;

    for(let i=0; i<gridSize; i++) {
        let square = document.createElement("div")
        square.classList.add('gridSquare')
        square.style.height = `${960/number}px`
        square.style.width = `${960/number}px`
        square.addEventListener('mouseover', ()=> square.classList.add('gridSquare-hover'))

        grid.appendChild(square);
    }
}

