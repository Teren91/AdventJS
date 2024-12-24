namespace Reto23 {

    function findMissingNumbers(nums: number[]): number[] {
        return Array.from({length: Math.max(...nums)}, (_, i) => i + 1).filter(num => !nums.includes(num));
    }

    console.log(findMissingNumbers([1, 2, 4, 6]));
    // [3, 5]

    console.log(findMissingNumbers([4, 8, 7, 2]));
    // [1, 3, 5, 6]

    console.log(findMissingNumbers([3, 2, 1, 1]));
    // []

    console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
    // [4]
}