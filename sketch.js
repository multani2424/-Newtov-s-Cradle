const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var pendulum1,pendulum2,pendulum3;
var pendulum4,pendulum5;

var chain1,chain2,chain3,chain4,chain5;
var bg,colour;

var block;

function preload()
{
  bg=color("yellow");

}



function setup() {
  //createCanvas(800,800);
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;

  

  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options=
  {
    mouse: canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1=new Pendulum(250,400,"black");
  pendulum2=new Pendulum(330,400,"black");
  pendulum3=new Pendulum(410,400,"black");
  pendulum4=new Pendulum(490,400,"black");
  pendulum5=new Pendulum(570,400,"black");

  chain1=new Sling(pendulum1.body,{x:250,y:150});
  chain2=new Sling(pendulum2.body,{x:330,y:150});
  chain3=new Sling(pendulum3.body,{x:410,y:150});
  chain4=new Sling(pendulum4.body,{x:490,y:150});
  chain5=new Sling(pendulum5.body,{x:570,y:150});

  
}

function draw() {
  background("#80ffff");  

  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
  drawSprites();
}

function mouseDragged()
{
 
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});

}