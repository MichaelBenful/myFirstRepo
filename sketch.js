let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let r = 0;
let g = 0;
let b = 255;

let va = 0

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let img;
function preload() {
  img = loadImage('images/team2.png');
  img2 = loadImage('images/char.png')
}

function setup() {
   createCanvas(500, 500);
   noStroke();


   imageMode(CENTER);
}


function draw() {
   background(0);

   
   
   image(img2,enemyXPos, enemyYPos, 60, 60);

   
   image(img, myXPos, myYPos, 70, 70);

   fill(255,255,255)
   text("Score: " + va, 10, 30)
   textSize(20)


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 5;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 5;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 5;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 5;
   }

  

   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;


   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {

   }
   else {
    enemyXPos = (random(450), random(450))
    enemyYPos = (random(450), random(450))
    va += 1
     r = random(255);
     g = random(255);
     b = random(255);
   }
}

