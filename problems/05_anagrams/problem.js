const problem = (str1, str2) => {
  // Your code here
  let string1 = str1.split('').sort()
  let string2 = str2.split('').sort()

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false
    }
  }

  return true
};

module.exports = problem;