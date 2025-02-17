const convertToCelsius = function(temperature) {
  if (!typeof(temperature === "number")) {
    return 'ERROR'
  }
  celsius = (temperature - 32)*5/9
  if (celsius % 1 == 0) {
    return Math.floor(celsius)}
  else {
    return Number(celsius.toFixed(1))}
};

const convertToFahrenheit = function(temperature) {
  if (!typeof(temperature === "number")) {
    return 'ERROR'
  }
  fahrenheit = (temperature*9/5) + 32
  if (fahrenheit % 1 == 0) {
    return Math.floor(fahrenheit)}
  else {
    return Number(fahrenheit.toFixed(1))}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
