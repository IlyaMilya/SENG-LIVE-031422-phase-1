// Understanding arrays

// What are arrays and how do they allow us to structure our data?

//ARRAY*************
/// a data structure allows us to store a collection of data
// this data can be of any type (array, str, numbers ect.)
// is an ordered collection /list

// Define a variable 'pokemon' set to an empty array.
//const pokemon = []

// Rewrite the 'pokemon' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'
const pokemon = ['pikachu', 'bulbasour', 'jigglypuff']
// Elements:

// Return 'bulbasour' from the pokemon array

// Modifying elements:

// Add a new element 'mew' to the end of pokemon. There are 2 ways this can be accomplished. Which method is best practice and why?

// Add a new element 'Gloom' to the beginning of pokemon.

// Remove the first element of 'pokemon'
//pokemonArray[.shift]

// Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'squirtle', 'turtwig'.

// For the following exercises, comment in the following array:

// const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// Iteration

//for (let i = 0; i < newPokemonArray.length; i++){
  //  console.log(pokemon[i])
//}

// looping methods:


    
//access each element by bracket notation
//arr[i]



// for loop
// Define a for loop that will log each pokemon character to the console.

// for..of
//we set a variable to the value of the element that we are currently cycling over
//for (const element of pokemon){
  //  console.log(character)
//}
// Rewrite the previous exercise using a for..of loop

// **********/ .forEach
//do something each element in the array
//it will recieve a callback function as an argument
//callback function is concerned with running some code regarding each element 
//have to call .forEach on an array
// Use .forEach() to iteratate through the pokemon array and return each character name in large caps
pokemon.foreach(character => {
    //we can do something with character
    console.log(character.toUpperCase())
// Searching an array: .find() vs .filter()

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// Modifying an elements in an array

// .map()
// a new array of the changed elements
// Using map, return a new array with all pokemon character names lowercased.


const add = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const compute = (func) => { //func is the parameter for ANY function that would be considered a callback function
 return func(6, 3);
}

console.log(compute(add))
console.log(compute(multiply))
console.log(compute(sub))
//this calls out the functions being invoked through the function compute
//*********** COMPUTE function invokes the functions add, multiply, and sub */
compute(add)

/// a data structure allows us to store a collection of data
// this data can be of any type (array, str, numbers ect.)
// is an ordered collection /list 
const result = pokemon.filter((character) => character.startsWith('s'))