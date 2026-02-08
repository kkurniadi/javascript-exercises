const sumAll = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 'ERROR';
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

  let allInts = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    allInts.push(i);
  }
  return allInts.reduce((total, current) => total + current);
};

// Do not edit below this line
module.exports = sumAll;
