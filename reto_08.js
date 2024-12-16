function drawRace(indices, length) {
    var race = '';
    var i = 0;
    //indices.forEach(element => {
    for (var i_1 = 0; i_1 < indices.length; i_1++) {
        var element = indices[i_1];
        race += ' '.repeat(indices.length - 1 - i_1);
        if (element == 0) {
            race += '~'.repeat(length);
        }
        else if (element > 0) {
            race += '~'.repeat(element)
                + 'r' + '~'.repeat(length - element - 1);
        }
        else {
            race += '~'.repeat(length - Math.abs(element))
                + 'r' + '~'.repeat(Math.abs(element) - 1);
        }
        race += ' /' + (i_1 + 1);
        // i++;
        if (i_1 != indices.length) {
            race += '\n';
        }
    }
    //});
    return race;
}
//   "  ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3"
var result;
result = drawRace([0, 5, -3], 10);
console.log(result);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
result = drawRace([2, -1, 0, 5], 8);
console.log(result);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/
result = drawRace([3, 7, -2], 12);
console.log(result);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/ 
