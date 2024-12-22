function fixGiftList(received, expected) {
    var receivedCount = {};
    var expectedCount = {};
    // Contar los regalos recibidos 
    received.forEach(function (gift) { receivedCount[gift] = (receivedCount[gift] || 0) + 1; });
    // Contar los regalos esperados 
    expected.forEach(function (gift) { expectedCount[gift] = (expectedCount[gift] || 0) + 1; });
    var missing = {};
    var extra = {};
    // Determinar los regalos faltantes y extra 
    for (var gift in expectedCount) {
        if (expectedCount[gift] > (receivedCount[gift] || 0)) {
            missing[gift] = expectedCount[gift] - (receivedCount[gift] || 0);
        }
    }
    for (var gift in receivedCount) {
        if (receivedCount[gift] > (expectedCount[gift] || 0)) {
            extra[gift] = receivedCount[gift] - (expectedCount[gift] || 0);
        }
    }
    return { missing: missing, extra: extra };
}
console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']));
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }
console.log(fixGiftList(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite']));
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }
console.log(fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car']));
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }
console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
