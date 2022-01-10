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
  if (sprite.position.x < -width) sprite.position.x = -width;
  if (sprite.position.y < -height) sprite.position.y = -height;
  if (sprite.position.x > SCENE_W + width) sprite.position.x = SCENE_W + width;
  if (sprite.position.y > SCENE_H + height)
    sprite.position.y = SCENE_H + height;
}

function bounceBoundaries(sprites) {
  for (let i = 0; i < sprites.length; i++) {
    if (sprites[i].position.x < -width) sprites[i].velocity.x *= -1;
    if (sprites[i].position.y < -height) sprites[i].velocity.y *= -1;
    if (sprites[i].position.x > SCENE_W + width) sprites[i].velocity.x *= -1;
    if (sprites[i].position.y > SCENE_H + height) sprites[i].velocity.y *= -1;
  }
}
