//import Ball from ball;

// 752 Units: 2256 cm
// 1 unit: 3 cm

let STUMPS = 335;

let ball1;
let ball2;
let ball3;

let fwd = 0;
let aZ = 0;

let cam;
let img1;
let img2;

function preload() {
  img1 = loadImage('https://pbs.twimg.com/media/DHhxaH7XkAAOx8l.jpg');
  img2 = loadImage('https://i.imgur.com/VeoxaXg.jpeg');
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  //cam = new Dw.EasyCam();
  createEasyCam();
  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }
  ball1 = new Ball(15,-STUMPS,67,0,200,0,0,STUMPS,0,2,176, 0, 23);
  ball2 = new Ball(15,-STUMPS,67,5,STUMPS,0,3,STUMPS,0,2,240, 229, 24);
  ball3 = new Ball(-25,-STUMPS,67, 0,300,0,-3,STUMPS,0,2,0, 63, 255);
}

function draw(){
  background(51);
  rotateX(PI/2);
  rotateZ(aZ);
  translate(0,0,-63);
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
  fill(40, 173, 10);
  noStroke();
  //texture(img2);
  circle(0,0,4572);
  fill(224, 187, 112);
  translate(0,0,-4);
  //texture(img1);
  box(102,752,10);
  pop();

  // plotting the stumps
  push();
  strokeWeight(2);
  stroke(255);
  line(0,STUMPS,1,0,STUMPS,24);
  translate(3,0,0);
  line(0,STUMPS,1,0,STUMPS,24);
  translate(-6,0,0);
  line(0,STUMPS,1,0,STUMPS,24);
  translate(3,0,0);
  line(0,-STUMPS,1,0,-STUMPS,24);
  translate(3,0,0);
  line(0,-STUMPS,1,0,-STUMPS,24);
  translate(-6,0,0);
  line(0,-STUMPS,1,0,-STUMPS,24);
  translate(3,0,0);
  strokeWeight(1);
  line(-51,-STUMPS+41,2,51,-STUMPS+41,2);
  line(-51,-STUMPS-41,2,51,-STUMPS-41,2);
  line(-51,STUMPS+41,2,51,STUMPS+41,2);
  line(-51,STUMPS-41,2,51,STUMPS-41,2);
  line(-44,-STUMPS+41,2,-44,-STUMPS-41,2);
  line(44,-STUMPS+41,2,44,-STUMPS-41,2);
  line(-44,STUMPS+41,2,-44,STUMPS-41,2);
  line(44,STUMPS+41,2,44,STUMPS-41,2);
  
  // fill(255);
  // box(8,8,24);
  // translate(15,0,0);
  // box(8,8,24);
  // translate(-30,0,0);
  // box(8,8,24);
  pop();

  // finally, plotting the ball
  ball1.show();
  ball1.move();
  ball2.move();
  ball2.show();
  ball3.move();
  ball3.show();

  // increment rotation angle
  //aZ += 0.0025;
}

function keyTyped() {
  if (key === 'w') {
    fwd += 1;
  } else if (key === 's') {
    fwd -= 1;
  }
}

function mouseMoved() {
  aZ = (mouseX)/200;
  // prevent default
  return false;
}
