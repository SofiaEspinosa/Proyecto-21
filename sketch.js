
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var leftSide;
var rightSide;

var ball;

var boton;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world=engine.world;

	//crear los cuerpos aquí.
	
	ground = new Ground(width/2,670,width,20);
	rightSide = new Ground(650,600,20,120);
	leftSide = new Ground(400,600,20,120);
	

	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,150,50,ball_options);
  World.add(world,ball);
 
  ellipseMode(RADIUS);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
   ground.show();
   leftSide.show();
  rightSide.show();

  Engine.update(engine);

   ellipse(ball.position.x,ball.position.y,50);
	
   
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0.02,y:0.1},{x:400,y:400});
		
	}
}
