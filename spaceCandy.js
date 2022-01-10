//make SpaceCandy sprites

function makeSpaceCandySprites() {
  spaceCandys = new Group();

  //create some SpaceCandys
  for (let i = 0; i < 55; i++) {
    //create a sprite
    let spaceCandy = createSprite(
      random(-width, SCENE_W + width), //width is canvas (display) Width: 1440
      random(-height, SCENE_H + height) //height is canvas (display) Height: 900
    );
    spaceCandy.setCollider("circle", 0, 0, 30);
    spaceCandy.draw = function () {
      let angle = TWO_PI / 5;
      let halfAngle = angle / 2.0;
      beginShape();
      fill(255, 215, 0);
      // translate(width * 0.8, height * 0.5);
      translate(0, 0);
      rotate(frameCount / -100.0);
      scale(0.5);
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = 0 + cos(a) * 70;
        let sy = 0 + sin(a) * 70;
        vertex(sx, sy);
        sx = 0 + cos(a + halfAngle) * 30;
        sy = 0 + sin(a + halfAngle) * 30;
        vertex(sx, sy);
      }
      endShape(CLOSE);
      // starCandy.resize(70, 0);
      // //   image(alienFace, this.x, this.y);
      // image(starCandy, this.deltaX * 2, this.deltaY * 2);
    };
    spaceCandys.add(spaceCandy);
  }
}

/*
  OG func to draw star--
  SpaceCandy.draw = function () {
        fill(255, 15, 0);
        rect(0, 0, 25, 25, 5);
        // SpaceCandyFace.resize(85, 0);
        // //   image(SpaceCandyFace, this.x, this.y);
        // image(SpaceCandyFace, this.deltaX * 2, this.deltaY * 2);
      };

  p5 example...    

  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);

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
  */
