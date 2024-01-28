"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainShape = exports.Rectangle = exports.Quad = exports.Circle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle...");
    };
    Circle.prototype.erase = function () {
        console.log("Erasing a circle...");
    };
    Circle.prototype.move = function (x, y) {
        console.log("Moving circle to (".concat(x, ", ").concat(y, ")..."));
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var Quad = /** @class */ (function (_super) {
    __extends(Quad, _super);
    function Quad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quad.prototype.draw = function () {
        console.log("Drawing a quad...");
    };
    Quad.prototype.erase = function () {
        console.log("Erasing a quad...");
    };
    Quad.prototype.move = function (x, y) {
        console.log("Moving quad to (".concat(x, ", ").concat(y, ")..."));
    };
    return Quad;
}(Shape));
exports.Quad = Quad;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.draw = function () {
        console.log("Drawing a rectangle...");
    };
    Rectangle.prototype.erase = function () {
        console.log("Erasing a rectangle...");
    };
    return Rectangle;
}(Quad));
exports.Rectangle = Rectangle;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("Drawing a triangle...");
    };
    Triangle.prototype.erase = function () {
        console.log("Erasing a triangle...");
    };
    Triangle.prototype.move = function (x, y) {
        console.log("Moving triangle to (".concat(x, ", ").concat(y, ")..."));
    };
    return Triangle;
}(Shape));
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.prototype.draw = function () {
        console.log("Drawing a polygon...");
    };
    Polygon.prototype.erase = function () {
        console.log("Erasing a polygon...");
    };
    Polygon.prototype.move = function (x, y) {
        console.log("Moving polygon to (".concat(x, ", ").concat(y, ")..."));
    };
    return Polygon;
}(Shape));
var Drawing = /** @class */ (function () {
    function Drawing() {
    }
    Drawing.prototype.drawShape = function (theShape) {
        theShape.draw();
    };
    return Drawing;
}());
function mainShape() {
    var drawing = new Drawing();
    var circle = new Circle();
    var rectangle = new Rectangle();
    var triangle = new Triangle();
    var polygon = new Polygon();
    drawing.drawShape(circle);
    drawing.drawShape(rectangle);
    drawing.drawShape(triangle);
    drawing.drawShape(polygon);
}
exports.mainShape = mainShape;
