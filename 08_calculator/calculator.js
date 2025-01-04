const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(toSum) {
	sumTotal = 0;
  for (let i=0; i < toSum.length; i++) {
    sumTotal += toSum[i];
  }
  return sumTotal;
};

const multiply = function(args) {
  result = 1;
  for (let i=0; i < args.length; i++) {
    result = result * args[i];
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	fact = 1;
  for (let i=1; i <= a; i++) {
    fact = fact * i;
  }
  return fact;
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
