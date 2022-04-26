// code your solution here

function saturdayFun(activity) {
    if (activity === undefined) {
        activity = 'roller-skate';
    }
   let fun = `This Saturday, I want to ${activity}!`
    return fun;
}
function mondayWork(activity) {
    if (activity === undefined) {
        activity = 'go to the office';
    }
    let monday = `This Monday, I will ${activity}.`
    return monday;
}
function wrapAdjective(special = '*',) {
    const innerFunction = function (adjective = 'a hard worker') {
      return `You are ${special}${adjective}${special}!`;
    };
    return innerFunction;
  }