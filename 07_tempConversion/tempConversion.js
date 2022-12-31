const convertToCelsius = function(temp) {
  const conversion = (5/9) * (temp - 32);
  return conversion;
};

const convertToFahrenheit = function(temp) {
  const conversion = (temp * 2) + 30;
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
