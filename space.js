function bigBang() {
  space = new Group();

  //create some background for visual reference
  for (let i = 0; i < 2222; i++) {
    //create a sprite
    let star = createSprite(
      random(-width, SCENE_W + width), //width is canvas (display) Width: 1440
      random(-height, SCENE_H + height) //height is canvas (display) Height: 900
    );
    //cycles through stars 0 1 2
    star.draw = function () {
      fill(255);
      ellipse(0, 0, 3, 3);
    };
    space.add(star);
  }
}

//SPRITE helpers
function checkBoundaries(sprite) {
  //limit the sprite movements
  if (sprite.position.x < 0) sprite.position.x = 0;
  if (sprite.position.y < 0) sprite.position.y = 0;
  if (sprite.position.x > SCENE_W) sprite.position.x = SCENE_W;
  if (sprite.position.y > SCENE_H) sprite.position.y = SCENE_H;
}
