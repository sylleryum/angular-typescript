import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(10,15,20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 1, 3, 7);
console.log(myRectangle.getInfo());