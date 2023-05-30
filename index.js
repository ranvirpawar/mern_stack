// write a program to write if number is a LEAP YEAR or not
// var a = 2024
// console.log('The given year is a ' + a)
// if (a % 4 == 0){
//     if( a % 100 == 0){
//         if ( a % 400 == 0){
//             console.log("It is a leaf year")
//         }
//         else{
//             console.log("Not a leaf year")
//         }
//     }
//     else{
//         console.log("It is a leaf year")
//     }
// }else{
//     console.log('It is not a leaf year')
// }
 
// 👉 what is truthy and falsy values in Javascript?
//  we have 5 falsy values in Javascript 
//     0, "", undefined, null, NaN, false 
//     if this use in conditon it will always give false and execute only else statement

// if ( false){
//     console.log('this will not printed ')
// }else{
//     console.log('This will be executed')
// }
 
 // 👉 Ternary operator
//  the conditional operator is the only one javascript operator
//  that takes thre operands
 
// var age = 19;
// if ( age > 18){
//     console.log('You are eligible for vote');
// }else{
//     console.log('You are not eligible for vote');
// }
 
var age = 15;
var result = ( age >= 18)?('You can vote'):('You cant vote');
console.log(result);
