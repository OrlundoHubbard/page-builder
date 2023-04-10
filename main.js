const canvas = document.getElementById('canvas');

function addText() {
    const text = document.createElement('div');
    text.innerText = 'Enter Text here';
    canvas.appendChild(text);
}

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