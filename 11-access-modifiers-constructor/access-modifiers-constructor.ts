class Point{

    constructor(private x: number, private y: number){
    }

    draw() {
        console.log("X is : " + this.x + " "+ "Y is : " + this.y);
    }
}

let point = new Point(30,40);
point.draw();