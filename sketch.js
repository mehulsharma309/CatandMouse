var canvas,bg,together,tomimg1,tomimg2,tomimg3,jerryimg1,jerryimg2,jerryimg3,tom,jerry
function preload() {
  bg=loadImage("images/garden.png");
  tomimg1=loadAnimation("images/cat1.png");
  tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
  tomimg3=loadAnimation("images/cat4.png");
  jerryimg1=loadAnimation("images/mouse1.png");
  jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  jerryimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tomSleeping",tomimg1);
tom.scale=0.2
jerry=createSprite(200,600);
jerry.addAnimation("jerryStanding",jerryimg1);
jerry.scale=0.2

}

function draw() {

    background(bg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomlastimg",tomimg3);
        tom.x=300
        tom.scale=0.2
        tom.changeAnimation("tomlastimg");
        jerry.addAnimation("jerrylastimg",jerryimg3);
        jerry.scale=0.15
        jerry.changeAnimation("jerrylastimg");
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomrunning",tomimg2);
    tom.changeAnimation("tomrunning");
    jerry.addAnimation("jerryptasing",jerryimg2);
    jerry.changeAnimation("jerryptasing");
    jerry.frameDelay=25
}
  


}
