// ------------ Debugging and Testing tools: ------------

// Using console.log()
// Run `node` in terminal to enter a REPL
// Debugger

// ------------ Variables: ------------

// What is a variable?

// How can a variable be declared

// What is the difference between let and const

//*********const: when we don't expect a value to change, we can't redeclare the variable.
// *********let: allows us to reassign the value of a variable but it doesn't let us redeclare the variable.
//let would be appropriate for a counter

// ------------ 7 data types in JS: ------------

// Number
//whole number: 5
//float number: 11.2
//NaN: Not a Number: of some miscalculation between something that is a number something that is not a number 


// String
//""
//''
//``

// Undefined
//*** non existent value */
//*** no value has been assigned */
//*** something that has no value attached to it */
//*** never going to assign something to undefined */

// Null
//**** non existent value */
//**** must be assigned */

// Boolean
//***some truthy or falsey value */
///**** use these in conditional statements */ 
///******** 'true' or 'false' */

// examples of falsey values
//  - 0
//  - null
//  - undefined
//  - ""
//  - false
//  - NaN

// everything else is truthy

// BigInt
//***this is reserved for anything the nnumber type can not handle..... like exponentially large numbers */

// Symbol: used in objects to dnote the property of the object....  the key of the object as unique identifiers
//example- 
// {
//   let first_name: "Ilya"
// }

// What is the difference between null and undefined?

// What is the relationship between data types and variables
//*** Variables is really just a container for information. It could be any number of data types */


// ------------ Conditional statements ------------

// if...else
//*** */
 let pokemon = "Voltorb"; 
 let likes = 45; //global scope

 if (likes === 1) {
   console.log(`${pokemon} has 1 like`);
 } else {
   console.log(`${pokemon} has ${likes} likes`);
}

///logical operators: 
//*** === : strict comparison: the value and the type */
//*** loose comparison : the value but not the type */
//


// if...else if...else

// let pokemon = "Voltorb";
// let likes = 1; 

 if (likes === 0) {
  console.log("render: Show some love!");
 } else if (likes === 1) {
   console.log('render: 1 like');
 } else {
  console.log(`render: ${likes} likes`)
 }

// ternary operators
//*** we can only check 1 condition */
//*** we can't nest ternary operators */
//*** we can nest them insode of an if/else if statement but why would you want to? */
// condition ? truthy response : falsey response

 let favorite = true

 let response = favorite ? "❤️" : "♡"

 console.log(response)

 

//INDEX.JS CODE
const dog = "timmy"
console.log('my dog is dog')
console.log(`or my dog is ${dog}!!`)
