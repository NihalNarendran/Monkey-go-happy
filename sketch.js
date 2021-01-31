var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){ 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
} 

function setup() {
//createCanvas(600,500); 
  
  survivalTime = 0;
monkey = createSprite(80,315,20,20); 
monkey.addAnimation("monkey",monkey_running);      
monkey.scale = 0.1;
  
ground = createSprite(400,376,900,10);
ground.x = ground.width/2;

obstacleGroup = new Group();
bananaGroup = new Group();
    
  score = 0;
}        

function draw() {
background("white");
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  if(keyDown("space")){
 monkey.velocityY = -13;
    
} 
  monkey.velocityY = monkey.velocityY +0.8;    
  
   monkey.collide(ground); 
  
   obstacleGroup.setLifetimeEach = 1;
  bananaGroup.setLifetimeEach = 1;
  
spawnbanana();
spawnobstacle();
drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(obstacleGroup.isTouching(monkey)){
   ground.velocityX = 0; 
  monkey.velocityY = 0; 
  obstacleGroup.setVelocityXEach(0); 
  bananaGroup.setVelocityXEach(0); 
   
  }   
}

function spawnbanana(){
if(frameCount%70 === 0){
banana = createSprite(600,250,40,10);
banana.y = Math.round(random(120,200))
banana.addImage(bananaImage);
banana.scale = 0.10;
banana.velocityX = -5; banana.lifetime = 300;  
bananaGroup.add(banana);
monkey.depth = monkey.depth+1;
} 
}

function spawnobstacle(){
if(frameCount%80 === 0){
obstacle = createSprite(300,340,20,10);
obstacle.x = Math.round(random(500,600))
obstacle.addImage(obstacleImage);
obstacle.velocityX = -8;
obstacle.scale = 0.2;
obstacleGroup.add(obstacle); 
  //obstacle.depth = monkey.depth;
 // monkey.depth = monkey.depth+1;
  obstacle.lifeTime = 300;
}  
}
