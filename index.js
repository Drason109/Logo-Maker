// import packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require("./Utility/shapes");

//creates the SVG file with user response
function writeToFile(filename, answers){
    let SVG = '<svg width="300" height="300">'
    
    SVG += `${answers.shape}`;//adds the users shape

    //creates the shape depending on the response
    let Selected;
    if(answers.shape === "Triangle"){
        Selected = new Triangle();
        SVG += `<polygon points="150,20 250,182 56,182" fill="${answers.shapeColor}"/>`;
    }else if(answers.shape === "Square"){
        Selected = new Square();
        SVG += `<rect x="50" y="20" width="150" height="150" fill="${answers.shapeColor}"/>`;
    }else{
        Selected = new Circle();
        SVG += `<circle cx="100" cy="100" r="50" fill="${answers.shapeColor}"/>`;
    }

    SVG  += `<text x="150" y="130" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    
    SVG += `</svg>`;

    //generates the SVG file
    fs.writeFile(filename, SVG, (err)=>{
        err ? console.log(err) : console.log("Generated logo.svg");
    });

}

//prompts the user with questions
function promptsChoices(){
    inquirer.prompt([
            {
                type: "input",
                message: "What do you want to say on your logo? (Enter up to three Characters)",
                name: "text"
            },
            {
                type: "input",
                message: "Choose text color (Enter color keyword or hexadecimal number)",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape would you like the logo to render?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape"
            },
            {
                type: "input",
                message: "Choose shapes color (Enter color keyword or hexadecimal number)",
                name: "shapeColor"
            }
        ]).then((answers) => {//reprompt if text is longer than 3
            if(answers.text.length > 3){
                console.log("Must enter a value of no more than 3 characters");
                promptsChoices();
            }else{
                writeToFile("logo.svg", answers);
            }
        });

    }
        //call function
        promptsChoices();