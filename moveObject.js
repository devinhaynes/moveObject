var myObject;

function setup(){
  createCanvas(800,800);
  background(51);
  myObject = new myObject();
}

function draw(){
  background(51);
  myObject.show();
  myObject.update();

}

function myObject(){
  this.x=width/2;
  this.y=height/2;
  this.sizex=20;
  this.sizey=30;
  this.xspeed=0;
  this.yspeed=0;

    this.show = function(){
      fill(255);
      rect(this.x, this.y, this.sizex, this.sizey);
    }

    this.dir = function(x, y){
      this.xspeed=x;
      this.yspeed=y;
    }

    this.update = function(){
      this.x=this.x + this.xspeed;
      this.y=this.y + this.yspeed;

      this.x=constrain(this.x, 0, width-this.sizex);
      this.y=constrain(this.y, 0, height-this.sizey);
    }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    myObject.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    myObject.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW){
    myObject.dir(1, 0);
  } else if(keyCode === LEFT_ARROW){
    myObject.dir(-1, 0);
  } else if (keyCode === 32){
    myObject.dir(0, 0);
  }
}
