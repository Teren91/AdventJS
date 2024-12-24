var Reto23;
(function (Reto23) {
    function findMissingNumbers(nums) {
        var numsFound = nums.reduce(function (acc, num) {
            acc.add(num);
            return acc;
        }, new Set());
        return Array.from({ length: Math.max.apply(Math, nums) }, function (_, i) { return i + 1; }).filter(function (num) { return !nums.includes(num); });
    }
    console.log(findMissingNumbers([1, 2, 4, 6]));
    // [3, 5]
    console.log(findMissingNumbers([4, 8, 7, 2]));
    // [1, 3, 5, 6]
    console.log(findMissingNumbers([3, 2, 1, 1]));
    // []
    console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
    // [4]
})(Reto23 || (Reto23 = {}));
