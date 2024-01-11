import { Triangle } from "./Triangle";


//Module 0 Bai 1
const main = () => {
    const triangle1: Triangle = new Triangle(3, 4, 5);
    const triangle2: Triangle  = new Triangle(-1, 2, 3); // Khong phai tam giac
    const triangle3: Triangle  = new Triangle(5, 5, 5); // Tam giac deu
    const triangle4: Triangle  = new Triangle(5, 5, 6); // Tam giac can
    const triangle5: Triangle  = new Triangle(7, 8, 9); // Tam giac thuong
    const triangles : Triangle[] = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    let arr : any[] = [];
    triangles.forEach((triangle, index) => {
        arr.push(triangle.toObject())
    });
    console.table(arr);
    
}



main()










