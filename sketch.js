//main sketch

let ball;
let face;
let alienFace;
// let starCandy;
let space;
let clouds;
// let alien;
let aliens;
let spaceCandy;
let spaceCandys;
let canvas;
let started = false;
let SCENE_W = 5000;
let SCENE_H = 10000;

function preload() {
  face = loadImage("assets/face.png");
  alienFace = loadImage("assets/alien.png");
  // starCandy = loadImage("assets/starCandy.png");
  ballFont = loadFont("assets/FredokaOne-Regular.ttf");
  startFont = loadFont("assets/PermanentMarker-Regular.ttf");
}

function setup() {
  textAlign(CENTER);
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.mouseClicked(playClick);
  makeBallSprite();
  bigBang();
  makeClouds();
  makeAlienSprites();
  makeSpaceCandySprites();
}

function playClick() {
  started = true;
}

// function keyPressed() {
//   if (key === " ") {
//     started = false;
//   }
// }

function draw() {
  background(0);
  //draw the scene
  //stars first
  drawSprites(space);

  if (!started) {
    // STARBALL text;
    let wave = sin(radians(frameCount * 5));
    push();
    fill(238, 130, 238);
    textSize(150);
    textFont(startFont);
    text("STARBALL", width / 2, height / 2 + wave * 3);
    pop();
    // play text
    push();
    fill(255, 0, 255);
    textSize(40);
    textFont("sans-serif");
    text("START", width / 2, height / 1.75);
    pop();
  } else {
    //set the camera position to the ball position
    camera.position.x = ball.position.x;
    camera.position.y = ball.position.y;
    //mouse trailer, the speed is inversely proportional to the mouse distance
    ball.velocity.x = (camera.mouseX - ball.position.x) / 20;
    ball.velocity.y = (camera.mouseY - ball.position.y) / 20;

    //a camera is created automatically at the beginning
    //.5 zoom is zooming out (50% of the normal size)
    if (mouseIsPressed) camera.zoom = 0.25;
    else camera.zoom = 0.6;

    //limit the sprite movements
    checkBoundaries(ball);
    bounceBoundaries(aliens);
    //then ball
    drawSprite(ball);
    //then aliens
    drawSprites(aliens);
    //clouds next
    drawSprites(clouds);
    //then spaceCandys
    drawSprites(spaceCandys);

    //when ball passes through clouds
    if (ball.overlap(clouds)) {
      push();
      fill(255, 255, 0);
      textSize(33);
      textFont(ballFont);
      text("YEEEEHAW!", ball.position.x + 15, ball.position.y + -75);
      pop();
    }

    //when ball bumps into aliens
    if (ball.overlap(aliens)) {
      push();
      fill(255, 255, 0);
      textSize(33);
      textFont(ballFont);
      text("POW!", ball.position.x + 15, ball.position.y + -75);
      pop();
    }

    aliens.bounce(ball, spin);
    aliens.rotation = 1;

    aliens.bounce(aliens, spin);
    aliens.rotation = 2;

    function spin(ball) {
      aliens.velocity = 0.25;
      ball.rotationSpeed = 1;
    }

    //when ball eats spaceCandys
    if (ball.overlap(spaceCandys)) {
      push();
      fill(255, 255, 0);
      textSize(33);
      textFont(ballFont);
      text("NOM! NOM! NOM!", ball.position.x + 15, ball.position.y + -75);
      pop();
    }

    ball.overlap(spaceCandys, eat);

    function eat(ball, group) {
      group.remove();
    }

    //I can turn on and off the camera at any point to restore
    //the normal drawing coordinates, the frame will be drawn at
    //the absolute 0,0 (try to see what happens if you don't turn it off
    camera.off();
  }
}
