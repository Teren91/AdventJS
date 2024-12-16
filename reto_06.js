function inBox(box) {
    var encontrado = false;
    var elemento;
    var cadenaCaracteres;
    for (var i = 1; i < box.length - 1; i++) {
        elemento = box[i];
        cadenaCaracteres = elemento.substring(1, elemento.length - 1);
        if (cadenaCaracteres.includes('*')) {
            encontrado = true;
        }
    }
    return encontrado;
}
var result;
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
])); // ➞ false
result = inBox([
    "###",
    "#*#",
    "###"
]);
console.log(result); // ➞ true
console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#  #*",
    "#####"
])); // ➞ true
console.log(inBox([
    "#######",
    "#     #",
    "#     #",
    "#     #",
    "#######"
])); // ➞ false
