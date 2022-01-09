function makeClouds() {
  // make some clouds
  clouds = new Group();

  for (let i = 0; i < 77; i++) {
    let cloudPoofData = [];
    let cloud = createSprite(
      random(-width, SCENE_W + width), //width is canvas (display) Width: 1440
      random(-height, SCENE_H + height) //height is canvas (display) Height: 900
    );
    //a single cloud is made of 22 ellipses
    //loop to create each ellipse with random positions
    for (let j = 0; j < 22; j++) {
      cloudPoofData.push({
        poofX: int(random(-222, 222)),
        poofY: int(random(-33, 3)),
        poofD: int(random(33, 333)),
      });
    }
    cloud.draw = function () {
      push();
      noStroke();
      fill(222, 44);
      translate(0, 0);
      for (let h = 0; h < cloudPoofData.length - 1; h++) {
        ellipse(
          cloudPoofData[h].poofX,
          cloudPoofData[h].poofY,
          cloudPoofData[h].poofD
        );
      }
      pop();
    };
    clouds.add(cloud);
  }
}
