const Shapes = require("./shapes");

class Square extends Shapes{
    constructor(logoText, textColor, shape, shapeColor, fileType){
        super(logoText, textColor, shape, shapeColor, fileType);
        this.htmlShape; 
        this.svgShape;
    }

    renderSquareHTML(){
        this.htmlShape = `}`;
        return `}`

    }

    renderSquareSVG(){
        this.svgShape = `<rect width="200" height="200" x="10" y="50" fill="lightgreen"></rect>`
        return this.svgShape;

    }

    renderHTML(){
        renderSquareHTML(); 
        return super.renderHTML(this.shapeStyle);
    }

    //calls super class Shape method to create SVG file text
    renderSVG(){
        this.renderSquareSVG();
        return super.renderSVG(this.svgShape);
    }
    
}

module.exports = Square;