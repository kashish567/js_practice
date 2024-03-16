const fruits = ["mango","orange","banana"];
console.log(fruits);
fruits.push["kiwi"];
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

//accessing element inside array
let arr = [[1,2,3],[4,5,6]];
console.log(arr[0][1]);
console.log(arr[1][2]);

//
const ab = ["mango","orange","banana"];
console.log(ab);
ab.push("kiwiew2e");
console.log(ab);