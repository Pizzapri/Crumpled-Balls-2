class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0,
            density:10
        }
        this.x=x;
        this.y=y;
        this.radius=r;
        this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
        this.image=loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        fill("#E800E3");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}