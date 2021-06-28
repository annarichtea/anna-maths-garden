const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;
var mousehold = false;

var canvas;
var context;

function clearCanvas() {
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;
  mousehold = false;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function prepareCanvas() {
  //console.log('Preparing canvas');
  canvas = document.getElementById('my-canvas');
  context = canvas.getContext('2d');
  context.fillStyle = BACKGROUND_COLOUR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  context.strokeStyle = LINE_COLOUR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = 'round';

  document.addEventListener('mousedown', function(event) {
    //console.log('Mouse pressed');
    mousehold = true;
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
  });

  document.addEventListener('mouseup', function(event) {
    //console.log('Mouse released');
    mousehold = false;
  });

  canvas.addEventListener('mouseout', function(event) {
    //console.log('Mouse left canvas');
    mousehold = false;
  });

  document.addEventListener('mousemove', function(event) {
    if(mousehold) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;
      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;
    // console.log(`Current X: ${currentX}`);
    // console.log(`Current Y: ${currentY}`);
      draw();
    }
  });

  canvas.addEventListener('touchstart', function(event) {
    //console.log('Touch start');
    mousehold = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
  });

  canvas.addEventListener('touchend', function(event) {
    //console.log('Touch end');
    mousehold = false;
  });

  canvas.addEventListener('touchcancel', function(event) {
    //console.log('Finger left canvas');
    mousehold = false;
  });

  canvas.addEventListener('touchmove', function(event) {
    if(mousehold) {
      previousX = currentX;
      currentX = event.touches[0].clientX - canvas.offsetLeft;
      previousY = currentY;
      currentY = event.touches[0].clientY - canvas.offsetTop;
    // console.log(`Current X: ${currentX}`);
    // console.log(`Current Y: ${currentY}`);
    draw();
    }
  });
}

function draw() {
  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(currentX, currentY);
  context.closePath();
  context.stroke();
}
