
//Implicit type conversion
let num = 10; //number
let str = "20"; //string

let result = num + str;
console.log(result);

//Explicit
let stri = "10";
let numb = parseInt(stri); // Explicit conversion from string to number
console.log(numb); // Output: 10
console.log(typeof numb); //number


//explicit-type 2
let number = 10;
let string = number.toString(); // Explicit conversion from number to string
console.log(string); // Output: "10"
console.log(typeof string); //string
