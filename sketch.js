
// Modules - Engine, World, Bodies

// Nicknames - namespacing

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world, ground;

var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var platform;
var sling;

var ground_options,box_options;

var backgroundImage;

function preload() {
    backgroundImage = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);

    engine = Engine.create(); // engine = Matter.Engine.create();
    world = engine.world;

    platform = new Ground(150,350,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);
    box5 = new Box(810,150,70,70);


    pig1 = new Pig(810,320);
    pig2 = new Pig(810,250);


    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,150,300,PI/2);
    log3 = new Log(780,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);


    bird = new Bird(235,100);

   ground = new Ground(600,height,1200,10);

    sling = new Slingshot(bird.body, {x : 250 , y : 100});



    console.log(ground);
    console.log(box);

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
    sling.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{ x : mouseX , y : mouseY});
 
}

function mouseReleased() {
    sling.release();
}