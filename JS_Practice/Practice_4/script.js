class Main{
    constructor() {
        let box = new Box(2, 4, 4, 4);
        let circle = new Circle(-2, -2, 4);
        box.printValues();
        circle.printValues();
    }
}
class Shape{
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    printValues() {
        console.log("x: " + this.x);
        console.log("y: " + this.y);
    }
}

class Box extends Shape{
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    printValues() {
        super.printValues()
        console.log("width: " + this.width);
        console.log("height: " + this.height);
    }
}

class Circle extends Shape{
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    printValues() {
        super.printValues()
        console.log("radius: " + this.radius);
    }
}
let main = new Main;
main.box;