
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
dustbin = new Dustbin(600,675);
paper = new Paper(50,650,20);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(180);
  
ground.display();

dustbin.display();
paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-80})
	}
}

