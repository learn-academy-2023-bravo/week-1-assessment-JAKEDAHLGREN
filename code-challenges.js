// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: a number
// output: a string that indicates one of three outcomes - under boiling temp., above boiling temp., or at boiling temp.

// process
// create a function named "boilingPoint" that takes in a number called temp
// Enter the three given variables: temperature1, temperature2, temperature3
// if temp is less than 212 then return "Below boiling point"
// if temperature is greater than 212 then return "Above boiling point"
// if temperature is equal to 212 then return "At boiling point"
// any other input return "The stove is broken"


const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// const boilingPoint = (temp) => {
//     if(temp < 212) {
//         return "Below boiling point"
//     }
//     else if(temp > 212){
//         return "Above boiling point"
//     }
//     else if(temp = 212){
//         return "At boiling point"
//     }
//     else{
//         return "Stove is Broken"
//     }
// }
// console.log(boilingPoint("42")) // return: Below boiling point
// console.log(boilingPoint("350")) // return: Above boiling point
// console.log(boilingPoint("212")) // return: At boiling point

// code worked, after I replaced the const variables in my "if else" statements with the parameter temp



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// input: two arrays of variable data
// output: length of arrays when combined as a number

// process:
// combine both variables.length in a console.log to return the length of both arrays together

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// Expected output: 9

// console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// Returned: 9, the console.log added all indexed items from both arrays together



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// input: one variable
// output: reversed variable

// process:
// I first need to seperate my variable currentCohort into individual index items with .split()
// Then I need to reverse the order of the individual index items with .reverse()
// Lastly I need to reconnect the index items back into the origional variable format while still reversed with .join()


const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

// console.log(currentCohort.split("").reverse().join(""))

// returned: 3202 ovarB , I can't seem to get the "" back even when I add them in the .reverse("")




// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: myNumber array, the givenValue1 42, and givenValue2 10
// output: the last index of each given variable

// process:
// create a console.log that references the myNumbers array 
// First attempt: use .length to return the index number of the values given 
// Second attempt: call upon the last index of both given variables within the array by using the .lastIndexOf method
// return the last index value of each given variable 

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// console.log(myNumbers.length - 2)
// console.log(myNumbers.length - 1)

// console.log(myNumbers.lastIndexOf(givenValue1))
// console.log(myNumbers.lastIndexOf(givenValue2))


// The first code works, but I feel like I am not understanding how to use the variables "givenValue1, givenValue2" to run my code without subtracting from the total index of myNumbers. 
// I went back and researched other options and found the .lastIndexOf method (from Javascripttutorials.net), and I was able to use all the given Data in my code.




//  --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: all numbers in the given arrays
// output: rearranged arrays with all index items sorted from largest to smallest

// process: 
// sort the given arrays in numerical order
// then make them largest to smallest


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// console.log(sanDiegoSummerTemperatures.sort().reverse())
// console.log(sanDiegoWinterTemperatures.sort().reverse())

// code worked, is there a way to make the .sort command go in decending order without .reverse?