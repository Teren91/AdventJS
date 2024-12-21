function detectBombs(grid) {
    var result = [];
    for (var i = 0; i < grid.length; i++) {
        result.push([]);
        for (var j = 0; j < grid[i].length; j++) {
            result[i].push(0);
            // if(grid[i][j]) {
            //     result[i][j] = 1;
            // } else 
            //mirar abajo
            if (i > 0 && grid[i - 1][j]) {
                result[i][j]++;
            }
            //mirar arriba
            if (i < grid.length - 1 && grid[i + 1][j]) {
                result[i][j]++;
            }
            //mirar izquierda
            if (j > 0 && grid[i][j - 1]) {
                result[i][j]++;
            }
            //mirar derecha
            if (j < grid[i].length - 1 && grid[i][j + 1]) {
                result[i][j]++;
            }
            //mirar diagonal superior izquierda
            if (i < grid.length - 1
                && j > 0
                && grid[i + 1][j - 1]) {
                result[i][j]++;
            }
            //mirar diagonal superior derecha
            if (i < grid.length - 1
                && j < grid[i].length - 1
                && grid[i + 1][j + 1]) {
                result[i][j]++;
            }
            //mirar diagonal inferior izquierda
            if (i > 0
                && j > 0
                && grid[i - 1][j - 1]) {
                result[i][j]++;
            }
            //mirar diagonal inferior derecha
            if (i > 0
                && j < grid[i].length - 1
                && grid[i - 1][j + 1]) {
                result[i][j]++;
            }
        }
    }
    return result;
}
console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]
console.log(detectBombs([
    [true, false],
    [false, false]
]));
// [
//   [0, 1],
//   [1, 1]
// ]
console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
]));
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
