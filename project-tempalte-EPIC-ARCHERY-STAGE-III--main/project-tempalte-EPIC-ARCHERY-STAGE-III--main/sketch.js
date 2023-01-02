const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1,base,aroow,arrow1;
var computer,base2,arrow322;
var angle;
var angle2;

var arrowb = [];
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  angle = 457

  angle2 = 900

  player1 = new Player(300,300,300,350)

  computer = new Comp(1500,300,300,350)

  base = new Base(300,710,400,500)

  base2 = new Base2(1500,710,400,500)
 
  aroow = new Arrow(400,270,200,200,angle)

  arrow322 = new Arrow32(1400,300,200,200,angle2)




}

function draw() {
  background(180);
  
  for(var i = 0; i < arrowb.length; i++)
  {
     ARRRRRRRRRRRRRRRR(arrowb[i],i)
  }


  player1.display()
  computer.display()
  base.display()
  base2.display()
  aroow.display()
  arrow322.display()

  Engine.update(engine);
}

function keyPressed()
{
   if(keyCode == '32')
   {
    arrow1 = new Shoot(aroow.x + 23,aroow.y,100,50)
    arrowb.push(arrow1)
   }
}

function keyReleased()
{
   if(keyCode == '32')
   {
      arrowb[arrowb.length - 1].shoot();
   }
}

function ARRRRRRRRRRRRRRRR(arrowb3,index)
{
  arrowb3.display()
}