class Arrow
{
  constructor(x,y,width,height,angle)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,this.angle)
    this.image = loadImage("assets/playerArcher.png")

  }
  display()
  {
    if(keyIsDown(RIGHT_ARROW) && this.angle < 457.59999999999997)
    {
       this.angle += 0.2;
    }

    if(keyIsDown(LEFT_ARROW) && this.angle > 456.40000000000003)
    {
       this.angle -= 0.2;
    }
  
    console.log(this.angle)
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    image(this.image,0,0,this.width,this.height)
    pop()
  }
}