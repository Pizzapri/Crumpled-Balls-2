
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var center;
var paper;
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,380,800,10);

  paper=new Ball(200,50,100);

  fill("black")
  center=new Dustbin(600,280,200,200);
  
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background("grey");

  ground.display();

  paper.display();

  center.display();
}