let x;
let y;

let xSpeed;
let ySpeed;

function preload() {
  head = loadImage("head.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  xSpeed = 5;
  ySpeed = 5;
  colors = [
    "White",
    "DodgerBlue",
    "SpringGreen",
    "Coral",
    "Crimson",
    "Fuchsia",
    "Yellow",
    "Aqua",
  ];
  tint(random(colors));
}

function draw() {
  background(0);
  image(head, x, y, 130, 200);

  x += xSpeed;
  y += ySpeed;

  if (x + 130 >= windowWidth || x <= 0) {
    xSpeed = -xSpeed;
    tint(random(colors));
  }
  if (y + 200 >= windowHeight || y <= 0) {
    ySpeed = -ySpeed;
    tint(random(colors));
  }
}
