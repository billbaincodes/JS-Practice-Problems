
const problem = (pw) => {
  // Your code here
  const length = /.{6,}/
  const lower = /[a-z]{1}/
  const upper = /[A-Z]{1}/
  const number = /\d{1}/
  const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$")

  return regex.test(pw)
}

module.exports = problem;
