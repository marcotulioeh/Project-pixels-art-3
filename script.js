const createColorPalette = document.getElementById('color-palette');

function createColor() {
  for (let i = 0; i < 4; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('color');
    createColorPalette.appendChild(createDiv);
  }
  const colorPaletas = document.querySelectorAll('.color');
  colorPaletas[0].classList.add('selected');
  colorPaletas[0].style.background = 'black';
  colorPaletas[1].style.background = 'red';
  colorPaletas[2].style.background = 'blue';
  colorPaletas[3].style.background = 'green';
}
createColor();

function colorPixel(event) {
  const pixelSelect = event.target;
  pixelSelect.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function selectedColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const pixelBord = document.getElementById('pixel-board');

function createPixel() {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBord.appendChild(pixel);
    pixel.addEventListener('click', colorPixel);
  }
}

createPixel();
