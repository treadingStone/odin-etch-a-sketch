function generateRandomHex() {
    const validHex = 'ABCDEF1234567890';
    let randomHex = '';
    for (let x = 0; x < 6; x++) {
        randomHex += validHex[Math.floor(Math.random() * validHex.split('').length)];
    };
    return randomHex;
};

function generateGrid(size) {
    const gridContainerSize = 500;

    const body = document.querySelector('body');

    const gridContainer = document.createElement('div');

    gridContainer.classList.add('grid-container');
    gridContainer.style.width = `${gridContainerSize}px`;
    gridContainer.style.height = `${gridContainerSize}px`;

    gridContainer.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = `#${generateRandomHex()}`
        };
    });

    for (let x = 0; x < (size * size); x++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.width = `${gridContainerSize / size}px`;
        gridSquare.style.height = `${gridContainerSize / size}px`;
        // gridSquare.style.border = '1px solid black';
        gridContainer.appendChild(gridSquare);
        gridSquare.classList.add('square');
    };
    body.appendChild(gridContainer);
};

generateGrid(16);