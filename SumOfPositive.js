// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.forEach(num => {
    if (num > 0) {
      sum += num;
    } 
  });
  return sum;
}

// different solution which I liked
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// one more
function positiveSum (arr) {
  return arr.filter(x => x > 0).reduce((a, c) => a + c, 0);
}