const container = document.querySelector('.container');
const resetButton = document.querySelector('button')

const createGrid = (sizeGrid) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

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
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('what dimension do you want for the new gird'));
    
    while(userSize > 100){
        userSize = Number(prompt('Pick a smaller number less than 100'));

    }
    const wrapper = document.querySelector('.wrapper')
    
    if(!wrapper) {
        createGrid(userSize);
     } else {
        wrapper.remove();
        createGrid(userSize);
     }
})