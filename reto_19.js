var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var reto19;
(function (reto19) {
    function generateGiftSets(gifts) {
        var result = [];
        function backtrack(start, currentSet) {
            if (currentSet.length > 0) {
                result.push(__spreadArray([], currentSet, true));
            }
            for (var i = start; i < gifts.length; i++) {
                currentSet.push(gifts[i]);
                backtrack(i + 1, currentSet);
                currentSet.pop();
            }
        }
        backtrack(0, []);
        return result.sort(function (a, b) {
            if (a.length !== b.length) {
                return a.length - b.length;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return gifts.indexOf(a[i]) - gifts.indexOf(b[i]);
                }
            }
            return 0;
        });
    }
    console.log(generateGiftSets(['car', 'doll', 'puzzle']));
    // [
    //   ['car'],
    //   ['doll'],
    //   ['puzzle'],
    //   ['car', 'doll'],
    //   ['car', 'puzzle'],
    //   ['doll', 'puzzle'],
    //   ['car', 'doll', 'puzzle']
    // ]
    console.log(generateGiftSets(['ball']));
    // [
    //   ['ball']
    // ]
    console.log(generateGiftSets(['game', 'pc']));
    // [
    //   ['game'],
    //   ['pc'],
    //   ['game', 'pc']
    // ]
})(reto19 || (reto19 = {}));
