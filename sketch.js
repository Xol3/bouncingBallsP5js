var balls = []; // array of Jitter objects

function setup() {
  createCanvas(displayWidth, displayHeight);
  // Create objects
  for (var i=0; i<120; i++) {
    balls.push(new ball());
  }
}

function draw() {
  background(50, 89, 100); // will refresh the background
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].check();
  }
}

// Jitter class
function ball() {
  this.x = width/2;
  this.y = height/2; // this will start the  balls from random places if center will start all from center
  this.diameter = random(10, 30);
  this.xSpeed = random(-5, 5);
  this.ySpeed = random(-5, 5);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.move = function() {

      this.x+= this.xSpeed;

      this.y+= this.ySpeed;
  };

  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

  this.check = function(){
    if(this.x < 0 ||  this.x > width){
      this.xSpeed =this.xSpeed * -1
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed= this.ySpeed * -1;
    }

  }
}
