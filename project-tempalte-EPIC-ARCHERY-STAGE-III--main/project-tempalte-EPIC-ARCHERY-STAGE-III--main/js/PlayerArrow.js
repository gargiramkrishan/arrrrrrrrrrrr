class Shoot
{
   constructor(x,y,width,height)
   {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;

     var option = 
     {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
     }
     
     this.image = loadImage("assets/arrow.png")
     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
     World.add(world, this.body);
   }
   shoot()
   {
     var velocity = p5.Vector.fromAngle(aroow.angle)
     velocity.mult(25)
     Matter.Body.setStatic(this.body, false)
     Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
   }
   display()
   {
     var angle = this.body.angle;
     var pos = this.body.position;

     push()
     translate(pos.x, pos.y)
     rotate(angle)
     image(this.image,0,0,this.width,this.height)
     pop()
   }
}