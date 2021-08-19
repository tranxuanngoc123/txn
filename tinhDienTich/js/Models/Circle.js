import Shape from "./Shape.js";

export default class Circle extends Shape{
    constructor(_name,  _sizeX, _sizeY, _bgColor, _radius) {
        super(_name,  _sizeX, _sizeY, _bgColor,)
        this.radius = _radius ;       
   }
   getArea() {
        this.area = 3.14 * Math.pow(this.radius, 2);
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