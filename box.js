class Box {
    constructor(x, y, w, h){
        var options = {
            restitution: 0.2,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
            World.add(world, this.body);
            this.w = w
            this.h = h
    }
     display(){
         var pos = this.body.position;
         rectMode(CENTER);
         fill("red");
         rect(pos.x, pos.y, this.w, this.h);
     }
}