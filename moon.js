
// function setup() {
//   createCanvas(1020, 800);
//   background(64);
//   noStroke(); //so background doesnt have a box around it
//   colorMode(HSB);

// }

// function draw() {
  
// }

// function moonMan(myX, myY, mySize, myHue, mySat, myAlpha) {
//   // my moon
//   let size = (mySize);
//   let 
// }
// UNCOMMENT WITH CMND + /

let a;
let b;


function setup() {
	createCanvas(720, 400);
	stroke(255);
	a = height / 2;
	b = width / 2;
	backCol = 51;
	ellipseMode(CORNER);
}

function draw() {
	background(backCol);
	myMoon();
}

function myMoon() {

	ellipse(130, 130, width / 3, a);
	a = a - 0.5;
	if (a < a {
		a = height;

		ellipse(130, b, height, b);
		b = b - 0.5;
		if (b < 0) {
			b = width;

		}
	}
}