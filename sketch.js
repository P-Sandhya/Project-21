const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 30;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new ground(width/2,670,width,15);
	leftSide = new ground(1100,600,15,120);
	rightSide = new ground(1350,600,15,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  fill("yellow")
  stroke("black")

  ellipse(ball.position.x,ball.position.y,radius,radius);

 groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}








