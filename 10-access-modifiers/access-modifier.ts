class Point{
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X is : " + this.x + " "+ "Y is : " + this.y);
    }
}

let point = new Point(30,40);
point.draw();