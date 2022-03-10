////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

const multiply = (num1, num2, cb) => cb(num1 * num2)


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

//  multiply(4, 3, answer => {
//    console.log('The answer is ' + answer) //should console.log 12
//  })

// I think this is an outer function with (inner function callback)

////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

const first = (array, callback) => callback(array[0])
// read slowly to see what is being asked


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER


// first(names, firstName => {
//     console.log('The first name in name is' + firstName)
// })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

const last = (array, callback) => callback(array[array.length - 1])


// read slowly what is being asked talk your way through each item

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// last(names, lastName => {
//   console.log('The last name in names is ' + lastName)
// })



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

const contains = (array, names, callback) => {
    if (array.includes(names) === true) {
      callback(true)
    } else {
      callback(false)
    }
}
// read slowly what is asked. Is asking for an if statement returning a boolean from week three. 

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// contains(names, '// conColt', result => {
//    if(result === true){
//      console.log('Colt is in the array')
//    } else {
//      console.log('Colt is not in the array')
//    }
//  })



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// const uniq = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let x = i + 1; x < array.length; x++) {
//             if (array[i] === array[x]) {
//             array.splice(x, 1)
//              x--
//            }
//         }
//     }
//     callback(array)
// }
// /* Holly Crap Batman! Wow read super slow a lot of things going on in here. First we have a function. Second it returns a combined array and for loop from week 2 
// executing a block of code on each. Also is using array.length from week three/ assessment.  Third it is nesting another for loop in the combined loop invoking the callback
// with the modified array as an argument. Oh and .splice that could be from functions week 3. That's bitting off more than you can chew.
// */

// /*
//   Invoke the uniq function, passing in the names array from above and a callback function.
//   The callback function should take in one parameter called uniqArr.
//   The callback should print a string that says:
//   'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
// */

// uniq(names, uniqArr => console.log (`The new names array with all the duplicate items removed is ${uniqArr}`))
// // wow brain hurt. Callback printing a string with a ${} template literal fist used in week 1 when learning strings and concatenation. Combining every thing we've learned so far.
// // terminal doesn't like callback(array) typed in before my last comment. callback is not defined. so yeah it doesn't work but looks fancy.


////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

const each = (array, callback) => array.forEach((element, i) => callback(element, i))


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

each(names, (item, index) => `The item at index ${index}`)


////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE