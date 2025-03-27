const add = require("./sum");

const result = add(5, 10);
console.log(result);

// ------------------------------------

const math = require("./math");

console.log(math.add(15, 5)); //20
console.log(math.subtract(15, 5)); //10

// ------------------------------------
const cal = require("./calculator");

console.log(cal(13, 6));

// ------------------------------------

const { increment, getCounter } = require("./counter");

increment();
console.log(getCounter());
