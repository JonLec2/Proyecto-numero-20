var fondo
var cat, cat1, cat2, cat3, cat4;
var mous, mousImg, mousImg2
var airplane, airImg, airImg1;
var aves, avesImg


function preload(){

fondo=loadImage("fondo.png")
cat1=loadImage("tomOne.png")
cat2=loadImage("tomTwo.png")
cat3=loadImage("tomThree.png")
cat4=loadImage("tomFour.png")
mousImg=loadAnimation("jerryOne.png") 
mousImg2=loadAnimation("jerryTwo.png")
airImg=loadImage("airplane.png");
airImg1=loadImage("airplane1.png")
avesImg=loadImage("aves.png")

}

function setup() {
createCanvas(1000,800)

cat=createSprite(870, 600)
cat.addAnimation("caminar", cat1)
cat.scale=0.2

mous=createSprite(200, 600);
mous.addAnimation("mouse", mousImg);
mous.scale=0.15

airplane=createSprite(270, 200);
airplane.addAnimation("volar", airImg)
airplane.scale=0.13
airplane.debug=true

aves=createSprite(930, 200)
aves.addImage(avesImg)
aves.scale=-0.3
aves.debug=true



}

function draw() {

  background(fondo)


if(cat.x-mous.x < cat.width/2 - mous.width/2 ){
    cat.velocityX=0
    cat.addAnimation("sentarse", cat4)
    cat.changeAnimation("sentarse");
cat.x=350

}


if(aves.x-airplane.x < (aves.width - airplane.width)/2 ){
    airplane.velocityX=0
aves.velocityX=0
airplane.velocityY=0.2

}


if(keyDown("left_arrow")){
    mous.addAnimation("mouse", mousImg2)
    mous.changeAnimation("mouse");
    mous.frameDelay=5;

    cat.velocityX= -5;
cat.addAnimation("caminar", cat2, cat3)
cat.changeAnimation("caminar")


airplane.addAnimation("volar2", airImg, airImg1)
  airplane.changeAnimation("volar2")
    airplane.velocityX=5

aves.velocityX=-5

}





    drawSprites();
}



