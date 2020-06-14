class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(400,100,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(400,100,this.width,this.height);
        pop();
    }
}