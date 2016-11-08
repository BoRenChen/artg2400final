var bg, searchInput, time;
function preload(){
  bg = loadImage("assets/landscape.jpeg");
  searchInput = createInput();
}
function setup() {
  createCanvas(600, 600);
  time = new Date();
  //searchInput.position(width/2, height/2);
  //searchInput.style('color:black');
}

function draw() {
  background(bg);
  noFill();
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, height / 3, width / 1.7, 50, 20);  
  textAlign(CENTER);
  text(time.getHours() + ":" + time.getMinutes(), width / 2, height/ 3.5);
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}