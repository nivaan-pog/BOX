var frect;
var mrect;
function setup() {
  createCanvas(1200,800);
  frect=createSprite(200, 200, 50, 80);
  //frect.debug=true;
  mrect=createSprite(400, 200, 80, 30);
  //mrect.debug=true;
  frect.shapeColor= "green";
  mrect.shapeColor= "green";
}

function draw() {
  background(0);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(mrect.x-frect.x < frect.width/2+mrect.width/2
    && frect.x-mrect.x < frect.width/2+mrect.width/2
   && mrect.y-frect.y < frect.height/2+mrect.height/2
    && frect.y-mrect.y < frect.height/2+mrect.height/2

    ){
    frect.shapeColor= "red";
  mrect.shapeColor= "red";
  } 
  else{
    frect.shapeColor= "green";
  mrect.shapeColor= "green";
  } 
  drawSprites();
}