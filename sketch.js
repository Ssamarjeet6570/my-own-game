//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//var Engine, World;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var gameOver, restart;

var harry,demon,bossDemon,robert,castle,ground,bck, cloudsGroup, cloudImage;
var harry_img,ground_img,demon_img,background_img;
var score;
function preload (){
  harry_img = loadImage("../sprites/harry.png");
  ground_img  = loadImage("../sprites/base.png");
  bossDemon_img = loadImage("../sprites/boss.png");
  demon_img = loadImage("../sprites/demon.png");
  background_img = loadImage("../sprites/bg.png");
  cloudImage = loadImage("../sprites/cloud.png");
  //bck = background_img;
}
function setup() {
  createCanvas(1000,400);
 // harry.addImage("harry",harryImage);
  createSprite(400, 300, 50, 50);
  bck = createSprite(1000,400,1000,1000);
  bck.addImage("bck",background_img);
  bck.scale = 0.9;
  harry = createSprite(50,325,30,30);
  harry.addImage("harry",harry_img);
  harry.scale = 0.4;
  
  
  demon = createSprite(400,325,30,30);
  demon.addImage("demon",demon_img);
  demon.scale = 0.8;
  bossDemon = createSprite(200,200,20,20);
  bossDemon.addImage("boss",bossDemon_img);
  bossDemon.scale = 0.1;
  robert = createSprite(200.200,20,20);
 ground = createSprite(500,400,5500,30);
 ground.addImage("ground",ground_img);

bck.velocityX = -12;
cloudsGroup = new Group();
 //ground.addImage("sprites",groundImage);
  //ground.x = ground.width /2;
  
}

function draw() {
  background(255,255,255);
    
  //background(background_img);
    
  if (keyDown("space")&& harry.y >= 159) {
    harry.velocityY = -12;
  }
  harry.velocityY = harry.velocityY + 0.8
  spawnClouds();
  drawSprites();


  }


  function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = harry.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }
 
  

