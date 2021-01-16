class Ground{
constructor(x,y,w,h,o){
   var o = {
       isStatic: true
   }
   this.x = x;
   this.y = y;
   this.width = w;
   this.height = h;
   this.body = Bodies.rectangle(x,y,w,h,o);
   World.add(world,this.body)
}
present(){

    var pos = this.body.position;  

  push();
  rectMode(CENTER);
  fill(255);
  rect(pos.x,pos.y,this.width,this.height);
  pop();
}
}