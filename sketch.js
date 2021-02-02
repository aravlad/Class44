var mazeImage;

function preload(){
mazeImage = loadImage("sketch.png")
}

function setup() {
  createCanvas(1000,700);
  pik = createSprite(1, 1, 1, 1)

  wall1 = createSprite(500,103,830,10);
  wall2 = createSprite(500,598,830,10);
  wall3 = createSprite(85,512,10,175);
  wall4 = createSprite(915,512,10,175);
  wall5 = createSprite(915,185,10,175);
  wall6 = createSprite(85,185,10,175);
  wall7 = createSprite(115,432,65,10);
  wall8 = createSprite(115,387,65,10);
  wall9 = createSprite(115,267,65,10);
  wall10 = createSprite(115,312,65,10);
  wall11 = createSprite(883,432,65,10);
  wall12 = createSprite(883,387,65,10);
  wall13 = createSprite(883,267,65,10);
  wall14 = createSprite(883,312,65,10);
  wall15 = createSprite(855,290,10,50);
  wall16 = createSprite(855,405,10,50);
  wall17 = createSprite(143,290,10,50);
  wall18 = createSprite(143,405,10,50);
  wall19 = createSprite(231,200,119,60);
  wall20 = createSprite(190,335,37,210);
  wall21 = createSprite(245,410,90,60);
  wall22 = createSprite(275,335,30,90);
  wall23 = createSprite(250,305,30,30);
  wall24 = createSprite(363,350,90,180);
  wall25 = createSprite(477,350,90,180);
  wall26 = createSprite(695,305,30,270);
  wall24 = createSprite(780,305,90,90);
  // wall2 = createSprite(945,45,10,900);
  // wall3 = createSprite(45,945,900,10);
  // wall4 = createSprite(45,45,900,10);
  // wall5 = createSprite(540,500,10,40);
  // wall6 = createSprite(460,500,10,40);
  // wall7 = createSprite(500,460,40,10);
  // wall8 = createSprite(100,100,10,420);
  // wall9 = createSprite(100,100,10,420);
  


  







}

function draw() {
  background(mazeImage);
  drawSprites()
  fill("red")
  text(mouseX +"," + mouseY, mouseX, mouseY)
  
    




  
}


  
