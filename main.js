const {reverse} = require("./reverse");

let argument = process.argv[2];  // because argv[0] = "node" and argv[1] = script name
console.log(reverse(argument));