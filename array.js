const fruits = ["mango","orange","banana"];
console.log(fruits);

//size
let size =  fruits.length;
console.log(fruits.length); //3

//get element using at()
let fruit = fruits.at(2);
console.log(fruit)

//get element using []
let fruit1 = fruits[1];

console.log(fruit1);

//pop-remove elements
fruits.pop();
console.log(fruits);

//push-adds element
fruits.push("kiwi");
console.log(fruits)

//shift
fruits.shift();
console.log(fruits)

//unshift
//adds a new element to an array, "unshifts" older elements
fruits.unshift("Lemon");
console.log(fruits)


//concat- concatenate 2 arrays
const veg = ["tomato","onion","radish"]

const mixture = fruits.concat(veg);
console.log(mixture);//output-[ 'Lemon', 'orange', 'kiwi', 'tomato', 'onion', 'radish' ]