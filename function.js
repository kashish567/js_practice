//function
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person);

//constructor function
function info(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}

let Info = new info("Kashish", 20, true);
console.log(Info);
console.log(Info.name);