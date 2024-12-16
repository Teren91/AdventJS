function inBox(box: string[]): boolean {

    var encontrado: boolean = false;
    var elemento: string;
    var cadenaCaracteres: string;
    for(let i = 1; i< box.length -1 ; i++)
    {
        elemento = box[i];
        cadenaCaracteres = elemento.substring(1, elemento.length - 1);

        if(cadenaCaracteres.includes('*'))
        {
            encontrado = true;
        }
    }

    return encontrado;
}

 let result: boolean;
console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#   #",
    "#   #",
    "#   #",
    "#   #",
    "#  #*",
    "####"
  ])) // ➞ false
  

result = inBox([
    "###",
    "#*#",
    "###"
  ])
  console.log(result); // ➞ true
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#  #*",
    "#####"
  ])) // ➞ true
  
  
  console.log(inBox([
    "#######",
    "#     #",
    "#     #",
    "#     #",
    "#######"


   ])) // ➞ false
