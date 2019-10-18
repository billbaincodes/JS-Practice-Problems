
const problemA = (ip) => {
  // Your code here
  let bigBin = ip.split('.').map(num => Number(num).toString(2)).map(bin => {
    for (let i = 0; bin.length < 8; i++){ bin = `0${bin}` }
    return bin
  }).join('')
  return parseInt(bigBin, 2)
}

const problemB = (num) => {
  let bigBin = num.toString(2)
  let fourBins = []
  let start = 0
  let end = 8

  for (let i = 0; i < 4; i++){
    let octet = bigBin.slice(start, end);
    fourBins.push(octet)
    start += 8
    end += 8
  }

  console.log(fourBins)
  return fourBins 
}

module.exports = {
  problemA,
  problemB
};
