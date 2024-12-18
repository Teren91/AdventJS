/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    if (s.length === 0) {
        return '';
    }
    s.slice(0, s.length - 1).split('').forEach(function (element, index) {
        if (element === s[index + 1]) {
            s = s.slice(0, index) + s.slice(index + 2);
            s = removeSnow(s);
        }
    });
    return s;
}
var snow = '';
snow = removeSnow('zxxzoz'); // -> "oz"
console.log(snow);
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"
snow = removeSnow('abcdd'); // -> "abc"
console.log(snow);
// 1. Eliminamos "dd", quedando "abc"
snow = removeSnow('zzz'); // -> "z"
console.log(snow);
// 1. Eliminamos "zz", quedando "z"
snow = removeSnow('a'); // -> "a"
console.log(snow);
// No hay montículos repetidos
