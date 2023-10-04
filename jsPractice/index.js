// write a program to write if number is a LEAP YEAR or not
var a = 2024
console.log('The given year is a ' + a)
if (a % 4 == 0){
    if( a % 100 == 0){
        if ( a % 400 == 0){
            console.log("It is a leaf year")
        }
        else{
            console.log("Not a leaf year")
        }
    }
    else{
        console.log("It is a leaf year")
    }
}else{
    console.log('It is not a leaf year')
}
 
// 👉 what is truthy and falsy values in Javascript?
//  we have 5 falsy values in Javascript 
//     0, "", undefined, null, NaN, false 
//     if this use in conditon it will always give false and execute only else statement

if ( false){
    console.log('this will not printed ')
}else{
    console.log('This will be executed')
}
 
 // 👉 Ternary operator
//  the conditional operator is the only one javascript operator
//  that takes thre operands
 
var age = 19;
if ( age > 18){
    console.log('You are eligible for vote');
}else{
    console.log('You are not eligible for vote');
}
 
var age = 15;
var result = ( age >= 18)?('You can vote'):('You cant vote');
console.log(result);

for (var num = 0; num <= 10; num++){
    console.log(num);
}

// ✅ Function is block of code design to perform a specific task
//         syntax
// function demoName( parameter1, parameter2 ){
//     // your code
// }

function sum (a, b){
    
    var total = a+b;
    console.log(total);
}
sum( 34,56);
sum( 200, 345);

// denifing a function does not execute the it 
// in js you need something to call it in order to execute

// ❓ Function Parameter vs function Arguments
//  Function parameters are the names isted in the function's def 
//  Function Arguments are the real values passed to the function.
 

// ✅ Function Expressions

function sum (a, b){
    
    var total = a+b;
    return total;
}
var sum = sum (34,56);
console.log('the sum of two numbers is' + sum);

// ✅ Anonymous Function

var funExp = function(a, b){
    
    var total = a+b;
    return total;
}
var sum = funExp( 34,534)
console.log( sum )

// 🔜🔜🔜🔜🔜 ECMAScript 6 🔜🔜🔜🔜🔜🔜🔜

// let and const
// template string
// default arguments 
// rest operators
// destructuring
// object properties
// arrow functions
// spread operators

// 1️⃣  let vs const vs var
//     var ==> Function scope 
//     let and const ==> Block scope

// 2️⃣ Template Literals 

for(let num = 1; num<=10; num++){
    let tableOf = 12;
    // console.log(tableOf + " * " + num + " = " + tableOf * num);
    console.log(` ${tableOf} * ${num} = ${tableOf * num}`)
}

// 3️⃣ default Parameters 

function mult(a, b=3){
    return a*b;
}
console.log(mult(14));


// 4️⃣🍀  Fat ARROW FUNCTIONS

// Normal way of writing Functions   
function sum(){
    let a = 5; b=6;
    let sum = a+b;
    return ` the sum of two numbers is  ${sum}`;
}
console.log(sum ())
    // How to convert it into Fat ARROW Function

const sum = (a,b) => {
    
    return ` the sum of two numbers is  ${(a+b)}`;
}
console.log(sum(3,4))


/*5️⃣ ARRAYS in Javascript */
    // in javascript only we can stored multiple datatypes in single array
        // in js ,we have an Array Class, and 
        // arrays are prototype of this class
// var myfriends = new Array; /// optional line

// var myfriends = [ 'ramesh',  'arjun',  'vishal' ]
// console.log(myfriends[-1]);
// console.log(myfriends[myfriends.length-1]);
 //for loop
for(var i=0; i<myfriends.length; i++){
    console.log(myfriends[i]);
} 
//  ES6 introduced For...In and For... Of loop
var myfriends = [ 'ramesh',  'arjun',  'vishal' ]

 for(let elements in myfriends){
    console.log(elements);
 } // returns index of arrays

for ( let elements of myfriends){
    console.log(elements)
}

myfriends.forEach(function(elements, index, array){
    console.log(elements + " index No : " + index + " " + array)
})
 
myfriends.forEach((elements, index, array) => {
    console.log(elements + " index No : " + index + " " + array)
});




