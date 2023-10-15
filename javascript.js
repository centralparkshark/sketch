// need to change these to ask for input 
let columns = prompt("Enter the size of your grid:");
let rows = columns; 

function colorRandom() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

if (columns < 1 || columns > 100) {
    alert("Enter a number between 1 and 100.");
} else {
    for(let i = 0; i < columns; i++) {
        // create columns 
        const column = document.createElement('div');
        column.className = 'column';
        for(let j = 0; j < rows; j++) {
            // creates blocks in each column
            let gridBlock = document.createElement('div');
            gridBlock.className = 'row';
            column.appendChild(gridBlock);
        }
        document.getElementById('container').appendChild(column);
    }
}


let blocks = document.querySelectorAll('div');
for (let k = 0; k < blocks.length; k++) {
    blocks[k].addEventListener('mouseover', () => {
        blocks[k].style.backgroundColor = colorRandom();
    });
} 


