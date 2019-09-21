
problem = (str) => {
  //Your code here
  let midpoint = Math.ceil(str.length / 2)  
  let firsthalf = str.slice(0, midpoint)
  let lasthalf = str.slice(
    str.length % 2 === 0 ?
    midpoint :
    midpoint - 1,
    str.length)

  for (let i = 0; i < midpoint; i++) {
    if (firsthalf == lasthalf) {
      return firsthalf.length
    }
    firsthalf = firsthalf.split('')
    firsthalf.pop()
    firsthalf = firsthalf.join('')

    lasthalf = lasthalf.split('')
    lasthalf.shift()
    lasthalf = lasthalf.join('')
  }
  
  return 0
};

module.exports = problem;