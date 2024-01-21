let x = 200;
let y = 200;
background(255, 255, 255);
noStroke();

// back hair
fill(0, 0, 0);
// ellipse(x, y - 5, 150, 190);

rect(x - 70, y - 90, 140, 200, 100);

// face
fill(236, 211, 197);
// ellipse(x, y - 15, 110, 130);
rect(x - 45, y - 80, 90, 120, 100);

// eyes
fill(255, 255, 255);
// arc(x - 20, y - 30, 20, 10, 3, 0, CHORD);
// arc(x - 20, y - 30, 20, 10, 0, 1, CHORD);
// ellipse(x - 20, y - 30, 25, 15);
// ellipse(x + 20, y - 30, 25, 15);

beginShape();
vertex(x - 30, y - 20);
bezierVertex(x - 30, y - 50, x - 10, y - 50, x - 10, y - 20);
endShape();
beginShape();
vertex(x + 30, y - 20);
bezierVertex(x + 30, y - 50, x + 10, y - 50, x + 10, y - 20);
endShape();

// eye pupil
fill(0, 0, 0);
ellipse(x - 20, y - 30, 10, 15);
ellipse(x + 20, y - 30, 10, 15);

// glasses
noFill();
stroke(0, 0, 0);
strokeWeight(1);
circle(x - 20, y - 30, 35);
circle(x + 20, y - 30, 35);
line(x - 1, y - 30, x + 1, y - 30);
line(x - 38, y - 30, x - 52, y - 35);
line(x + 38, y - 30, x + 52, y - 35);

// nose
noStroke();
fill(228, 193, 173);
beginShape();
vertex(x, y);
bezierVertex(x, y + 10, x + 20, y - 5, x, y - 20);
endShape();

// lips
fill(215, 107, 120);
beginShape();
vertex(x - 20, y + 20);
bezierVertex(x - 5, y + 10, x - 5, y + 10, x + 10, y + 20);
endShape();
beginShape();
vertex(x + 20, y + 20);
bezierVertex(x + 5, y + 10, x + 5, y + 10, x - 10, y + 20);
endShape();
arc(x, y + 20, 40, 10, 0, PI, CHORD);

// blush
fill(241, 171, 185);
noStroke();
ellipse(x - 30, y, 15);
ellipse(x + 30, y, 15);

// front hair
fill(0, 0, 0);
push();
translate(x + 20, y - 65);
rotate(0.4);
ellipse(0, 0, 80, 30);
pop();
push();
translate(x - 40, y - 55);
rotate(-0.7);
ellipse(0, 0, 70, 20);
pop();

// neck
push();
fill(236, 211, 197);
rect(x - 20, y + 30, 40, 20);
// dress
fill(230, 230, 250);
rect(x - 60, y + 50, 120, 100, 20, 20, 0, 0);
pop();
fill(236, 211, 197);
arc(x, y + 50, 40, 30, 0, PI, CHORD);

stroke(230, 245, 250);

line(x - 40, y + 80, x - 40, y + 150);
line(x + 40, y + 80, x + 40, y + 150);