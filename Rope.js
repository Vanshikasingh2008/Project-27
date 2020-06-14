class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA: body1,
            bodyB: body2,
            length: 450,
            stiffness: 0.04,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
   
        this.band = Matter.Constraint.create(op);
        World.add(world,this.band);
       }
       display(){
           var point1 = this.band.bodyA.position;
           var point2 = this.band.bodyB.position;
           
           strokeWeight(2);

           var Anchor1X = point1.x;
           var Anchor1Y = point1.y;

           var Anchor2X = point2.x + this.offsetX;
           var Anchor2Y = point2.y + this.offsetY;

           line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
           
       }
   
   }