import { matrix, multiply } from "https://cdn.skypack.dev/mathjs";

// Source: https://www.datagenetics.com/blog/january42012/index.html
var transitionMatrix = [
    [120 / 1296, 900 / 1296, 250 / 1296, 25 / 1296, 1 / 1296],
    [0, 120 / 216, 80 / 216, 15 / 216, 1 / 216],
    [0, 0, 25 / 36, 10 / 36, 1 / 36],
    [0, 0, 0, 5 / 6, 1 / 6],
    [0, 0, 0, 0, 1]
];

var mathMathrix = matrix(transitionMatrix);

var roll1 = transitionMatrix[0];

var roll2 = multiply(roll1, mathMathrix);

console.log(roll2)

var roll3 = multiply(roll2, mathMathrix);

console.log(roll3)
