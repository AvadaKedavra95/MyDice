var START=4;
var ROLE=1;
var NUMBER=0;
var STATE=START;
var bg;
var count
var count2
var countTime
var press,pressImg
var count3;
var sign;
var reset,resetImg;
var m,s,d,p;
var signGroup;









function preload(){
  bg = loadImage("bg.jpg");
  press=loadImage("press.png");
  resetImg = loadImage("reset.png");
  m = loadImage("multi.png");
  s = loadImage("sub.png");
  d = loadImage("div.png");
  p = loadImage("p.png");
}









function setup(){
  createCanvas(1000,500);
  signGroup=createGroup();
  countTime=50;
  reset = createSprite(950,450,10,10);
  reset.addImage("reset",resetImg);
  reset.scale=0.25;
  reset.visible=false;
  sign=createSprite(400,300,10,10);
  sign.visible=false;

}








function draw(){
  background(bg)
  
 
  drawSprites();









  if(STATE===START){
    push();
    
    imageMode(CENTER);
    image(press,500,200,800,200)
    pop();

    if(keyDown("space")||touches.length>0||mouseIsPressed){
      STATE=ROLE;
      touches = [];
    }
  }








  if(STATE===ROLE){
    
    countTime-=2;
    count=Math.round(random(1,10));
    count2=Math.round(random(1,10));
    sign=Math.round(random(1,4))

    if(sign===1){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    +    "  +  count2 ,10,200)
    }

    if(sign===2){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    -    "  +  count2 ,10,200)
    }

    if(sign===3){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    ×    "  +  count2 ,10,200)
    }

    if(sign===4){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    ÷    "  +  count2 ,10,200)
    }
   
   
    if(countTime<0){
      STATE=NUMBER;
    }
  }








  if(STATE===NUMBER){
    reset.visible=true;
    
    if(sign===1){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    +    "  +  count2 ,10,200);
      count3=Math.round(count+count2);
    }

    if(sign===2&& count>count2){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    -    "  +  count2 ,10,200)
      count3=Math.round(count-count2);
    }

    if(sign===2&& count2>count){
      fill("white");
      stroke("red")
      textSize(200)
      text(count2 +  "    -    "  +  count ,10,200)
      count3=Math.round(count2-count);
    }

    if(sign===2&& count2===count){
      fill("white");
      stroke("red")
      textSize(200)
      text(count2 +  "    -    "  +  count ,10,200)
      count3=Math.round(count2-count);
    }

    if(sign===3){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    ×    "  +  count2 ,10,200);
      count3=Math.round(count*count2);
    }

    if(sign===4&&count>count2){
      fill("white");
      stroke("red")
      textSize(200)
      text(count +  "    ÷    "  +  count2 ,10,200)
      count3=Math.round(count/count2);
    }
    
    if(sign===4&&count2>count){
      fill("white");
      stroke("red")
      textSize(200)
      text(count2 +  "    ÷    "  +  count ,10,200)
      count3=Math.round(count2/count);
    }

    if(sign===4&&count2===count){
      fill("white");
      stroke("red")
      textSize(200)
      text(count2 +  "    ÷    "  +  count ,10,200)
      count3=Math.round(count2/count);
    }
    
    fill("white");
    stroke("red")
    textSize(200)
    text("= "+count3,200,400)
    


    if(mousePressedOver(reset)||touches.length>0||keyDown("space")){
      STATE=ROLE;
      touches=[];
      countTime=50;
      reset.visible=false;
    }
    
    

      
    
  }

 
}

