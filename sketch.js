var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground ;
var redBoxB , redBoxR , redBoxL;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxPosition = width/2-100;
	boxY = 610;

	boxLeft = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	World.add(world, boxLeft);

	boxRight = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} ); 
	World.add(world, boxRight);

	boxBottom = Bodies.rectangle(boxPosition+100, boxY+42, 150,20 , {isStatic:true} ); 
	World.add(world, boxBottom);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3,friction:1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  fill("red");

  rect(boxLeft.position.x,boxLeft.position.y,20,100)
  rect(boxRight.position.x,boxRight.position.y,20,100)
  rect(boxBottom.position.x,boxBottom.position.y,150,20)

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody , false);

  }

}



