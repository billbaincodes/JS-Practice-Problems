
const problem = (str) => {
  // Your code here
  let zeroes = str.match(/\d+$/)
  let match = str.match(/[0-9]+$/)

  if (!match) { return `${str}1` }

  let newVal = Number(match[0]) + 1
  let letters = str.substring(0, str.length - match[0].length)

  return `${letters}${newVal}`
}

module.exports = problem;



// if (!zeroes) {
//   return `${str}1`
// } else {
//   let newVal = Number(match[0]) + 1
//   if (String(newVal).length > match[0].length) {
//     let letters = str.substring(0, str.length - zeroes[0].length)
//     return letters + newVal
//   } else {
//     return str.replace(match[0], newVal)
//   }
// }