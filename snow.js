class snow {
   constructor(x, y, width, height) {
      var options = {
         'restitution':3,
           'density':20
      }
     this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image = loadImage("snow5.webp")
    }
    display(){
      var pos =this.body.position;
     var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
image(this.image,0, 0, this.width, this.height)

      pop();
    }
  }