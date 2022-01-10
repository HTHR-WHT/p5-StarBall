function makeStartStars() {
  for (let i = 0; i < 500; i++) {
    push();
    translate(starPosArray[i].x, starPosArray[i].y);
    rotate(frameCount / 200.0);
    star(0, 0, 2.25, starSizeArray[i].y, 6);
    pop();
  }
}

function randomizeStarData() {
  for (let i = 0; i < 500; i++) {
    let randomX = int(random(-width, SCENE_W + width));
    let randomY = int(random(-height, SCENE_H + height));
    let randomW = int(random(10, 100));
    let randomH = int(random(10, 100));
    let starVector = createVector(randomX, randomY);
    let sizeVector = createVector(randomW, randomH);

    starPosArray.push(starVector);
    starSizeArray.push(sizeVector);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// function starBallStart() {
//   let starball = createDiv("STARBALL");
//   starball.style("font-family", "assets/PermanentMarker-Regular.ttf");
//   starball.style("font-size", "111px");
//   starball.style("color", "#EE82EE");
//   starball.position(width / 2, height / 2);
// //   push();
// //   fill(255);
// //   textSize(100);
// //   text(
// //     starball.position.x + " " + starball.position.y,
// //     width / 2,
// //     starball.position.y - 100
// //   );
// //   pop();
// }
