
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var ball;


function preload(){

	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	
    ground = new Ground(500,450,1000,10);
	box1 = new Box(700,390,15,100);
	box2 = new Box(770,432.5,130,15);
	box3 = new Box(840,390,15,100);
	ball = new Ball(180,300);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(86,213,89);
  
  ground.display();
  box2.display();
  box1.display();
  box3.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
  if( keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-30})
  }
}