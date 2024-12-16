"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prepareGifts(gifts) {
    var numberSet = new Set(gifts.sort(function (a, b) { return a - b; }));
    var numbersOrdered = [];
    numberSet.forEach(function (element) {
        numbersOrdered.push(element);
    });
    return numbersOrdered;
}
var gifts1 = [3, 1, 2, 3, 4, 2, 5];
var preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]
var gifts2 = [6, 5, 5, 5, 5];
var preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]
var gifts3 = [];
var preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
var gifts4 = [100, 1000, 100, 500, 200, 500, 200];
var preparedGifts4 = prepareGifts(gifts4);
console.log(preparedGifts4); // []
