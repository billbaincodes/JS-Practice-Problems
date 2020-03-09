const problem = time => {
  // Your code here
  if (time === 0) {
    return "now";
  }

  let hours = Math.floor(time / 3600);
  let hRemainder = time % 3600;
  let minutes = Math.floor(hRemainder / 60);
  let seconds = hRemainder % 60;

  hourPrint = hours ? (hours > 1 ? `${hours} hours` : `${hours} hour`) : null;
  minutePrint = minutes
    ? minutes > 1
      ? `${minutes} minutes`
      : `${minutes} minute`
    : null;
  secondPrint = seconds
    ? seconds > 1
      ? `${seconds} seconds`
      : `${seconds} second`
    : null;

  let print = [hourPrint, minutePrint, secondPrint];

  print = print.filter(val => val);

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
