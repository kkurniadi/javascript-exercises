const reverseString = function(str) {
  let reverseChars = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseChars.push(str.charAt(i));
  }

  return reverseChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
