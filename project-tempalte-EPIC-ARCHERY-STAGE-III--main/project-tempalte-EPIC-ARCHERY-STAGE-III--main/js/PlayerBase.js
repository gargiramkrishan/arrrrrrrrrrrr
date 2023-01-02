class Base
{
   constructor(x,y)
   {
      this.x = x;
      this.y = y;;
      this.width = 400;
      this.height = 500;

      this.image = loadImage("assets/base1.png")

   }
   display()
   {
     image(this.image,this.x,this.y,400,500)
   }
}