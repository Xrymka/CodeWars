// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// https://www.codewars.com/kata/56bc28ad5c0baf248b0016a8

function removeChar(str) {
  return str.slice(1,-1)
}