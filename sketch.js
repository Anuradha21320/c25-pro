const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper;
var dust1,dust2,dust3;
var binImg,bin
var papimg,pap


function preload(){
   binImg = loadImage("dustbingreen.png");
   papImg = loadImage("paper.png");
}


function setup (){
createCanvas(1600,700);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;
Engine.run(engine);


dust1 = new Dustbin(1300,665,110,20);
dust2 = new Dustbin(1260,615,20,120);
dust3 = new Dustbin(1305,615,20,120);


paper = new Paper(100,300,10);
ground=new Ground(800,690,1600,20);
	
	
	World.add(world,ground);

	bin = createSprite(1300,605,20,20);
    bin.addImage(binImg);
	bin.scale = 0.45;

	//pap = createSprite(x,y,radius,options);
    //pap.addImage(papImg);
	//pap.scale = 0.45;
	


}

function draw(){

	background(0);
	Engine.update(engine);
	rectMode(CENTER);


	
    
	paper.display();
	ground.display();
	dust1.display();
	dust2.display();
	dust3.display();
	bin.display();
	
	drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{
		x: 13,
		y: -14
	});
}

}








