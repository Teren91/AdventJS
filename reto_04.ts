function createXmasTree(height: number, ornament: string): string {
    
    var tree: string = '';
    var totalWidth: number = (height*2)-1;
    var width: number = totalWidth;
    var numberOfOrnaments: number = 1;
    var trunkHeight: number = 2;
    var trunk: string = '';
    var side: number;
    for(let i = 0; i< height; i++) 
    {
        side = Math.floor(width/2);

        // for(let j = 0; j< side; j++)  
        // {
        //     tree+='_';
        // }

        tree+= '_'.repeat(side);

        if(i === 0)
        {
            tree+=ornament.repeat(1); 

        }else{
            tree+=ornament.repeat(numberOfOrnaments);
        }

        tree+= '_'.repeat(side);

        numberOfOrnaments = numberOfOrnaments + 2;
        tree+='\n';
        width = width-2;
    }

    side = Math.floor(totalWidth/2);
    for(let i = 0; i < trunkHeight; i++) 
    {    
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
        trunk+='#';
        trunk += '_'.repeat(side);
        
        if(i == 0)
        {
            trunk+='\n';
        }
    }

    tree+=trunk;

    return tree;
  }

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____       -> 9 Espacios  4 en cada lado
___***___       -> 9 Espacios  3 en cada lado
__*****__       -> 9 Espacios  2 en cada lado
_*******_       -> 9 Espacios  1 en cada lado
*********       -> 9 Espacios  0 en cada lado
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__           -> 5 Espacios
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
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
