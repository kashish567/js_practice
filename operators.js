//arithmetic operators
let a = 5;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(b%a);

//assignment operators
let x = 5;
x += 5;
console.log(x);

//comparison operators
let age = 25;
console.log(age == 25);
console.log(age === '25');
console.log(age != 30);
console.log(age > 20);
console.log(age <=30);

//logical operators
let isLoggedIn =  true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isAdmin);


let c = 5; // 101
let d = 3; // 011
console.log(c & d); // Bitwise AND: 001 (1)
console.log(c | d); // Bitwise OR: 111 (7)
console.log(c ^ d); // Bitwise XOR: 110 (6)
console.log(~c) // Bitwise NOT: 11111111111111111111111111111010 (-6)
