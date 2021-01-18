const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper;
var db1, db2, db3;

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

ground = new Ground(400, 675, 800, 15);
paper = new Paper(100, 600, 15);
db1 = new Dustbin(605, 658, 200, 20);
db2 = new Dustbin(505, 610, 20, 100);
db3 = new Dustbin(705, 610, 20, 100);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(0);
Engine.update(engine);

paper.display();
ground.display();
db1.display();
db2.display();
db3.display();

drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body, paper.body.position, {x:33, y: -33})
}
}