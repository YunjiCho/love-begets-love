let bg;
let font;
let box, begets;
let a = [], b = [], c = [];
let balls1 = [], balls2 = [], balls3 = [];
let num = 4000;
let numf = 0;
let numff = 0;
let speed0 = 0;
let speed02 = 0;
let speedt, speedx1, speedy1, speedx2, speedy2, speedx3, speedy3 = 0;
let s = 60;
let s2 = 60;
let enterc = 170;
let s1 = 50;
let cx1 = 560;
let cy1 = 500;
let cx2 = 510;
let cy2 = 71;
let cx3 = 556;
let cy3 = 369;
let d = 20;
let imagey = -900;
let co = 255;
let wco = 235;
let g = 250;
let gstroke = 180;
let v = 0.5;
let v2 = 0.3;
let textx = -64;
function preload(){
  bg = loadImage("9.png");

}

function setup() {
  
  canvas = createCanvas(700, 900);
  canvas.position(windowWidth/2-700/2,windowHeight/2-900/2);
  for (let i = 0; i < num; i++) {
    a[i] = new Ball(random(width), random(height), color(co, co, co));
  }
  for (let i = 0; i < numf; i++) {
    b[i] = new Ball(random(width), random(height), color(co, co, co));
  }
  for (let i = 0; i < numff; i++) {
    c[i] = new Ball(random(width), random(height), color(co, co, co));
  }
  balls1.push(new MBall(cx1, cy1, color('#FFA7CC'), speedx1, speedy1));
  balls2.push(new MBall(cx2, cy2, color('#038BFF'), speedx2, speedy2));
  balls3.push(new MBall(cx3, cy3, color('#111B58'), speedx3, speedy3));
}

function draw() {
  background(255);
  for (let i = 0; i < num; i++) {
    a[i].draw();
  }

  // 움직이는 원
  for (let i = 0; i < balls1.length; i++) {
    balls1[i].draw();
  }
  for (let i = 0; i < balls2.length; i++) {
    balls2[i].draw();
  }
  for (let i = 0; i < balls3.length; i++) {
    balls3[i].draw();
  }

  //안 보이게 하는 원
  fill(co);
  circle(cx1, cy1, 20);
  circle(cx1, cy1 + 7, 20);
  circle(cx1 - 10, cy1 - 7, 20);
  fill(co);
  circle(cx2+5, cy2-10, 20);
   fill(co);
  circle(cx2+5, cy2+10, 20);
  fill(co);
  circle(cx2, cy2, 20);
  circle(cx2 - 19, cy2, 20);
  fill(co);
  circle(cx3+15, cy3-5, 20);
  fill(co);
  circle(cx3, cy3, 20);
  circle(cx3 - 10, cy3 - 10, 20);

  fill('#fbfbfb');
  textSize(178);
  text('begets', 100, 304);

  for (let i = 0; i < numf; i++) {
    b[i].draw();
  }

  image(bg, -85, imagey + speed0, 830, 1248);
  speed0 += s;
  if (imagey + speed0 > -365) {
    s = 0;
  }

  for (let i = 0; i < numff; i++) {
    c[i].draw();
  }

  fill(enterc);

  textSize(24);
  text('Press the ENTER', textx + speed02, 879);
  speed02 += s2 * 0.2;
  if (textx + speed02 > width / 2 - 100) {
    s2 = 0;
  }
}

function keyReleased() {
  if (s == 0) {
    speedx1 = random(-3, 0) * v;
    speedy1 = 10 * v;
    speedx2 = random(10, 14) * v;
    speedy2 = random(-2, 5) * v;
    speedx3 = random(10, 13) * v;
    speedy3 = random(5, 15) * v;

    let a = new MBall(cx1, cy1, color(wco, 230, 114, g), speedx1, speedy1);
    balls1 = append(balls1, a);
    let b = new MBall(cx2, cy2, color(230, 114, wco, g), speedx2, speedy2);
    balls2 = append(balls2, b);
    let c = new MBall(cx3, cy3, color(114, wco, 230, g), speedx3, speedy3);
    balls3 = append(balls3, c);
    wco -= v2;
    
  }
}
function Ball(x, y, col) {
  this.x = x;
  this.y = y;
  this.col = col;
}

Ball.prototype.draw = function() {
  stroke(gstroke-30);
  fill(this.col);
  circle(this.x, this.y, 20);
}

function MBall(x, y, col, speedx, speedy) {
  this.x = x;
  this.y = y;
  this.col = col;
  this.speedx = speedx;
  this.speedy = speedy;
}

MBall.prototype.draw = function() {
  stroke(150);
  fill(this.col);
  this.x += this.speedx;
  this.y += this.speedy;
  circle(this.x, this.y, 20);
 

  if (this.x > width-10 || this.x < 0+10) {
    this.speedx = -this.speedx;
  }
  if (this.y > height-10 || this.y < 0+10) {
    this.speedy = -this.speedy;
  }
}
