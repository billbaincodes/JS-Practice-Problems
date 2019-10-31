
const problem = (pw) => {
  // Your code here
  const length = /.{6,}/
  const lower = /[a-z]{1}/
  const upper = /[A-Z]{1}/
  const number = /\d{1}/

  return /(?=.{6,})(?=[a-z]{1})/.test(pw)
}

module.exports = problem;
