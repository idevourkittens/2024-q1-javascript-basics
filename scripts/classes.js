//@ts-check

class Ball 
{
    constructor(brand) 
    {
        this.brand = brand;
        this.shape = "sphere";
        this.color = "red";
        this.pattern = "plain";
        this.cost = 1.00;
        this.bounce = 5;
    }

    play() 
    {
        console.log(`This ball is from ${this.brand} it is ${this.color} 
        the pattern is ${this.pattern} it is shaped like a ${this.shape}
        it costs ${this.cost} and its bounce level is ${this.bounce}`);
    }
}

let ballOne = new Ball("JackBros");
ballOne.color = "blue";
ballOne.pattern = "polka-dot";
ballOne.shape = "sphere";
ballOne.cost = 1.25;
ballOne.bounce = 6;

ballOne.play();