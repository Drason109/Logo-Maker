class Shape {//gives it color to the shape
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}


//inherits the shape class for triangle
class Triangle extends Shape {
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`;
    }
}


//inherits the shape class for Circle
class Circle extends Shape {
    render(){
        return  `<circle cx="100" cy="100" r="50" fill="${this.color}"/>`;
    }
}

//inherits the shape class for Square
class Square extends Shape {
    render(){
        return  `<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>`
    }
}

//exports the classes
module.exports = {Triangle, Circle, Square};