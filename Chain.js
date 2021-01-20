class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:0
        };

        this.ch = Constraint.create(options);
        World.add(world,this.ch);
    }

    display(){
        var pointA = this.ch.bodyA.position;
        var pointB = this.ch.bodyB.position;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}