
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var stone;
var ground;
var boy;
var string;
var mango;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	//tree = new Tree(550,550,300,300);
	ground = new Ground(0,700,1600,20);
	mango1 = new Mango(550,550,20);
	mango2 = new Mango(450,500,30);
	mango3 = new Mango(600,450,20);
	mango4 = new Mango(650,500,40);
	mango5 = new Mango(520,450,30);
	stone = new Stone(200,100,20);
	string = new String(stone.body, {x: 100, y: 545});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 50, 500, 150, 250);
  image(tree, 390,400,300,300);

  //tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  string.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
	}
	
	function mouseReleased(){
	string.fly();
	}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= lmango.radius + lstone.radius)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:100, y:545});
		string.attach(stone.body);
	}
}
