// function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
//   canvasContext.fillStyle = fillColor;
//   canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
// }

// var meterX = 50;
// var meterY = 10;
// var meterCharge = meterX;

var canvas, canvasContext;
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

var zurgSize = 1.5, frame1x = 0, frame1y = 0, holdingDown = false, holdingUp = false, holdingLeft = false, holdingRight = false,
  backgroundImage = new Image(), zurg = new Image(), zurgx = 10, zurgy = 150, zurgDirection = 'down';

backgroundImage.src = 'sprites/background.png'; zurg.src = 'sprites/zurgdudemaster.png';


window.onload = function () {
  var framesPerSecond = 12;
  setInterval(doStuff, 1000 / framesPerSecond);
};

function doStuff() {
  canvasContext.drawImage(backgroundImage, 0, 0);

  canvasContext.imageSmoothingEnabled = false;


  canvasContext.drawImage(zurg, frame1x, frame1y, 32, 64, (zurgx - (16 * (zurgSize - 1))), (zurgy - (32 * (zurgSize - 1))), 32 * zurgSize, 64 * zurgSize);
  animate();

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 40) holdingDown = true;
    if (e.keyCode == 39) holdingRight = true;
    if (e.keyCode == 38) holdingUp = true;
    if (e.keyCode == 37) holdingLeft = true;
  });
  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 40) holdingDown = false;
    if (e.keyCode == 39) holdingRight = false;
    if (e.keyCode == 38) holdingUp = false;
    if (e.keyCode == 37) holdingLeft = false;
  });
}

function checkSize(y) {
  if (y <= 190) {
    zurgSize = 1.5;
  } else if (y > 180 && y <= 230) {
    zurgSize = 1.7;
  } else if (y > 230 && y <= 280){
    zurgSize = 1.9;
  } else if (y > 280 && y <= 330){
    zurgSize = 2.1;
  } else if (y > 330 && y <= 380){
    zurgSize = 2.3;
  } else if (y > 380 && y <= 430){
    zurgSize = 2.5;
   }else {
    zurgSize = 2.7;
  }
}

function animate() {
  if (holdingDown) {
    zurgDirection = 'down';
    frame1y = 0;

    if (frame1x < 176 || frame1x > 460) {
      frame1x = 176;
    } else {
      frame1x += 32;
    }
    if (zurgy < 475)
      zurgy += 7;
    checkSize(zurgy);
  }
  if (holdingRight) {
    zurgDirection = 'right';
    frame1y = 64;

    if (frame1x < 176 || frame1x > 460) {
      frame1x = 176;
    } else {
      frame1x += 32;
    }
    if (zurgx < 730) {
      zurgx += 10;
    }
  }
  if (holdingUp) {
    zurgDirection = 'up';
    frame1y = 193;

    if (frame1x < 176 || frame1x > 460) {
      frame1x = 176;
    } else {
      frame1x += 32;
    }
    if (zurgy > 120) {
      zurgy -= 7;
      checkSize(zurgy);
    }
  }
  if (holdingLeft) {
    console.log(frame1x);
    zurgDirection = 'left';
    frame1y = 128;
    if (frame1x < 176 || frame1x > 460) {
      frame1x = 176;
    } else {
      frame1x += 32;
    }
    if (zurgx > 7) {
      zurgx -= 10;
    }
  }

  if (!holdingDown && !holdingRight && !holdingUp && !holdingLeft) {
    if (zurgDirection == 'down') {
      frame1x = 0;
      frame1y = 0;
    } else if (zurgDirection == 'right') {
      frame1y = 0;
      frame1x = 64;
    } else if (zurgDirection == 'left') {
      frame1y = 0;
      frame1x = 96;
    } else if (zurgDirection == 'up') {
      frame1y = 0;
      frame1x = 128;
    }
  }
}

// function drawMeter(){

//   canvasContext.fillStyle = 'black';
//   canvasContext.fillRect(meterX,meterY, 250,20);
//   canvasContext.fillStyle = 'green';
//   canvasContext.fillRect(295,15, 1,10);

//   if(holding){

//     canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(meterCharge,meterY, 1,20);
//     meterCharge +=8;

//   } else {
//     console.log(meterCharge);
//     meterCharge = meterX;
//   }

// }
