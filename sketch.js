
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
//var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1=new Bob(300,670,50,50)
	bob2=new Bob(340,670,50,50)
	bob3=new Bob(380,670,50,50)
	bob4=new Bob(420,670,50,50)
	bob5=new Bob(480,670,50,50)
	ground=new Ground (400,690,800,20)
	roof=new Ground(400,200,500,40)

	rope1= new rope(bob3,roof,400,200)
	rope2=new rope(bob2,roof,300,200)
	rope3=new rope(bob1,roof,200,200)
	rope4=new rope(bob4,roof,100,200)
	rope5=new rope(bob5,roof,500,200)
}


function draw() {
 
  background(0);
  
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 ground.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 if (keyCode=== UP_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
 }
}

function drawline(constraint){

	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position 

	roofBodyOffset=constraint.pointB;

	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line (bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
	
}


