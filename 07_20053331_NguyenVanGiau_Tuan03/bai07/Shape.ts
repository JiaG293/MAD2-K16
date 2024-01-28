abstract class Shape {
    abstract draw(): void;
    abstract erase(): void;
    abstract move(x: number, y: number): void;
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a circle...");
    }

    erase(): void {
        console.log("Erasing a circle...");
    }

    move(x: number, y: number): void {
        console.log(`Moving circle to (${x}, ${y})...`);
    }
}

class Quad extends Shape {
    draw(): void {
        console.log("Drawing a quad...");
    }

    erase(): void {
        console.log("Erasing a quad...");
    }

    move(x: number, y: number): void {
        console.log(`Moving quad to (${x}, ${y})...`);
    }
}

class Rectangle extends Quad {
    draw(): void {
        console.log("Drawing a rectangle...");
    }

    erase(): void {
        console.log("Erasing a rectangle...");
    }
}

class Triangle extends Shape {
    draw(): void {
        console.log("Drawing a triangle...");
    }

    erase(): void {
        console.log("Erasing a triangle...");
    }

    move(x: number, y: number): void {
        console.log(`Moving triangle to (${x}, ${y})...`);
    }
}

class Polygon extends Shape {
    draw(): void {
        console.log("Drawing a polygon...");
    }

    erase(): void {
        console.log("Erasing a polygon...");
    }

    move(x: number, y: number): void {
        console.log(`Moving polygon to (${x}, ${y})...`);
    }
}

class Drawing {
    drawShape(theShape: Shape): void {
        theShape.draw();
    }
}

function mainShape() {
    const drawing = new Drawing();
    const circle = new Circle();
    const rectangle = new Rectangle();
    const triangle = new Triangle();
    const polygon = new Polygon();

    drawing.drawShape(circle);
    drawing.drawShape(rectangle);
    drawing.drawShape(triangle);
    drawing.drawShape(polygon);
}


export {Shape, Circle, Quad, Rectangle, mainShape}