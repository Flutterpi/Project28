class Stone {
    constructor(x, y){
      var options = {
         isStatic: true,
          'restitution':0,
          'friction':1,
          'density':1.2
          
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 25;
      this.height = 25;
      
      this.image = loadImage ("sprites/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke(2);
      fill(0);
      image(this.image,0, 0, this.width+10, this.height+10);
      pop();
    }
  }