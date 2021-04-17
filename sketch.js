
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(720,600);
	bobObject2=new Bob(760,600);
	bobObject3=new Bob(800,600);
	bobObject4=new Bob(840,600);
	bobObject5=new Bob(880,600);

	roof=new Roof(800,50,500,50);

	rope1=new Rope(bobObject1.body,roof.body,-120,0);
	rope2=new Rope(bobObject2.body,roof.body,-60,0);
	rope3=new Rope(bobObject3.body,roof.body,0,0);
	rope4=new Rope(bobObject4.body,roof.body,60,0);
	rope5=new Rope(bobObject5.body,roof.body,120,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100})
	}
}



