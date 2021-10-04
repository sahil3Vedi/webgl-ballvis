function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  createEasyCam()
  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }
}

function draw(){
  background(51);
  rotateX(PI/2);
  rotateZ(PI/2);
  //rotateY(-PI/8);
  // plotting axes
  stroke(255,0,0);
  line(0,0,0,500,0,0);
  stroke(0,255,0);
  line(0,0,0,0,500,0);
  stroke(0,0,255);
  line(0,0,0,0,0,500);
  // plotting pitch-ground plane
  fill(0,200,0);
  noStroke();
  plane(500,500);
  fill(237,237,130);
  box(100,500,10);
  // plotting the stumps
  push();
  stroke(0);
  translate(0,245,55);
  fill(255);
  box(8,8,100);
  translate(15,0,0);
  box(8,8,100);
  translate(-30,0,0);
  box(8,8,100);
  pop();
  // finally, plotting the ball
  fill(255,0,0);
  translate(0,0,100);
  sphere(6);
}
