
const problem = (ip) => {
  // Your code here

  let prettyIp = ip.split('.').map(num => Number(num).toString(2))
  return prettyIp

}

module.exports = problem;
