const Triangle = require('../lib/triangle');

describe('my Triangle tests', () => {

    test('Should create new triangle class and render SVG code for it', () => {
        const triangle = new Triangle('ABC', 'blue', 'cirlce', 'yellow', 'SVG');
        triangle.renderSVG();
        expect(triangle.svgShape).toBe(`<polygon points="10,0 10,300 200,150" fill="lime"/>`);

    })

    test('Should create square class and render HTML/CSS code for it', ()=>{
        const triangle = new Triangle('ABC', 'red', 'cirlce', 'pink', 'HTML');
        triangle.renderHTML();
        expect(triangle.htmlShape).toBe(`
        width: 0;
        height: 0;
        background-color: white;
        border-left: 125px solid transparent;
        border-right: 125px solid transparent;
        border-bottom: 150px solid pink
    } 
        
        .logo h2 { 
        padding-top: 150px;
        }
        `)

    })
});

