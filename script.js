const pixelBoard = document.getElementById('pixel-board');
const buttonSize = document.getElementById('generate-board');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

function createColor() {
  const boardColor = document.getElementById('color-palette');
  const arrayColor = ['black', randomColor(), randomColor(), randomColor()];
  for (let i = 0; i < arrayColor.length; i += 1) {
    boardColor.children[i].style.backgroundColor = arrayColor[i];
    if (arrayColor[i] === 'black') {
      boardColor.children[0].className = 'color selected';
    } else {
      boardColor.children[i].className = 'color';
    }
  }
}

function boardSize(someBoard) {
  for (let i = 1; i <= someBoard ** 2; i += 1) {
    const createPixel = document.createElement('div');
    pixelBoard.appendChild(createPixel);
    createPixel.className = 'pixel';
    // pixelBoard.style.width = `${(someBoard ** 2) * 10}px`;
  }
}

function clearBoard() {
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function AlertMsg() {
  const someBoard = document.getElementById('board-size').value;
  if (!someBoard) {
    window.alert('Board inválido!');
  }
}

function pixelsBoard() {
  let someBoard = document.getElementById('board-size').value;
  if (someBoard < 5) {
    someBoard = 5;
  } else if (someBoard > 50) {
    someBoard = 50;
  }
  clearBoard();
  boardSize(someBoard);
}

function vqv() {
  buttonSize.addEventListener('click', pixelsBoard);
  buttonSize.addEventListener('click', AlertMsg);
}

function clear() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click', pixelsBoard);
}

function colorPaint(color) {
  const colored = document.querySelector('.selected').style.backgroundColor;
  const coloredPaint = color.target;
  if (color.target.className === 'pixel') {
    coloredPaint.style.backgroundColor = colored;
  }
}

function pixelsPaint() {
  pixelBoard.addEventListener('click', colorPaint);
}

function colorCall(color) {
  document.querySelector('.selected').className = 'color';
  const singleColor = color;
  singleColor.target.className = 'color selected';
}

function selectColor() {
  const colorSelect = document.getElementsByClassName('color');
  for (let i = 0; i < 4; i += 1) {
    colorSelect[i].addEventListener('click', colorCall);
  }
}

window.onload = function init() {
  pixelsBoard();
  createColor();
  selectColor();
  pixelsPaint();
  vqv();
  clear();
};
