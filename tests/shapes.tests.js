const Shapes = require('../lib/shapes');

describe('Shape class tests', () => {

    test('renders HTML for logo file whith shape details', ()=> {
        const shape = new Shapes('ABC', 'red', 'cirlce', 'pink', 'HTML');
        const htmlShapes = shape.renderHTML();
        console.log(htmlShapes);
        expect(htmlShapes).toBe(`<!DOCTYPE html>
        <hredtml>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        .logo{
                display: flex;
                height: 200px;
                width: 300px;
                background-color: pink;
                border: 2px solid black;
                justify-content: center;
                align-items: center;
                ${shapeStyle}        
            
        

          h2 {
                color: red;
               
            }
            
        </style>
        </head>
        <body>
        <div class="logo">
            <h2>ABC</h2>
        </div>
    
        </body>
        </html> `)
    })
})