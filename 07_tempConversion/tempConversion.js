const convertToCelsius = function(farhenheit) {
  return Math.round(10*((farhenheit-32)*5/9)) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(10*(celsius * 9 / 5 + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
