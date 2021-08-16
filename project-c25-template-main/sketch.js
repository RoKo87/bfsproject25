
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var db,groundObject, b, bi	
var world;


function preload(){
	bi = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	db = new dustbin(1200,650);
	var b_options = {
		isStatic: false,
		restitution: 0.2,
		friction: 0,
		density: 1.2
	}
	b = Bodies.circle(570, 400, 20, b_options)
	World.add(world, b)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  image(bi, b.position.x, b.position.y - 107, 151, 151)
  db.display();
  
  



}

function keyPressed() {
	if (keyCode === UP_ARROW)
 {
	 Matter.Body.applyForce(b, b.position, {x:27, y:-200})

 }
}
