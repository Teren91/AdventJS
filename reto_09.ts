type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  
  const line: number = board.findIndex(line => line.includes('@'));

  const position: number = board[line].indexOf('@');

  var result: Result = 'none'; 

  switch (mov) {
    case 'U':
      result = goUp();
      break;
    case 'D':
      result = goDown();
      break;
    case 'R':
      result = goRight();
      break;
    case 'L':
      result = goLeft();
      break;
  }

  function goUp(): Result 
  {
    if(line === 0)
      {
      return 'crash';
    }       
    else 
    {
      if(board[line - 1][position] == '*'){
        return 'eat';
      }else if(board[line - 1][position] == 'o'){
        return 'crash';
      }
    }
    return 'none';
  }

  function goDown(): Result {
    if(line === board.length - 1){
      return 'crash';
    }       
    else {
      if(board[line + 1][position] == '*'){
        return 'eat';
      }else if(board[line + 1][position] == 'o'){
        return 'crash';
      }
    }

    return 'none';
  }

  function goLeft(): Result {
    if(position === 0){
      return 'crash';
    }       
    else {
      if(board[line][position - 1] == '*'){
        return 'eat';
      }else if(board[line][position - 1] == 'o'){
        return 'crash';
      }
    }
    
    console.log(position);

    return 'none';
  }

  function goRight(): Result {
    if(position === board[line].length - 1){
      return 'crash';
    }       
    else {
      if(board[line][position + 1] == '*'){
        return 'eat';
      }else if(board[line][position + 1] == 'o'){
        return 'crash';
      }
    }

    return 'none';
  }

  return result;
}

var board = [
  '·····', 
  '*····', 
  '@····', 
  'o····', 
  'o····'];


console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha