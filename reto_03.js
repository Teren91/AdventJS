function organizeInventory(inventory) {
    var inventoryOrganized = {};
    inventory.forEach(function (toy) {
        var name = toy.name, quantity = toy.quantity, category = toy.category;
        if (!inventoryOrganized[category]) {
            inventoryOrganized[category] = {};
        }
        if (!inventoryOrganized[category][name]) {
            inventoryOrganized[category][name] = 0;
        }
        inventoryOrganized[category][name] += quantity;
    });
    return inventoryOrganized;
}
var inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
//organizeInventory(inventary)
console.log(organizeInventory(inventary));
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
var inventary2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
];
var inventario = organizeInventory(inventary2);
console.log(inventario);
var inventory3 = [];
var inventario3 = organizeInventory(inventory3);
console.log(inventario3);
// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
