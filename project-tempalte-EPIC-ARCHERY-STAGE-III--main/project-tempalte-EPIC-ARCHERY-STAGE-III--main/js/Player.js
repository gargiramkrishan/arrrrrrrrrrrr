class Player
{
  constructor(x,y)
  {
     this.x = x;
     this.y = y;
     this.width = 100;
     this.height = 400;

     this.image = loadImage("assets/player.png")
     World.add(world,this.image)
  }
  display()
  {
      imageMode(CENTER);
      image(this.image,this.x,this.y,200,400)
  }
}