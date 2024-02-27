//Implement methods of arrays and strings to function
//array methods
//map function
function myMap(arr , callback){
        let result = [];
        for (let i=0; i<arr.length; i++){
            result.push(callback(arr[i],i,arr));
        }
        return result;
}

let numbers = [1,2,3,4,5]
let doubled = myMap(numbers, (num)=> num*2)
console.log(doubled)


//filter function
function myFilter(arr, callback){
    let res = [];
    for(let i=0; i<=arr.length;i++){
        if (callback(arr[i],i,arr)) {
            res.push(arr[i])
        }
    }

    return res;
}

let numb = [2,3,4,5,6,7,8]
let even = myFilter(numb,(num)=> num%2===0);
console.log(even);


function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

let num1 = [1, 2, 3, 4, 5];
let sum = myReduce(num1, (acc, num) => acc + num, 0);
console.log("Sum:", sum);


//string methods
//toUpperCase()
function myToUpperCase(str){
        let res1 = '';
        for (let i =0;i<str.length;i++){
            let charCode = str.charCodeAt(i);
            if(charCode>=97 && charCode<=122){
                res1 +=String.fromCharCode(charCode - 32)
            }else{
                res1 += str[i];
            }
        }
        return res1;
}

let text = "Hello, World!"
let upperCaseText = myToUpperCase(text);
console.log(upperCaseText);

//split function
function mySplit(str,separator){
        let res2 = [];
        let start = 0;
        for(let i = 0;i<str.length;i++){
            if(str[i]===separator){
                res2.push(str.substring(start,i));
                start = i+1;
            }
        }
        res2.push(str.substring(start));
        return res2;
}

let sentence = "Hello, how are you?";
let words = mySplit(sentence, ' ');
console.log(words);