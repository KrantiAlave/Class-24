const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,bird1;
var box3,box4,pig2,log2;
var box5,log3,log4;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height-40,1200,20);
    bird1 = new Bird(100,100)
    box1 = new Box(700,350,50,50);
    pig1 = new Pigs(800,350);
    box2 = new Box(900,350,50,50);
    log1 = new Log(800,300,250,PI/2);
    box3 = new Box(700,250,50,50);
    pig2 = new Pigs(800,250);
    box4 = new Box(900,250,50,50);
    log2 = new Log(800,200,250,PI/2);
    box5 = new Box(800,150,50,50);
    log3 = new Log(750,130,120,PI/7);
    log4 = new Log(900,130,120,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}