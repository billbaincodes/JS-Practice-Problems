const problem = (int) => {
  // Your code here
  const digits = int.toString().split('');
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i-1]) { return false; }
  }
  return true;
};

module.exports = problem;
