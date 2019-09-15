const problem = (int) => {
  // Your code here
  const digits = int.toString().split('');
  let result = true;
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i-1]) {
      result = false;
    }
  }
  return result;
};

module.exports = problem;
