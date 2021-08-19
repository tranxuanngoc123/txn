import Shape from "./Shape.js";
export default class Rectangle extends Shape{
    constructor(_name,  _sizeX, _sizeY, _bgColor, _length, _width) {
        super(_name,  _sizeX, _sizeY, _bgColor);
        this.length = _length;
        this.width = _width;
    }
    getArea() {
        this.area = this.length * this.width;
    }
    draw() {
        return `<div class="text-center" style="width: ${this.sizeX}; height: ${this.sizeY} background-color: ${this.bgColor} ">
            <p>
                Tên: ${this.name};
                <br />
                Diện tích: ${this.area}
            </p>
        </div>`
    }
}