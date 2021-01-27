var ball;
var paddle;

function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 20, 20);
  ball.velocityX=-3
  paddle=createSprite(0,200,20,20)
  paddle.velocityX=+3
}

function draw() {
  background(255,255,255); 

  if(ball.x-paddle.x<ball.width/2+paddle.width/2 && paddle.x-ball.x<ball.width/2+paddle.width/2 && ball.y-paddle.y<ball.height/2+paddle.height/2 && paddle.y-ball.y<ball.height/2+paddle.height/2 ){
    ball.velocityX=+3
    paddle.velocityX=-3
  }
  else{
    ball.shapeColor="black"
    paddle.shapeColor="cyan"
  }

  paddle.debug=true;
  ball.debug=true;

  drawSprites();
}