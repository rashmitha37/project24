
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    angleMode(DEGREES);

    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(620,370,120,20);
    box2 = new Box(665,310,20,100);
    box3 = new Box(565,310,20,100);
    ground = new Ground(200,height,1700,30);
    paper= new Paper(165,300);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    paper.display();
   
}

function keyPressed(){
    
    if (keyCode === UP_ARROW){
        console.log("up key pressed")
        Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-11})
    }
}