var BALL_DIAMATER = 30;

var gameState = {
  playerPaddlePos : 0,
  computerPaddlePos : 0,
  ballX : 320,
  ballY : 320,
  ballXV : 2,
  ballYV : 0
};

// render frame
function display() {
  $('#ball').css('top', gameState.ballY);
  $('#ball').css('left', gameState.ballX);
  $('#playerPaddle').css('top', gameState.playerPaddlePos);
  $('#computerPaddle').css('top', gameState.computerPaddlePos);
}

// calculate frame
function step() {
  gameState.ballX += gameState.ballXV;
  gameState.ballY += gameState.ballYV;
}

function frame() {
  step();
  display();
  console.log("swag");
}

console.log("yolo");
setInterval(frame, 30);