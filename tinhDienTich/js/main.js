import Shape from "./models/Shape.js";
import Square from "./models/square.js";
// import Rectangle from "./models/Rectangle.js";
// import Circle from "./Models/Circle.js";
 
const getEle = (id) => document.getElementById(id);
const renderHTML = () => {
    const shape = new Shape();
    getEle("main").innerHTML = shape.draw();
}
renderHTML();

/**
 * Diện tích hình vuông
 */

getEle("areaSquare").addEventListener("click", ()=> {
    const side = getEle("side").value;
    const sizeX = getEle("squareX").value;
    const sizeY = getEle("squareY").value;
    const bgColor  = getEle("squareColor").value;

    const square = new Square("Square", sizeX, sizeY, side, bgColor);
    square.getArea();
    getEle("main").innerHTML = square.draw();
})