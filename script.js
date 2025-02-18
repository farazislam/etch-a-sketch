const grid = document.querySelector('.grid');

createGrid();

function createGrid() {
    for(let i=0; i<256; i++) {
        let square = document.createElement("div")
        square.classList.add('gridSquare')
        square.addEventListener('mouseover', ()=> square.classList.toggle('gridSquare-hover'))

        grid.appendChild(square);
    }
}