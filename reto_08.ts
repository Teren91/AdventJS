

function drawRace(indices: number[], length: number): string {
    
    var race: string = '';
    var i: number = 0;
    indices.forEach(element => {
        race += ' '.repeat(indices.length - 1 - i);

        if(element == 0)
        {
            race += '~'.repeat(length) 
        }
        else if(element > 0)
        {
            race += '~'.repeat(element) 
                + 'r' + '~'.repeat(length - element - 1);
        }else{
            race += '~'.repeat(length - Math.abs(element)) 
                + 'r' + '~'.repeat(Math.abs(element) - 1);
        }
        race += ' /' + (i +1);
        i++;
        if(i != indices.length)
        {
            race += '\n';
        }
        
    });
    return race;
  }
//   "  ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3"

  
var result: string;


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

result =drawRace([3, 7, -2], 12);
console.log(result);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/