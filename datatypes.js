//number
let x = 4; //int
let y =3.14; //float

console.log(x);
console.log(y);

//string
let msg="hello, js!"
console.log(msg);

//boolean
let isTrue = true;
let isFalse = false;


//undefined
let undefinedVar;
console.log(undefinedVar); 

//symbol
const sym = Symbol('@');
console.log(sym);

//Object
let Object= {
    name:"kashish",
    age : 20,
    isStudent : true  
}
console.log(Object);


//Array
let num = [1,2,4,5];
console.log(num);

//function
function animal(name){
    console.log("This is " + name + "!");
}
animal("horse");


//map
let myMap = new Map();
myMap.set("age1", "20");
myMap.set("age2", "30");
console.log(myMap.get("age1")); // Output: value1
console.log(myMap.get("age2")); // Output: value2

//set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet.size); // Output: 3


