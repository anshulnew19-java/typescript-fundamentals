class Point{
    x: number;
    y: number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X is : " + this.x + " "+ "Y is : " + this.y);
    }
}

let point = new Point();
point.draw();