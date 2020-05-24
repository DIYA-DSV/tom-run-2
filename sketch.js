
//Creating variables
var tom;
var ground;

//Setup function
function setup() {
  createCanvas(400,800);
  ground = createSprite(200,400,400,1600);
  ground.shapeColor="brown"
  tom= createSprite(200, 700, 30, 30);
  
}
//draw function
function draw() {

 //background colour=Black
 background(0);  

  //Allowing tom to move in different directions
  /*if(keyDown(UP_ARROW)){
    tom.y=tom.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    tom.y=tom.y+2;
  }*/

  if(keyDown(LEFT_ARROW)){
  tom.x=tom.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
  tom.x=tom.x+2;
  }

  //velocity of ground
  ground.velocityY=+4;

  //reseting ground
  if(ground.y>800){
  ground.y=400;
  }
  //creating obstacles group 
  var ObstaclesGroup = createGroup();

  //spawn obstacles
  spawnObstacles();

  //set lifetime of the game objects so that they are never destroyed
  ObstaclesGroup.setLifetimeEach(-1);

  /*function spawnObstacles() {
    if(World.frameCount % 60 === 0) {
      var obstacle = createSprite(?);
      
      //generate random obstacles
      var rand = randomNumber(1,6);
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 70;
      //add each obstacle to the group
      ObstaclesGroup.add(obstacle);
    }*/
    
  drawSprites();
}
