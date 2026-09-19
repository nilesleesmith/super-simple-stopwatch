//Create a stopwatch object that has four properties and three methods
let myStopWatch = {};

myStopWatch.time = 12;
myStopWatch.color = 'black';
myStopWatch.shape = 'round';
myStopWatch.owner = 'me';

console.log(myStopWatch.time);
console.log(myStopWatch.color);
console.log(myStopWatch.shape);
console.log(myStopWatch.owner);

myStopWatch.start = function (myTime) {
    return myStopWatch.time = myTime += 1;
}

myStopWatch.stop = function (myTime) {
    return myStopWatch.time = myTime -= 1;
}

myStopWatch.reset = function (myTime) {
    return myStopWatch.time = 0;
}

console.log(myStopWatch.start(1));
console.log(myStopWatch.stop(10));
console.log(myStopWatch.reset(100));