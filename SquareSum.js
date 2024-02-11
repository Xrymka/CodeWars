// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^1+2^2+2^2 = 9.
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
  let sum = 0;
  numbers.forEach(num => sum += num**2);
  return sum;
}

// one more
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}