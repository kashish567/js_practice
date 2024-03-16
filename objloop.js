let newObj= {
    name : 'kashish',
    surname : 'bhanushali'
}
let obj1 = newObj.name + " "+ newObj.surname
console.log(obj1)



let animal={
    dog : "bark",
    cat: 'meow'
}
let sound= animal.dog
let sound1=animal.cat
console.log(sound, sound1)





let obj2 = { a: 1, b: 2, c: 3 };

for (let key in obj2) {
  console.log(key + ": " + obj2[key]);
}



let Person = {
    name : "Vedant",
    age : 9,
    greet : function(){
        console.log("Hello, my name is " + Person.name)
    }
   
}
Person.greet()


let opera={
    num1:10,
    num2:20,
    add: function(){
        console.log(opera.num1+opera.num2)
    }
}
opera.add()