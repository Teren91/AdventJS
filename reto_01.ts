import { stdin } from "process"; 

function prepareGifts(gifts: number[]): number[] {
    var numberSet = new Set<number>(gifts.sort((a, b) => a - b));
    
    var numbersOrdered: number[] = [];

    numberSet.forEach(element => {
        numbersOrdered.push(element);
    });
   
    return numbersOrdered;
  }

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []

const gifts4 = [100, 1000, 100, 500, 200, 500, 200]
const preparedGifts4 = prepareGifts(gifts4)
console.log(preparedGifts4) // []