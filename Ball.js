class Ball {
    constructor(x,y,radius) {
        var option = {
            isStatic : false,
            restitution : 0.3,
            density : 1.5,
            friction : 0.5
        }
        this.ball = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world, this.ball)
      
    }
    display() {
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        ellipseMode(RADIUS);
        //angleMode(DEGREES)
        translate(pos.x,pos.y);
       // rotate(angle)
        ellipse(0, 0, this.radius)
        pop();
    }
}