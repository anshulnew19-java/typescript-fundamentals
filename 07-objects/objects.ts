class Point{
    x: number;
    y: number;

    draw() {
        console.log("X is : " + this.x + " "+ "Y is : " + this.y);
    }

    getDistance(another: Point){
        //....
    }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();