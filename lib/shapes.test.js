const { Triangle, Circle, Rectangle } = require('./shapes');

describe('Triangle Test', () => {
    it('should return a triangle with a color', () => {
        const triangle = new Triangle('red');
        expect(triangle.render()).toEqual('<polygon points ="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe('Circle Test', () => {
    it('should return a circle with a color', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Rectangle Test', () => {
    it('should return a rectangle with a color', () => {
        const rectangle = new Rectangle("green");
        expect(rectangle.render()).toEqual('<rect x="50" y="50" width="300" height="200" fill="green" />');
    });
});