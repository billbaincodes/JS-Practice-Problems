
const problem = (time) => {
  // Your code here
  if (time === 0) { return 'now' }

  //Minutes
  if (time > 60) {
    let seconds = time%60
    let minutes = Math.floor(time/60)
    return `${minutes} minute and ${seconds} ${seconds > 1 ? 'seconds' : 'second'}`
  }

  return `${time} ${time > 1 ? 'seconds' : 'second'}`
}

module.exports = problem;

// 365 days / 24 hours / 60 minutes / 60 seconds
// 31536000   86400      3600         60