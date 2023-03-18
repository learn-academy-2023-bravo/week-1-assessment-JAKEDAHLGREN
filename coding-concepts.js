// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:





// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: I beleive this while log 10 because we are asking for a .length. If we asked for the total index we would get 9 because counting starts at 0 for indexes.
// b) Verify and explain: I was correct. If an array has 10 variables, the .length is 10, but because arrays are zero indexed the first value position starts at 0 - 9 in this problem.



// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: I think that this will return the index of "o". If the greeting index[4] starts counting at zero, then the 5th variable in the string will be returned.
// b) Verify and explain: "o" was correct. Whenever our code is running an index value at a specific position, the first position in the variable is 0. ex.) H=0, e=1, l=2, l=3, and 0=4.





// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 //console.log(languages[index])

// a) Your answer: I think this will return "Ruby", because if index = 1 and we are asking our program to return the [index] from our languages array it should be the second array value.
// b) Verify and explain: I was correct that the program returned Ruby, but it didn't have the "".In our Array notes the Accessing elements example seems to have a similar setup, but the output retains the "". I assume this problem didn't return the "" because it is changing the data type of Ruby, but I could use some clarification on this please.




// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())


// a) Your answer: I think it will return SATURDAY, SUNDAY
// b) Verify and explain: I was incorrect, Java2blog helped me remember that .toUpperCase can only be used on a string, and because the weekendDays variable is an array, not a string, it threw an error code when running the console.log. I would need to remove the [] and make "saturday, sunday" into one string for .toUpperCase to work



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 //console.log(typeof dataTypes.length)

// a) Your answer: error - I think because the typeof is undefined. but dataTypes.length would be 4 if the code was correct
// b) Verify and explain: after uncommenting out the console.log, I realized typeof wasn't being used as a variable, it was a keyword to tell what data type the property of dataTypes.length would be returned as, and the andser was - Number. I found my mistake on freecodecamp.org and realized typeof was a keyword and not a variable or function being called.
