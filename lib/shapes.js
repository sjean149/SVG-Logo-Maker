
class Shapes {

    //Constructor inputs and sets user values for subclassess
    constructor(logoText, textColor, shape, shapeColor, fileType) {
        let Reg_Exp = /^#[0-9A-F]{6}$/i;


        if (logoText.length > 3) {
            throw new Error("Use up to three letters");
        }
        // } else if (!Reg_Exp.test(textColor) || !Reg_Exp.test(shapeColor)){
        //     throw new Error ("Please enter a real color for text");
        // } 

        this.logoText = logoText;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.fileType = fileType;

    }

    renderHTML(shapeStyle) {
        return `<!DOCTYPE html>
        <hredtml>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        .logo{
                display: flex;
                height: 200px;
                width: 300px;
                background-color: ${this.shapeColor};
                border: 2px solid black;
                justify-content: center;
                align-items: center;
                ${shapeStyle}        
            
        

          h2 {
                color: ${this.textColor};
               
            }
            
        </style>
        </head>
        <body>
        <div class="logo">
            <h2>${this.logoText}</h2>
        </div>
    
        </body>
        </html> `
    }


    renderSVG(svgShape) {
        return `<svg width="200" height="300"  xmlns="http://www.w3.org/2000/svg">
        ${svgShape}
        <text><tspan x="10" y="180" font-size="90" fill="red" stroke="black">${this.logoText}</tspan></text>

        </svg>`

    }

    
}
module.exports = Shapes;