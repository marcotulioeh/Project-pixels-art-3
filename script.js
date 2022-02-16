// Adicione à página uma paleta contendo quatro cores distintas.
// Adicione a cor preta como a primeira cor da paleta de cores.
const createColorPalette = document.getElementById('color-palette');

function createColor() {
  for (let i = 0; i < 4; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('color');
    createColorPalette.appendChild(createDiv);
  }
  const colorPaletas = document.querySelectorAll('.color');
  colorPaletas[0].style.background = 'black';
  colorPaletas[1].style.background = 'red';
  colorPaletas[2].style.background = 'blue';
  colorPaletas[3].style.background = 'green';
}
createColor();

// Adicione à página um quadro de pixels, com 25 pixels.
const pixelBord = document.getElementById('pixel-board');

function createPixel() {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBord.appendChild(pixel);
  }
}
createPixel();

// Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
const selectedBlack = document.querySelectorAll('.color')[0];
selectedBlack.classList.add('selected');

// Adiciona e muda a classe 'selected' ao selecionar a cor na paleta.
const selectPalette = document.querySelectorAll('.color');

function removeSelected() {
  for (let i = 0; i < selectPalette.length; i += 1) {
    selectPalette[i].classList.remove('selected');
  }
}

// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
function addSelected(color) {
  removeSelected();
  color.target.classList.add('selected');
}

// Adiciona click nas 4 cores da paleta de cores.
for (let i = 0; i < selectPalette.length; i += 1) {
  selectPalette[i].addEventListener('click', addSelected);
}

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function pixelPaint(square) {
  const squareTarget = square.target;
  squareTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

// Adiciona click nos pixels em branco.
for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
  document.querySelectorAll('.pixel')[i].addEventListener('click', pixelPaint);
}

// Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function buttonClear() {
  const squadAll = document.querySelectorAll('.pixel');
  for (let i = 0; i < squadAll.length; i += 1) {
    squadAll[i].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', buttonClear);
