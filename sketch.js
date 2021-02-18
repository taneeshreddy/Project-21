var canvas;
var music;
var surfaceR, surfaceB, surfaceG, surfaceY;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces


    ball = createSprite(random(0,600),300,15,15);
    ball.shapeColor = "purple";

    surfaceR = createSprite(75,500,150,20);
    surfaceB = createSprite(250,500,150,20);
    surfaceG = createSprite(405,500,150,20);
    surfaceY = createSprite(580,500,150,20);
    surfaceR.shapeColor = "red";
    surfaceB.shapeColor = "blue";
    surfaceG.shapeColor = "green";
    surfaceY.shapeColor = "yellow";    
    ball.velocityY = -10;
    ball.velocityX = 10;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(ball.isTouching(surfaceR)){
        ball.shapeColor = "red";
        ball.bounceOff(surfaceR)
    }

    if(ball.isTouching(surfaceB)){
        ball.shapeColor = "blue";
        ball.bounceOff(surfaceB)
    }

    if(ball.isTouching(surfaceG)){
        ball.shapeColor = "green";
        ball.bounceOff(surfaceG)
    }

    if(ball.isTouching(surfaceY)){
        ball.shapeColor = "yellow";
        ball.bounceOff(surfaceY)
    }

    edges = createEdgeSprites();
    ball.bounceOff(edges);





    //add condition to check if box touching surface and make it box

    drawSprites();
}
