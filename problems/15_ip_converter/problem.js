
const problemA = (ip) => {
  // Your code here
  let bigBin = ip.split('.').map(num => Number(num).toString(2)).map(bin => {
    for (let i = 0; bin.length < 8; i++){ bin = `0${bin}` }
    return bin
  }).join('')
  return parseInt(bigBin, 2)
}

const problemB = (num) => {
  return 'answer'
}

module.exports = {
  problemA,
  problemB
};
