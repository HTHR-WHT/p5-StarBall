//make alien sprites

function makeAlienSprites() {
  aliens = new Group();

  //create some aliens
  for (let i = 0; i < 33; i++) {
    //create a sprite
    let alien = createSprite(
      random(-width, SCENE_W + width), //width is canvas (display) Width: 1440
      random(-height, SCENE_H + height) //height is canvas (display) Height: 900
    );
    alien.setCollider("rectangle", 0, 0, 125, 125);
    alien.mass = 5;
    alien.maxSpeed = 20;
    push();
    alien.draw = function () {
      fill(50, 205, 50);
      rect(0, wave * 8, 100, 100, 10);
      alienFace.resize(85, 0);
      //   image(alienFace, this.x, this.y);
      image(alienFace, this.deltaX * 2, this.deltaY * 2);
    };
    pop();
    aliens.add(alien);
  }
}
