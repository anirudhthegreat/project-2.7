
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box1,pig1;
var backgroundImg,platform;


function preload()


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
		world = engine.world;
		
	ground = new Ground(150, 305, 300, 170);

	box1 = new box1(400,350,40,40)
	box2 = new box2(200,500,40,40,40)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



