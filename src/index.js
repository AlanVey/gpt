// Test script for Tesla as the target client

const generate = requre("./generate.js").generate

// On completion of the promise, log output
generate.next(console.log);