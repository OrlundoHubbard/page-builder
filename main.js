const canvas = document.getElementById('canvas');

function addText() {
    const text = prompt('Enter text');
    if (text) {
        const newText = document.createElement('div');
        newText.innerText = text;
        canvas.appendChild(newText);
        addDragListeners(newText);
    }
}

addText();

function addImage() {
    const image = document.createElement('img');
    image.src = 'image.jpg';
    canvas.append(image);
}

function addButton() {
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    canvas.appendChild(button);
}

document.getElementById('add-text').addEventListener('click', addText);
document.getElementById('add-image').addEventListener('click', addImage);
document.getElementById('add-button').addEventListener('click', addButton);