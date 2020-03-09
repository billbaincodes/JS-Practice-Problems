const problem = time => {
  // Your code here
  if (time === 0) { return "now"; }
  let clock = {};
  let print = [];

  clock.hour = Math.floor(time / 3600);
  let hRemainder = time % 3600;
  clock.minute = Math.floor(hRemainder / 60);
  clock.second = hRemainder % 60;

  for (key in clock) {
    if (clock[key] > 1){
      print.push(`${clock[key]} ${key}s`)
    } else if (clock[key] === 1) {
      print.push(`${clock[key]} ${key}`)
    }
  }

  if (print.length > 1) {
    print = print.map((unit, idx) => {
      if (idx === print.length - 2) {
        return unit;
      } else if (idx === print.length - 1) {
        return `and ${unit}`;
      } else {
        return `${unit},`;
      }
    });
    return print.join(" ");
  } else {
    return print[0];
  }
};

module.exports = problem;

// 365 days / 24 hours / 60 minutes / 60 seconds
// 31536000   86400      3600         60
