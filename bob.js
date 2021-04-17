class Bob{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.radius=40;
    
    }
    display(){        
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("pink");
        strokeWeight(4);
        ellipseMode(CENTER);
        ellipse(0,0,2*this.radius,2*this.radius);
        pop();
    }
}