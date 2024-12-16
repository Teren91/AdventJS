function organizeShoes(shoes) {
    var currentPair = [];
    var currentSize = 0;
    var currentTpye = '';
    while (shoes.includes(shoes.find(function (size) { return size.type == 'I'; }), 0)) {
        shoes.forEach(function (shoe) {
            currentSize = shoe.size;
            currentTpye = shoe.type;
            if (currentTpye === 'I') {
                if (shoes.find(function (size) { return size.size == currentSize && size.type == 'I'; })) {
                    if (shoes.find(function (size) { return size.size == currentSize && size.type == 'R'; })) {
                        currentPair.push(currentSize);
                        shoes.splice(shoes.findIndex(function (size) { return size.size === currentSize && size.type === 'I'; }), 1);
                        shoes.splice(shoes.findIndex(function (size) { return size.size === currentSize && size.type === 'R'; }), 1);
                    }
                    else {
                        shoes.splice(shoes.findIndex(function (size) { return size.size === currentSize && size.type === 'I'; }), 1);
                    }
                }
            }
        });
    }
    currentPair.sort();
    return currentPair;
}
var pairShoes = [];
var shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];
pairShoes = organizeShoes(shoes);
console.log(pairShoes);
// [38, 42]
var shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];
// [38, 38]
pairShoes = organizeShoes(shoes2);
console.log(pairShoes);
var shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
];
pairShoes = organizeShoes(shoes3);
console.log(pairShoes);
//[]
var shoes4 = [
    { type: 'I', size: 35 },
    { type: 'R', size: 35 },
    { type: 'I', size: 35 },
    { type: 'R', size: 35 },
    { type: 'I', size: 35 },
    { type: 'R', size: 35 }
];
pairShoes = organizeShoes(shoes4);
console.log(pairShoes);
var shoes5 = [
    { type: 'I', size: 40 },
    { type: 'R', size: 40 },
    { type: 'I', size: 41 },
    { type: 'R', size: 41 },
    { type: 'I', size: 42 },
    { type: 'R', size: 42 },
    { type: 'I', size: 42 }
];
pairShoes = organizeShoes(shoes5);
console.log(pairShoes);
