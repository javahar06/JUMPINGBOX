var canvas;
var music , edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(10, 560, 200, 20);
block1.shapeColor = "blue"
block2 = createSprite(220, 560, 200, 20);
block2.shapeColor = "red"
block3 = createSprite(440, 560, 200, 20);
block3.shapeColor = "orange"
block4 = createSprite(680, 560, 200, 20);
block4.shapeColor = "green"


    //create box sprite and give velocity
box = createSprite(random(20, 750), 50, 40, 40);
box.shapeColor = "white"
box.velocityY = +9
box.velocityX = +4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites()
box.bounceOff(edges)



    //add condition to check if box touching surface and make it box
if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor = "blue"
    music.play()
}
if(block2.isTouching(box)){
    box.shapeColor = "red"
    box.velocityX = 0
    box.velocityY = 0
    music.stop()
}
if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor = "orange"
}
if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor = "green"
}
drawSprites();
}
