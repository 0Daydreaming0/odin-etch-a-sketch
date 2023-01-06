const container = document.querySelector('.container');

const sizeGrid = 8;

const createGrid = (sizeGrid) => {
    for( let i = 0; i < sizeGrid; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for( let j = 0; j < sizeGrid; j++){
            const widthAndHeight = 960 / sizeGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('gird-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox);
        }

        container.appendChild(row);
    }

}

createGrid(sizeGrid)