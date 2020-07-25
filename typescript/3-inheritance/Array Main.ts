import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myShape = new Shape(10,15);
let myCircle = new Circle(10,15,20);
let myRectangle = new Rectangle(0, 1, 3, 7);

let theShapes: Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}