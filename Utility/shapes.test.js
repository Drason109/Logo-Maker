
//import the modules
const { describe } = require("node:test");
const { Triangle, Square, Circle} = require("./shapes.js");

//test: renders a red triangle
describe("Triangle test", ()=> {
    test("test for a triangle with a red background", () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<polygon points="150,18 244,182 56,182" fill="red"/>'
        );
    });
});


//test: renders a green square
describe("Square test", () => {
    test("test for a square with a green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<rect x="50" y="20" width="150" height="150" fill="green"/>'
        );
    });
});
//test: renders a blue circle
describe("Circle test", () => {
    test("test for a circle with a blue background", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<circle cx="100" cy="100" r="50" fill="blue"/>'
            );
        });

    });