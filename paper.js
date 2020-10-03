class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body =Matter.Bodies.circle(x, y,10, options);
    this.width = 10;
    this.height = 10;
    this.image = loadImage("paper.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};