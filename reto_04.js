function createXmasTree(height, ornament) {
    var tree = '';
    var totalWidth = (height * 2) - 1;
    var width = totalWidth;
    var numberOfOrnaments = 1;
    var trunkHeight = 2;
    var trunk = '';
    var side;
    for (var i = 0; i < height; i++) {
        side = Math.floor(width / 2);
        // for(let j = 0; j< side; j++)  
        // {
        //     tree+='_';
        // }
        tree += '_'.repeat(side);
        if (i === 0) {
            tree += ornament.repeat(1);
        }
        else {
            tree += ornament.repeat(numberOfOrnaments);
        }
        tree += '_'.repeat(side);
        numberOfOrnaments = numberOfOrnaments + 2;
        tree += '\n';
        width = width - 2;
    }
    side = Math.floor(totalWidth / 2);
    for (var i = 0; i < trunkHeight; i++) {
        // for(let j = 0; j < totalWidth; j++) 
        // {
        //     if(j == Math.floor(totalWidth/2))
        //     {
        //         trunk+='#';
        //     }
        //     else{
        //         trunk+='_';
        //     }
        // }
        trunk += '_'.repeat(side);
        trunk += '#';
        trunk += '_'.repeat(side);
        if (i == 0) {
            trunk += '\n';
        }
    }
    tree += trunk;
    return tree;
}
var tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____       -> 9 Espacios  4 en cada lado
___***___       -> 9 Espacios  3 en cada lado
__*****__       -> 9 Espacios  2 en cada lado
_*******_       -> 9 Espacios  1 en cada lado
*********       -> 9 Espacios  0 en cada lado
____#____
____#____
*/
var tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
__+__           -> 5 Espacios
_+++_
+++++
__#__
__#__
*/
var tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
_____@_____       -> 11 Espacios
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
var tree5 = createXmasTree(1, 'K');
console.log(tree5);
var tree6 = createXmasTree(1, 'E');
console.log(tree6);
var tree7 = createXmasTree(1, 'N');
console.log(tree7);
var tree8 = createXmasTree(1, 'D');
console.log(tree8);
var tree9 = createXmasTree(1, 'R');
console.log(tree9);
var tree10 = createXmasTree(1, 'A');
console.log(tree10);
