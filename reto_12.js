function calculatePrice(ornaments) {
    var prices = new Map([
        ["*", 1],
        ["o", 5],
        ["^", 10],
        ["#", 50],
        ["@", 100]
    ]);
    var result = 0;
    var currentOrnament = "";
    var nextOrnament = "";
    //for (let i = ornaments.length-1; i >= 0; i--) {
    for (var i = 0; i < ornaments.length; i++) {
        currentOrnament = ornaments[i];
        nextOrnament = ornaments[i + 1];
        //   console.log(currentOrnament);
        //   console.log(nextOrnament);
        //   console.log(prices.get(currentOrnament));
        //   console.log(prices.get(nextOrnament));
        if (!prices.has(currentOrnament)) {
            console.log("undefined");
            return undefined;
        }
        var currentPrice = prices.get(currentOrnament);
        if (nextOrnament && prices.get(nextOrnament) > prices.get(currentOrnament)) {
            result -= currentPrice;
        }
        else {
            result += currentPrice;
        }
    }
    console.log(result);
    return result;
}
/**
* -> 1 - copo
o -> 5 - bola
^ -> 10 - arbolito
# -> 50 - guirnalda
@ -> 100 - estrella polar
*/
calculatePrice('***'); // 3   (1 + 1 + 1)
calculatePrice('*o'); // 4   (5 - 1)
calculatePrice('o*'); // 6   (5 + 1)
calculatePrice('*o*'); // 5  (-1 + 5 + 1) 
calculatePrice('**o*'); // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***'); // 8   (5 + 3)
calculatePrice('*o@'); // 94  (-5 - 1 + 100)
calculatePrice('*#'); // 49  (-1 + 50)
calculatePrice('@@@'); // 300 (100 + 100 + 100)
calculatePrice('#@'); // 50  (-50 + 100)
calculatePrice('#@Z'); // undefined (Z es desconocido)
// calculatePrice('#@*o@#@') // 50 - 100 + 1 - 5 - 100 + 50 - 100
