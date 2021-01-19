var car
var wall
var speed
var weight
var d

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1550,200,50,400);
  speed = Math.round(random(59,90));
  weight = Math.round(random(400,1500));

  car.velocityX = speed;

}

function draw() {
  background("black"); 
  
  if(car.x-wall.x<=car.width/2+wall.width/2 && wall.x-car.x<=wall.width/2+car.width/2 && car.y-wall.y<=car.height/2+wall.height/2 && wall.y-car.y<=wall.height/2+car.height/2){
    car.velocityX = 0;
    d = Math.round(((0.5*weight*speed*speed)/22500));
    text(d,50,50)

    if(d<100){
      car.shapeColor = "green";
    }

    if(d>100&&d<180){
      car.shapeColor = "yellow";
    }

    if(d>180){
      car.shapeColor = "red";
    }
  }
  
  

  drawSprites();
}