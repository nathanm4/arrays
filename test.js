
// It is a common practice to declare arrays with the const keyword.
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);


// Spaces and line breaks are not important. A declaration can span multiple lines:
const cars2 = [
    "Saab",
    "Volvo",
    "BMW"
];

// You can also create an array, and then provide the elements:
const cars3 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// The following example also creates an Array, and assigns values to it:
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.
const cars4 = new Array("Saab", "Volvo", "BMW");
console.log(cars4);

// You access an array element by referring to the index number:
const cars5 = ["Saab", "Volvo", "BMW"];
let car = cars[0];


//changing an array element
const cars6 = ["Saab", "Volvo", "BMW"];
cars[0] = 'mercedes';


//access the full array
const cars7 = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars7;


//ARRAYS ARE OBJECTS
/*
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:*/

const person = ["John", "Doe", 46];

// Objects use names to access its "members". In this example, person.firstName returns John:
const person2 = {firstName:"Bob", lastName:"Hill", age:69};

/*Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:*/

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

/*Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:*/
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

// The length property of an array returns the length of an array (the number of array elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
//accessing the first array element
let fruit = fruits[0];
//ACCESSING THE LAST array element

let lastFruit = fruits[length - 1];

//Looping array elements
//using for loop:

const apples = ["granny smith", "fuji", "crab", "mcintosh"]
let aLenght = apples.length;

let text = "<ul>";

for (let i = 0; i < aLenght; i++) {
    text += "<li>" + apples[i] + "</li>";
}
text += "</ul>";

console.log(text);

// You can also use the Array.forEach() function:

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let text2 = "<ul>";
fruits.forEach(myFunction);
text2 += "</ul>";

function myFunction(value) {
    text2 += "<li>" + value + "</li>";
}

