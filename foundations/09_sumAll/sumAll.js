const sumAll = function(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 'ERROR';
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

  let allInts = [a, b].sort((x, y) => x - y);
  const min = Math.min(allInts);
  const max = Math.max(allInts);
  for (let i = min + 1; i < max; i++) {
    allInts.push(i);
  }
  return allInts.reduce((total, current) => total + current);
};

// Do not edit below this line
module.exports = sumAll;
