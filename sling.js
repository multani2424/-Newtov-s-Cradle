class Sling
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:260
        };

       this.pointB=pointB;
        //as sling is straight x will be same as bodyA x
        this.pointX=bodyA.x;
        //it will in top so -250 in y value
        this.pointY=bodyA.y-250;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    display()
    {
        if(this.sling.bodyA)
        {
            let pointA=this.sling.bodyA.position;
            let pointB=this.pointB;
            push()
            strokeWeight(4);
            stroke("green");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}