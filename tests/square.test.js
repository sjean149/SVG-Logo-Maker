const Square = require('../lib/square');

describe('my square tests', () => {

    test('Should create new square class and render SVG code for it', () => {
        const square = new Square('ABC', 'blue', 'cirlce', 'yellow', 'SVG');
        square.renderSVG();
        expect(square.svgShape).toBe(`<rect width="200" height="200" x="10" y="50" fill="lightgreen"></rect>`);

    })

    test('Should create square class and render HTML/CSS code for it', ()=>{
        const square = new Square('ABC', 'red', 'cirlce', 'pink', 'HTML');
        square.renderHTML();
        expect(square.htmlShape).toBe(`}`);

    })
});

