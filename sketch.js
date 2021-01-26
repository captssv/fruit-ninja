var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
    fruit3, fruit4, fruitG, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage
var PLAY=1
var END=0
var gameState=PLAY
var cutSound,gameOverSound;
var treeImg,tree;

function preload(){
  swordImage= loadImage("knife.png")
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  gameOverImage=loadImage("gameover.png")
  
  treeImg = loadImage("tree image.jpg")
 
  cutSound=loadSound("knifeSwoosh.mp3")
  gameOverSound=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(600, 600);
  
  tree = createSprite(250,200,300,300);
  tree.addImage(treeImg);
  tree.scale=3;
  
  sword=createSprite(200,200,100,100)
  sword.addImage(swordImage)
  sword.scale=0.5
  
  enemyG= new Group()
  fruitG= new Group()
  
  score=0
  
}

function draw(){
background("skyblue")
  
 if (gameState===PLAY) {
sword.x=World.mouseX
sword.y=World.mouseY
  
  var choose = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (choose == 1) {
      fruit1()
    } else if (choose == 2) {
      enemy()
    } else if (choose == 3) {
      fruit2()
    } else if (choose == 4){
      fruit3()
   } else {
      fruit4()
    }
     }
 
   if(sword.isTouching(fruitG)){
     fruitG.destroyEach()
     cutSound.play();
    score=score+2
     }
   
   else
     
   if(sword.isTouching(enemyG)){
     enemyG.destroyEach()
     gameOverSound.play();
    gameState=END; 
     
     fruitG.destroyEach()
     enemyG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     sword.scale=2
     sword.x=300
     sword.y=200
     
     
     }
   }
  
  drawSprites();
    
textSize(23);
  fill(0);
 text("Score: "+ score, 500,50);

}

function enemy(){

 var enemy=createSprite(600,Math.round(random(30,400)),10,10)
  
 enemy.addAnimation("blinking",enemyImage)
  enemy.velocityX=-6
  enemy.scale=0.75
  enemy.lifetime=150
  enemyG.add(enemy)
  
}

function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
    fruit1.addImage(fruit1Image)
  fruit1.velocityX=-6
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruitG.add(fruit1)
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
    fruit2.addImage(fruit2Image)
  fruit2.velocityX=-6
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
    fruit3.addImage(fruit3Image)
  fruit3.velocityX=-6
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
    fruit4.addImage(fruit4Image)
  fruit4.velocityX=-6
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }
