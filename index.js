//import inquirer from 'inquirer';
const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes');

const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

let logoLetters;
let fileType;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoLetters',
            message: "Enter up to three characters",
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like the text to be?",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose one of the following shapes for your logo",
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your shape to be?",

        },
        {
            type: "list",
            name: "fileType",
            message: "Choose one of the following two file types for your logo",
            choices: ["HTML", "SVG"],
        }


    ]).then(data => {
        let currentLogo;
        fileType = data.fileType;

        if (data.shape == 'Circle') {
            currentLogo = new Circle(data.logoLetters, data.textColor, data.shape, data.shapeColor, data.fileType);
        } else if (data.shape == 'Triangle') {
            currentLogo = new Triangle(data.logoLetters, data.textColor, data.shape, data.shapeColor, data.fileType);
        } else {
            currentLogo = new Square(data.logoLetters, data.textColor, data.shape, data.shapeColor, data.fileType);
        }


        //creates html and svg content for files
        if (data.fileType == 'HTML') {
            htmlLogo = currentLogo.renderHTML();
            return htmlLogo;
        } else if (data.fileType == 'SVG') {
            svgLogo = currentLogo.renderSVG()
            return svgLogo;
        } return;


    }).then(data => {
        
        //deletes logo html file if one exists and user chooses to make html file
        if (fileType == 'HTML') {
            if (fs.existsSync('logo.html')) {
                fs.unlinkSync('logo.html');
            }

            fs.writeFileSync(`./generatedFiles/logo.html`, data, err => {
                console.error("there was an error", err);
            });
        };


        //deletes logo svg file if one exists and user chooses to make svg file
        if (fileType == 'SVG') {
            if (fs.existsSync('logo.svg')) {
                fs.unlinkSync('logo.svg');
            }

            fs.writeFileSync(`./generatedFiles/logo.svg`, data, err => {
                console.error("there was an error", err);
            });
        };




    });
