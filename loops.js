//for loop
for(let i=0;i<5;i++){
    console.log(i)
}

//while
let i=0;
while(i<6){
    console.log(i);
    i++;
}

//do-while
let j = 0;
do{
    console.log(j);
    j++;
}while(j<10);

//for-in
const person={
    name:"Vedant",
    age: 10,
    city: "Bhiwandi"
};
for(let key in person){
    console.log(key +":"+person[key]);
}
