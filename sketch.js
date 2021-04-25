var dog,sadDog,happyDog;
var feed, add;
var foodObj;
var database;
var foodS,foodStock;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}


function setup() {

  database=firebase.database();


  createCanvas(1000,400);
  foodObj=new Food();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(700,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("FEED THE DOG");
  feed.position(300,100);
  feed.mousePressed(feedDog)
  add=createButton("ADD MILK");
  add.position(225,100);
  add.mousePressed(addFoodStock);
}

function draw() {
  background(46,139,87);
  foodObj.display()
}

//function to read food Stock
function readStock(data){
   foodS=data.val();
    foodObj.updateFoodStock(foodS);
   }


//function to update food stock and last fed time

function feedDog(){
  dog.addImage(happyDog)
  //foodObj.deductFoodStock()
  if (foodObj.getfoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getfoodStock()*0)
  }
  else{
    foodObj.updateFoodStock(foodObj.getfoodStock()-1)
  }
  database.ref('/').update({
     Food:foodObj.getfoodStock()
     })
}

//function to add food in stock

function addFoodStock(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}