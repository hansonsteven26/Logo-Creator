const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Rectangle } = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the text?!?",
            name: "inputText"
        },
        {
            type: "input",
            message: "What is the text color?",
            name: "textColor"
        },
        {
            type: "list",
            message: "Which shape do you want?",
            choices: ["Circle", "Triangle", "Rectangle"],
            name: "shapeType"
        },
        {
            type: "input",
            message: "How is your shape colored?",
            name: "shapeColor"
        },

    ]).then((result) => {
        let shapeType;

        if (result.inputText.length > 3) {
            console.error('Text must be less than 3 characters');
        }
        else {
            let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n';

            if (result.shapeType == 'Triangle') {
                shapeType = new Triangle(result.shapeColor);
                svgString += shapeType.render();
            }
            else if (result.shapeType == 'Circle') {
                shapeType = new Circle(result.shapeColor);
                svgString += shapeType.render();
            }
            else if (result.shapeType == 'Rectangle') {
                shapeType = new Rectangle(result.shapeColor);
                svgString += shapeType.render();
            }

            svgString += `\n\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${result.textColor}">${result.inputText}</text>\n\n</svg>`;

            fs.writeFile('logo.svg', svgString, err => {
                err ? console.error(err) : console.log('Generated logo.svg');
            })
        }

    }).catch((err) => {
        console.error(err);
    });

