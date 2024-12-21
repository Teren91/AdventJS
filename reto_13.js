/*
Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

\\ *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
\\ !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
\\ ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con !
    se contabiliza el movimiento invertido y no el original.
    Por ejemplo, !U?U invierte el movimiento de U,
    por lo que contabiliza que se hizo el movimiento D pero no el U.
    Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.
*/
function isRobotBack(moves) {
    var x = 0;
    var y = 0;
    var executedMoves = new Set();
    var nextMoveInverted = false;
    var duplicatedMove = false;
    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];
        if (move === '*') {
            if (i + 1 < moves.length) {
                move = moves[++i];
                duplicatedMove = true;
            }
            else {
                return [x, y]; // Si hay un * al final, se ignora
            }
        }
        else if (move === '!') {
            nextMoveInverted = true;
            continue; // Salta a la siguiente iteración
        }
        else if (move === '?') {
            if (i + 1 < moves.length) {
                var nextMove = moves[++i];
                if (executedMoves.has(nextMove)) {
                    continue;
                }
                else {
                    move = nextMove;
                }
            }
            else {
                return [x, y]; // Si hay un ? al final, se ignora
            }
        }
        if (nextMoveInverted) {
            switch (move) {
                case 'U':
                    move = 'D';
                    break;
                case 'D':
                    move = 'U';
                    break;
                case 'L':
                    move = 'R';
                    break;
                case 'R':
                    move = 'L';
                    break;
            }
            nextMoveInverted = false;
        }
        if (duplicatedMove) {
            duplicatedMove = false;
            executedMoves.add(move);
            executedMoves.add(move);
            switch (move) {
                case 'U':
                    y += 2;
                    break;
                case 'D':
                    y -= 2;
                    break;
                case 'L':
                    x -= 2;
                    break;
                case 'R':
                    x += 2;
                    break;
            }
        }
        else {
            executedMoves.add(move);
            switch (move) {
                case 'U':
                    y++;
                    break;
                case 'D':
                    y--;
                    break;
                case 'L':
                    x--;
                    break;
                case 'R':
                    x++;
                    break;
            }
        }
    }
    if (x === 0 && y === 0) {
        return true;
    }
    else {
        return [x, y];
    }
}
console.log(isRobotBack('R')); // [1, 0]
console.log(isRobotBack('RL')); // true
console.log(isRobotBack('RLUD')); // true
console.log(isRobotBack('*RU')); // [2, 1]
console.log(isRobotBack('R*U')); // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
console.log(isRobotBack('R?R')); // [1, 0]
console.log(isRobotBack('U?D')); // true
console.log(isRobotBack('R!L')); // [2,0]
console.log(isRobotBack('U!D')); // [0,2]
console.log(isRobotBack('R?L')); // true
console.log(isRobotBack('U?U')); // [0,1]
console.log(isRobotBack('*U?U')); // [0,2]
console.log(isRobotBack('U?D?U')); // true
// Ejemplos paso a paso:
isRobotBack('R!U?U'); // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'
isRobotBack('UU!U?D'); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
