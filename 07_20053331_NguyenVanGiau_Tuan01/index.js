"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./bai1/Triangle");
//Module 0 Bai 1
var main = function () {
    var triangle1 = new Triangle_1.Triangle(3, 4, 5);
    var triangle2 = new Triangle_1.Triangle(-1, 2, 3); // Khong phai tam giac
    var triangle3 = new Triangle_1.Triangle(5, 5, 5); // Tam giac deu
    var triangle4 = new Triangle_1.Triangle(5, 5, 6); // Tam giac can
    var triangle5 = new Triangle_1.Triangle(7, 8, 9); // Tam giac thuong
    var triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    var arr = [];
    triangles.forEach(function (triangle, index) {
        arr.push(triangle.toObject());
    });
    console.table(arr);
};
main();
