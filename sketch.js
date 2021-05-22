const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var bg,snow1,snow2,snow3,snow4,snow5,snow6;
function preload(){
bg = loadImage("snow2.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

snow1 = new snow(100,200,50,50)
snow2 = new snow(300,200,50,50)
snow3 = new snow(400,200,50,50)

snow4 = new snow(200,200,50,50)

snow5 = new snow(500,200,50,50)

snow6 = new snow(700,200,50,50)




}

function draw() {
  background(bg); 
  Engine.update(engine);
 
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
 drawSprites();
}