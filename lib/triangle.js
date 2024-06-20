const Shapes = require("./shapes");

class Triangle extends Shapes{
    constructor(logoText, textColor, shape, shapeColor, fileType){
        super(logoText, textColor, shape, shapeColor, fileType);
        this.shapeStyle; 
        this.shapeSVG;
    }

    renderTriangleHTML(){
        this.shapeStyle = `
        width: 0;
        height: 0;
        background-color: white;
        border-left: 125px solid transparent;
        border-right: 125px solid transparent;
        border-bottom: 150px solid ${this.shapeColor}
    } 
        
        .logo h2 { 
        padding-top: 150px;
        }
        `
    }

    renderTriangleSVG(){
        this.shapeSVG = `<polygon points="10,0 10,300 200,150" fill="lime"/>`;
        return this.shapeSVG;
    }

    renderHTML(){
        this.shapeSVG = renderTriangleHTML(); 
        return super.renderHTML(this.shapeStyle);
    }

    //calls super class Shape method to create SVG file text
    renderSVG(){
        this.renderTriangleSVG();
        return super.renderSVG(this.shapeSVG);
    }


}

module.exports = Triangle;