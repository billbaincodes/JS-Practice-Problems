const problem = time => {
  // Your code here
  if (time === 0) { return "now"; }
  let clock = {};
  let print = [];
  let yRemainder, dRemainder, hRemainder;

  clock.year = Math.floor(time / 31536000)
  yRemainder = time % 31536000
  clock.day = Math.floor(yRemainder / 86400)
  dRemainder = time % 86400
  clock.hour = Math.floor(dRemainder / 3600);
  hRemainder = time % 3600;
  clock.minute = Math.floor(hRemainder / 60);
  clock.second = hRemainder % 60;

  for (key in clock) {
    if (clock[key] > 1){
      print.push(`${clock[key]} ${key}s`)
    } else if (clock[key] === 1) {
      print.push(`${clock[key]} ${key}`)
    }
  }

  return print.map((unit, idx) => {
    if (print.length === 1) { 
      return unit; 
    } else if (idx === print.length - 2) {
      return unit;
    } else if (idx === print.length - 1) {
      return `and ${unit}`;
    } else {
      return `${unit},`;
    }
  }).join(" ");
};

module.exports = problem;

// 365 days / 24 hours / 60 minutes / 60 seconds
// 31536000   86400      3600         60
