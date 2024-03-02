console.log(typeof 42); // Output: "number"

console.log(typeof "Hello"); // Output: "string"

console.log(typeof true); // Output: "boolean"

console.log(typeof undefined); // Output: "undefined"

console.log(typeof null); // Output: "object" ( null is actually an object)

console.log(typeof {}); // Output: "object"

console.log(typeof function(){}); // Output: "function"

var a = 2;
console.log(typeof a);

//
var ed = "ee"
console.log(typeof(ed)); //string

var ee = String
console.log(typeof ee);//function

var eb = String()
console.log(typeof eb);//string

var ab = [1,2,3,4]
console.log(typeof ab)

let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log(x);
console.log(typeof x)

let y= 9.656;
let result = y.toExponential(2);
console.log(result);