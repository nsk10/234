class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.image = loadImage("dustbingreen.png");

        var options = {isStatic : true};

        this.bottom = Bodies.rectangle(x,y,200,20,options);
        this.left = Bodies.rectangle(x-100,y-110,20,220,options);
        this.right = Bodies.rectangle(x+100,y-110,20,220,options);

        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);
    }
    display(){
       imageMode(CENTER);
       image(this.image,this.x,this.y-110,200,220);

    }
}