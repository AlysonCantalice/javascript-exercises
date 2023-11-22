const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	let sumArray = 0;
  array.forEach(element => {
    sumArray += element;
  });
  return sumArray;
};

const multiply = function(array) {
  let arrayMultiply = 1;
  array.forEach(element => {
    arrayMultiply *= element;
  });
  return arrayMultiply;
};

const power = function(n1, n2) {
  return Math.pow(n1, n2);
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i=n; i>=1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
