const Circle = require('../lib/circle');

describe('my circle tests', () => {

    test('Should create new circle class and render SVG code for it', () => {
        const circle = new Circle('ABC', 'blue', 'cirlce', 'yellow', 'SVG');
        circle.renderCircleSVG();
        expect(circle.svgShape).toBe(`<circle r="100" cx="100" cy="150" fill="green"></circle>`);

    })

    test('Should create circle class and render HTML/CSS code for it', ()=>{
        const circle = new Circle('ABC', 'red', 'cirlce', 'pink', 'HTML');
        circle.renderCircleHTML();
        expect(circle.htmlShape).toBe(`border-radius: 50%;`)

    })
});

