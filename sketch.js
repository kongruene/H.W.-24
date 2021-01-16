const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,ball,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bin(600, height-10, 200, 10, {isStatic: true});
	b2 = new Bin(700, height-50, 10, 75, {isStatic: true});
	b3 = new Bin(500, height-50, 10, 75, {isStatic: true});
	ball = new Ball(50,650,20);
	ground = new Ground(width/2, height, 800, 5, {isStatic: true});
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.show();
  b2.show();
  b3.show();
  ball.display();
  ground.present();
  drawSprites();
  console.log(b1.width, b1.height);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.body.position, {x: 8, y: -8});
	}
	if(keyCode === DOWN_ARROW){
        Matter.Body.applyForce(ball.body, ball.body.position, {x: -8, y: -8});
	}
}