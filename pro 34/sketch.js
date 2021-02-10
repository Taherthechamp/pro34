//Create variables here
var dog,dog_happy,foodS,foodStock;
var x=20;
function preload()
{
  dog=loadImage("images/dogImg.png")
  dog_happy=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  dogSprite=createSprite(300,300,50,50)
  dogSprite.scale=0.2
  dogSprite.addImage(dog);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dogSprite.addImage(dog_happy);
  text("Food Remaining:"+x,30,100)
}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  dogSprite.addImage(dog);
}

  drawSprites();
  //add styles here
textSize(20)
fill("white")
text("Note: Press UP_ARROW Key To Feed Drago Milk",30,150);
text("Food Remaining:"+foodS,30,100)
console/console.log(foodS);
}

function readStock(data){
  foodS=data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
      textSize(15)
      fill("white")
    }else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })
  }

