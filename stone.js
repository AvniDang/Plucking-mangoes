class Stone extends BaseClass{
    constructor(x,y,radius){
        super(x,y,radius, false)
        this.image = loadImage("stone.png");
    }

    display(){
        super.display();
    }

} 