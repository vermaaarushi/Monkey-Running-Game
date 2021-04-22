
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0;
  
  
}


function draw() {
  background(225);
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(frameCount% 80 === 0){
    fruits()
  }
  
  if(frameCount% 300 === 0){
    stones()
  }
  
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50)
}

 function fruits(){
   banana = createSprite(670, Math.round(random(180,240)), 10, 10)
   banana.addImage(bananaImage);
   banana.scale = 0.1
   banana.velocityX = -12
   bananaGroup.add(banana);
 }

 function stones(){
   obstacle = createSprite(670,350,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.3;
   obstacle.velocityX = -4;
   obstacleGroup.add(obstacle);
 }

