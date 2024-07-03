const Shapes = require("./shapes");

class Circle extends Shapes{
    constructor(logoText, textColor, shape, shapeColor, fileType){
        super(logoText, textColor, shape, shapeColor, fileType);
        this.htmlShape; 
        this.svgShape;
    }

    renderHTML(){
        this.htmlShape = `border-radius: 50%;`
        return super.renderHTML(this.htmlShape);
    }

    //calls super class Shape method to create SVG file text
    renderSVG(){
        this.svgShape = `<circle r="100" cx="100" cy="150" fill="${this.shapeColor}"></circle>`
        return super.renderSVG(this.svgShape);
    }

}

module.exports = Circle;