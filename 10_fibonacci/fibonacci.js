const fibonacci = function(nth) {
   if (nth < 0) {
    return "OOPS";
   } else if (nth == 0) {
    return 0
   } else if ((nth == 1)) {
    return 1
   } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
   }
};

// Do not edit below this line
module.exports = fibonacci;
