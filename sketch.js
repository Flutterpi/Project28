
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	//boy = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1300,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 tree = new Tree(850,400,200,600);
	 ground = new Ground(500,690,10000,20);
	 stone = new Stone(320,580);
	 mango1 = new Mango(840,190,40);
	 mango2 = new Mango(870,290,40);
	 mango3 = new Mango(780,210,40);
	 mango4 = new Mango(900,190,40);
   mango5 = new Mango(800,280,40);
   boy = new Boy(380,580,50,70);
   elastic = new Elastic(boy.body,stone.body)
   launcher=new Launcher(stone.body,{x:235,y:420})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightyellow");
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();

  //line(boy.body.position.x,boy.body.position.y,stone.body.position.x,stone.body.position.y)
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  launcher.fly();
}

function detectCollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone.body, {x:235, y:420})
    launcherObject.attach(stone.body);
  }
}