var x = 200
var y = 335

function setup() {
  createCanvas(400, 400);
  console.log("Press the arrow keys on the keyboard to move the circle around");
}

function draw() {
  background(225);
  fill(0, 225, 0, 100);
  rect(0, 350, 400, 75, 50);
  fill(0);
  ellipse(x, y, 25);
  
  // Controls 
  
  if (keyIsDown(UP_ARROW)){
    y -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    y += 5;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  
  // Borders
  
  if (x < 25){
    x += 5;
  }
  
  if (x > 375){
    x -= 5;
  }
  
  if (y < 25){
    y += 5;
  }
  
  if (y > 335){
    y -= 5;
  }
}

