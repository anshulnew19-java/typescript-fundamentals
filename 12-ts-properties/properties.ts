class Point{

    constructor(private _x: number, private _y: number){
    }


    public get x(): number{
        return this._x;
    }

    public set x(value: number){
        this._x = value;
    }

    public get y(): number{
        return this._y;
    }

    public set y(value: number){
        this._y = value;
    }


    draw() {
        console.log("X is : " + this._x + " "+ "Y is : " + this._y);
    }


}

let point = new Point(30,40);
point.draw();