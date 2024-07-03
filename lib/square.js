const Shapes = require("./shapes");

class Square extends Shapes{
    constructor(logoText, textColor, shape, shapeColor, fileType){
        super(logoText, textColor, shape, shapeColor, fileType);
        this.htmlShape; 
        this.svgShape;
    }

    renderHTML(){
        this.htmlShape = `}`;
        return super.renderHTML(this.htmlShape);
    }

    //calls super class Shape method to create SVG file text
    renderSVG(){
        this.svgShape = `<rect width="200" height="200" x="10" y="50" fill="lightgreen"></rect>`
        return super.renderSVG(this.svgShape);
    }
    
}

module.exports = Square;