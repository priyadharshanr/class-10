var ship, ship_moving
var ship_moving1, ship_moving2, ship_moving3, ship_moving4
var sea, sea_img

function preload(){

  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_moving=loadAnimation("sea.png");
  
}

function setup(){
 createCanvas(1350,650);

 sea = createSprite(1000,1000);
 sea.addAnimation("moving",sea_moving);

  ship = createSprite(200,250);
  ship.addAnimation("moving",ship_moving);
  ship.scale=3
}
 drawSprites()


function draw() {
  background("sea.png");
 
}