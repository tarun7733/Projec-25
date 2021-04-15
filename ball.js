class Ball{
    constructor(x,y){
       var option={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.body = Bodies.circle(x,y,15,option);
       this.radius=50;
       World.add(world,this.body);
    }

    display(){
        //pos=this.body.position
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("orange");
        ellipse(this.body.position.x,this.body.position.y,25,25);
    }
}