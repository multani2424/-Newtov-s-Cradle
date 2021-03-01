class Pendulum
{
    constructor(x,y,color)
    {
        var options={
            restitution:1.0,
            friction:0,
            //density:1.0,
            fricitionAir:0.0,
            slop:1,
            inertia:Infinity,
            //isStatic:true
        }

        this.body=Bodies.circle(x,y,40,options)
        this.color=color;
        this.r=40;
        World.add(world,this.body);
        
    }

    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3.5);
        stroke("white");
        fill("yellow");
        ellipseMode(RADIUS)
        ellipse(0,0,40,40);
        pop();
    }
}