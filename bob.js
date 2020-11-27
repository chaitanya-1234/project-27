class Bob{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
        this.bob=Bodies.circle(300,670,50)
      }
      
    
  
    display(){
     
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
    strokeWeight(4)
    stroke("brown")
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        
        pop();
}
}
