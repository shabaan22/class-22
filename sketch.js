const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ball2;
var rect1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var rect1_options = {
        restitution:0.5
    }

    var ball_options ={
        restitution: 1.0
    }
    var ball2_options = {
        isStatic : true
    }
    ball2 = Bodies.circle(100,100,15,ball2_options)
    World.add(world,ball2)

    rect1 = Bodies.rectangle(55,155,25,35, rect1_options)
    World.add(world,rect1)

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
   
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);


    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);

    rectMode(CENTER)
    rect(rect1.position.x,rect1.position.y);




}