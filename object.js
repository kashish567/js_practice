let Person = {
    name : "Vedant",
    age : 9,
    greet : function(){
        console.log("Hello, my name is " + this.name);
    }
}
Person.greet()


//prototype
let animal ={
    speak : function(){
        console.log(this.sound)
    }
}
let cat = Object.create(animal);
cat.sound="Meow";

cat.speak()

//classes
class Animal{
    
}