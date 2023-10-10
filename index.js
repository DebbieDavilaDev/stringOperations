/*


Example Variables

*/

let firstName ='Todd'
let age = 25
let str = ' hello JavaScript students!'
let str2 = '      Hello!      '

console.log(`Hello ${firstName}. You are ${age} today!`)

let str = `Hello JavaScript students!`
console.log(str.length()) //26
//.length is a built in property for strings (and arrays)

//converts string to UPPERCASE
let str4
 = `Hello JavaScript students`
console.log(str4.toUpperCase())

// strips whitespace from ends
let str3 ='Hello!' 
console.log(str3.trim())   

//returns part of string
let str5 = `Hello Level Up students!`
console.log(str5.substring(6, 14)) // Level Up

//Does string begin with substring returns true or false
let str6 = `Hello Level Up students!`
let searchTerm = `Level`

console.log(str6.startsWith(searchTerm)) //false

//Does string include substring, returns true or false

let str7 = `Hello Level Up students!`
let searchTerm2 = 'Level'

console.log(str7.startsWith(searchTerm2)) //false


