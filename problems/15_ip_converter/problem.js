
const problemA = (ip) => {
  // Your code here
  let bigBin = ip.split('.').map(num => Number(num).toString(2)).map(bin => {
    for (let i = 0; bin.length < 8; i++){ bin = `0${bin}` }
    return bin
  }).join('')
  return parseInt(bigBin, 2)
}

const problemB = (num) => {
  let fourBins = []
  let bigBin = num.toString(2)
  while(bigBin.length < 32){ bigBin = `0${bigBin}` }
  for (let i = 0; i < 32; i += 8){ fourBins.push(bigBin.slice(i, i+8)) }
  return fourBins.map(bin => { return parseInt(bin, 2) }).join('.')
}

module.exports = {
  problemA,
  problemB
};
