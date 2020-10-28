class Ground{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.base = Bodies.rectangle(x,y, width, height, options);
        this.width = width
        this.height = height
        World.add(world, this.base)
    }
    display(){
        fill("green");
        rect(this.base.position.x, this.base.position.y, this.width, this.height);
    }
    
}