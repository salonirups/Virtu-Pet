class Food{
    constructor(){
        this.foodStock=0;
        this.milk=loadImage("Images/Milk.png")
    }

    getfoodStock(){
        return this.foodStock;
    }
    updateFoodStock(food){
        this.foodStock=food;
    }
    deductFoodStock(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }

    display(){
        var x=80,y=100;
        imageMode(CENTER)
        image(this.milk,720,220,70,70)

        if(this.foodStock!=0){
             for(var i=0;i<this.foodStock;i++)
             {
                  if(i%10==0)
            {
                       x=80; y=y+50;
            } 
             image(this.milk,x,y,50,50);

            x=x+30; 
             }
            }

    }
}
