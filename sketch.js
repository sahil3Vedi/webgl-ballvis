//import Ball from ball;

let ball1;
let ball2;
let ball3;
let aZ = 0;

let cam;

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  cam = new Dw.EasyCam();
  cam.setZoomScale(100)
  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }
  ball1 = new Ball(0,-250,100,0,50,0,0,250,50,3,255,0,0);
  ball2 = new Ball(0,-250,100,25,0,0,-50,250,50,3,237, 237, 130);
  ball3 = new Ball(-50,-250,100,-20,-50,0,0,250,20,3,-50,0,255);
}

function draw(){
  background(51);
  rotateX(PI/2);
  rotateZ(aZ);
  translate(0,0,-200);
  //rotateY(-PI/8);

  // plotting axes
  push();
  stroke(255,0,0);
  //line(0,0,0,500,0,0);
  stroke(0,255,0);
  //line(0,0,0,0,500,0);
  stroke(0,0,255);
  //line(0,0,0,0,0,500);
  pop();

  // plotting pitch-ground plane
  push();
  fill(38, 181, 16);
  noStroke();
  plane(1000,1000);
  fill(196, 196, 151);
  translate(0,0,-4);
  box(100,500,10);
  pop();

  // plotting the stumps
  push();
  stroke(0);
  translate(0,245,51);
  fill(255);
  box(8,8,100);
  translate(15,0,0);
  box(8,8,100);
  translate(-30,0,0);
  box(8,8,100);
  pop();

  // finally, plotting the ball
  ball1.show();
  ball1.move();
  ball2.move();
  ball2.show();
  ball3.move();
  ball3.show();

  // increment rotation angle
  aZ += 0.0025;
}
