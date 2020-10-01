
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3; 
var box;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    

	groundSprite=createSprite(width/2, height-35, width,10,{isStatic:true});
	groundSprite.shapeColor=color(255);
	

	
	  

	
    box= new Box(650,650);
    paper=new Paper(200,450,40);




	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  rect();

  box.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}


