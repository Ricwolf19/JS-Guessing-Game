//Get the random number with Math
//With math floor the number is rounded to the lowest option
//to get a number between 1 to 100, we need to add 1 to 100 for more probabilities to get 100 or 0
let randomNum = Math.floor((Math.random() * 100) + 1);

//In this way you can save the number in the input of the html
let inputNum = document.getElementById('inputNum');

//Variable that contains the correct mesagge for the actions
let message = document.getElementById('message');

//Variable that contains the attempts for the user
let attempt = document.getElementById('attempt');
let attempts = 0;

//Function that checks the number entered and compares to the correct result
const checkResult = () => {
    //Variable assigned the inputNum but converted to integer, and with .value used the value of the input entered
    let inputNumInt = parseInt(inputNum.value);

    //Counter for attempts
    attempts ++
    attempt.innerHTML = attempts

    //With the option .style in the html we can put a certain variety of styles (css type)
    if (inputNumInt === randomNum) {
        message.style.color = 'green'
        inputNum.disabled = true
        return message.innerHTML = "CONGRATULATIONS, YOU ARE RIGHT!!!\n THE NUMBER WAS : " + randomNum 
    } else if (inputNumInt < 1 || inputNumInt > 100){
        message.style.color = 'purple'
        return message.innerHTML = "ENTER A NUMBER WITHIN THE REQUIRED RANGE"
    } else if (inputNumInt > randomNum){
        message.style.color = 'red'
        return message.textContent = "YOUR NUMBER IS HIGHER, GOOD LOOK FOR THE NEXT TIME!!!" 
    } else if (inputNumInt < randomNum){
        message.style.color = 'red'
        return message.textContent = "YOUR NUMBER IS LOWER, GOOD LOOK FOR THE NEXT TIME!!!" 
    }
};

/* STUFF

 } else if (inputNum == isNaN){
        return message.innerHTML = "ENTER A NUMBER, NOT A STRING OR A CHAR" 
    } else {
        message.style.color = 'red'
        message.disabled = true
        return message.textContent = "YOU FAILED:(\n THE CORRECT NUMBER WAS: " + randomNum
    }

    //Thernary operator for practice
    (inputNumInt < 1 || inputNumInt > 100) ? message.innerHTML = "ENTER A NUMBER WITHIN THE REQUIRED RANGE"

    //In this condicional we ask for the inputNumInt converted to int, if this number is a string with isNan, we throw a message
    //IsNan compares that the the number entered by the input is a string and give a true or false if is or not
    //: (inputNumInt == isNaN) ? message.innerHTML = "ENTER A NUMBER, NOT A STRING OR A CHAR"

    /*                          We can use .textContent or .innerHTML (DIFFERENCES)
    // innerHTML: Sets or returns the HTML content (including tags) of an element, which is parsed and rendered as elements in the document.
    // Example: element.innerHTML = '<p>Hello, <em>world</em>!</p>';

    // textContent: Represents the text content of a node and its descendants, treating any HTML tags within the string as literal text.
    // Example: element.textContent = '<p>Hello, <em>world</em>!</p>';
    
    : message.textContent = "YOU FAILED:(\n THE CORRECT NUMBER WAS: " + randomNum

*/