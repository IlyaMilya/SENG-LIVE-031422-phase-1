//What are JS functions and why do we use them?
//






//function declaration syntax

//****function nameOfFunction()
    // body of the function will be written 
    // the steps to complete a task

    function loadPage(){
        console.log("page has loaded, run the program")
        return "this is a return value";
    }
    //using an identifier
    

    //Why is nothing happening?
    //******* We need to invoke the function (calling the function)

    //Why is the function returning undefined???
    //*******  there is no return value 

    //a return value is an end value with the goal of the functionl
    //anything after a return value will not be executed
    ////******* "return value says go home your job is done" */

const returnVal = loadPage()
console.log(returnVal)

//Scopes*****************
//anything defined in the outer scope is reachable in the file stored, 

//BLOCK scopes
//things defined within the range of a condition / loops , INSIDE of the LOCAL scope

//let x = 0 //global

function loadRage(){
    x = 10 //local variable (local)
    console.log("pages has loaded, run the program")
    return "this is a return value"
}

loadRage()

console.log(x) 

// whatever you define inside of the function, will not be identified on the global scale, MEANING OUTSIDE OF THE FUNCTION.

//Anything from the global scope can move into a local scope, but a local scope cannot enter a global scope.*** We cannot move up the chain

////****** any variable definied in our block scope can access from our local scope  */


//*************************PARAMETERS VS. ARGUMENTS */

//parameters are the variables defined upon function defintion/ when we create the function
// arguments are the values/data passed into the function where we are calling them

function increaseNum(num){
    //somewhere in here we're going to use num, using the VARIABLE 'num' (inside the paranthesis)
    return num + num
}

increaseNum(8)

function renderPokemon(character){
console.log(`Rendering ${character} `)
}
renderPokemon("Pikachu")

//INVOKE VS. REFERENCE

//invoking== we use paranthesis after the function name, calling for the function to execute

console.log(renderPokemon)

//we can use referencing to pass the function somewhere to be used 
// in order  to reference a function, we dont include the ()


//*******FIRST CLASS FUNCTIONS */

//functions can be treated as a value :
    //1.we can assign a function to a variable
    //2. we can pass a function as an argument to another function 
    // (a callback function)
    // 3. a function can be the return value of another function 

//function expression to declare functions
//nameless functions are called anonymous functions
//cannot call the function before it has been ititialized
    
const renderPoke = function (){
        console.log('renderPoke')
    }

    renderPoke() //invoked 

//********ARROW FUNCTION SYNTAX***********

// const function = (parameter) => console.log(`Whatever you want, ${ }`)
const renderPokey = (character) =>  console.log(`Rendering ${character}`)
//***** if our function only has 1 return/line of code we can make it a one liner via arrow function
// you dont need to use a return value in a one liner, will cause an error

//Arrow function syntax is highly readable 

//Callback functions : passing a function as an argument to another function *****************************************
//we want to pass ONLY a reference of the function 

//        setTimeout(function(){
 //   console.log("this is the setTimeOut()")
//      }, 3000)

const fun = () => console.log("this is the setTimeout()")

setTimeout(fun, 5000);

//5000, (2nd parameter) represents the amount of time it takes for the return value to show up on the console 

