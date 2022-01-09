//ball sprite logic

function makeBallSprite() {
  ball = createSprite(400, 200, 5, 5);

  ball.draw = function () {
    //the center of the sprite will be point 0,0
    //"this" in this function will reference the sprite itself

    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    push();
    rotate(radians(this.getDirection()));
    for (i = 0; i < 100; i += 10) {
      fill(255, 0, 255, 10); // transparent
      ellipse(0, 0, 105 + this.getSpeed() + i, 105 - this.getSpeed() + i);
    }
    fill(186, 85, 211);
    ellipse(0, 0, 100 + this.getSpeed(), 100 - this.getSpeed());
    pop();
    face.resize(45, 0);
    image(face, this.deltaX * 2, this.deltaY * 2);
  };

  ball.maxSpeed = 20;
}

// function yeehaw() {
//   push();
//   let yeehaw = createDiv("yeeeeHAW!");
//   yeehaw.style("font-size", "33px");
//   yeehaw.style("color", "#ADFF2F");
//   pop();
// }
