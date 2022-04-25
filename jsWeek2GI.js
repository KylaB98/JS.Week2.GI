//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

let x = 23;
let y = 68;

//console.log(Math.min(x, y));

function min(x, y){
    if (x < y)
        return x;
    else
        return y;
}

//EASY: Create an array of students holding their last name, first name, and age with 3 students. To
//validate, please log a greeting with the first name, last name and age of the 2nd student.

let studentFirstName = ["Sam", "Dean", "Castiel"];
let studentLastName = ["Smith", "Winchester", "Novak"];
let studentAge = [34, 38, 39];
var studentsInfo = [studentFirstName, studentLastName, studentAge];

console.log('Hello ' + studentFirstName[1] + ' ' + studentLastName[1] + ',' + studentAge[1])

//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
//and its corresponding month.Alert the user if they enter an invalid number.

const monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const userInput= prompt("Please type a number between 1-12.");

if(userInput === 1){
  console.log("January")
}
else if(userInput === 2){
  console.log("February")
} 
else if(userInput === 3){
  console.log("March")
} 
else if(userInput === 4){
  console.log("April")
} 
else if(userInput === 5){
   console.log("May")
} 
else if(userInput === 6){
    console.log("June")
} 
else if(userInput === 7){
   console.log("July")
} 
else if(userInput === 8){
   console.log("August")
} 
else if(userInput === 9){
  console.log("September")
} 
else if(userInput === 10){
   console.log("October")
} 
else if(userInput === 11){
  console.log("November")
} 
else if(userInput === 12 ){
   console.log("December")
} 
else {
   alert("Invalid Input")
};

//HARD: Given the information below for Tom and Jerry.
//● Tom - height:  9in mass: 8 g
//● Jerry - height: 10in mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
//variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
//console with the variable from step 3 

const heightTom = 9;
const massTom = 8;
const heightJerry= 10;
const massJerry = 45;

const BMITom = massTom / heightTom ^2
const BMIJerry = massJerry / heightJerry ^2
const compareBMI= BMITom > BMIJerry
console.log(BMITom, BMIJerry, compareBMI)

if (compareBMI === false)
    console.log("Is Tom's BMI higher than Jerry's BMI?" + " " + compareBMI)
else {
    console.log("Is Jerrys's BMI higher than Tom's BMI" + " " + compareBMI)
};

//function compareBMI(BMITom, BMIJerry) {
 //  console.log(BMITom > BMIJerry);
//}
 //compareBMI();
