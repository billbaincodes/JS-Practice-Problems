
const problem = (time) => {
  // Your code here
  if (time === 0) { return 'now' }

  //Minutes
  if (time > 60 && time < 3600) {
    let seconds = time%60
    let minutes = Math.floor(time/60)
    return `${minutes} minute and ${seconds} ${seconds > 1 ? 'seconds' : 'second'}`
  } else if (time > 3600) {
    let hours = Math.floor(time/3600)
    let hRemainder = time % 3600
    let minutes = Math.floor(hRemainder/60)
    let seconds = hRemainder % 60

    hourPrint = hours ? hours > 1 ? `${hours} hours` : `${hours} hour` : null
    minutePrint = minutes ? minutes > 1 ? `${minutes} minutes` : `${hours} minute` : null
    secondPrint = seconds ? seconds > 1 ? `${seconds} seconds` : `${seconds} second` : null

    let print = [hourPrint, minutePrint, secondPrint]
    print = print.filter(val => val)

    print = print.map((unit, idx) => {
      if (idx === print.length - 1){
        return unit += `and ${unit}`
      } else {
        return unit += `${unit},`
      }
    })

    return print.join(' ')
  }

  return `${time} ${time > 1 ? 'seconds' : 'second'}`
}

module.exports = problem;

// 365 days / 24 hours / 60 minutes / 60 seconds
// 31536000   86400      3600         60