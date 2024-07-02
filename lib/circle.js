const Shapes = require("./shapes");

class Circle extends Shapes{
    constructor(logoText, textColor, shape, shapeColor, fileType){
        super(logoText, textColor, shape, shapeColor, fileType);
        this.htmlShape; 
        this.svgShape;
    }


    renderCircleHTML() {
        this.htmlShape = `border-radius: 50%;`
        return
    }

    renderCircleSVG(){
        this.svgShape = `<circle r="100" cx="100" cy="150" fill="green"></circle>`
        return

    }

    renderHTML(){
        this.renderCircleHTML();
        return super.renderHTML(this.shapeStyle);
    }

    //calls super class Shape method to create SVG file text
    renderSVG(){
        this.renderCircleSVG();
        return super.renderSVG(this.svgShape);
    }

}

module.exports = Circle;