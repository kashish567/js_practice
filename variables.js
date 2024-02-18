//var keyword

var name = "kashish"
console.log(name);

//it will print this also, as var keyword is used
var name = "vedant" 
console.log(name);


//let keyword
let a = 4
let b = 8
console.log(a+b);


//const keyword
const age = 20 
console.log(age);

//we cannot re-declare const unlike var keyword, it will give a error
//const age = 30;
//console.log(age);
//it will throw error

//we cannot use a local variable outside the scope
function myFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}


//cannot be declared here
// console.log(localvar);