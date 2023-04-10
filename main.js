const canvas = document.getElementById('canvas');

function addText() {
    const newText = document.createElement('div');
    newText.contentEditable = true;
    newText.classList.add('draggable');
    canvas.appendChild(newText);
    newText.focus();
    addDragListeners(newText);
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