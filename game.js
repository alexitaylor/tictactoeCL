/**
 * Created by alexi on 6/19/17.
 */

var prompt = require('prompt');
var _ = require('lodash');

var board = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

function updateBoard(position, player) {
  board[position] = player;
}

function playerWon() {
  if (board[1] === board[2] && board[1] === board[3]) {
    return true;
  } else if (board[4] === board[5] && board[4] === board[6]) {
    return true;
  } else if (board[7] === board[8] && board[7] === board[9]) {
    return true;
  } else if (board[1] === board[4] && board[1] === board[7]) {
    return true;
  } else if (board[2] === board[5] && board[2] === board[8]) {
    return true;
  } else if (board[3] === board[6] && board[3] === board[9]) {
    return true;
  } else if (board[1] === board[5] && board[1] === board[9]) {
    return true;
  } else if (board[3] === board[5] && board[3] === board[7]) {
    return true;
  } else {
    return false;
  }
}

function printBoard() {
  console.log(
    '  ' + board[1] + '  | ' + board[2] + '  | ' + board[3]
    + '\n--------------'
    + '\n  ' + board[4] + '  | ' + board[5] + '  | ' + board[6]
    + '\n--------------'
    + '\n  ' + board[7] + '  | ' + board[8] + '  | ' + board[9]
  );
}

function rotateBoard() {
  var oldBoard = Object.assign({}, board);
  var newToOldKey = {1: 7, 2: 4, 3: 1, 4: 8, 5: 5, 6: 2, 7: 9, 8: 6, 9: 3};
  _.forEach(board, function(position, k) {
    var oldKey = newToOldKey[k];
    if (oldBoard[oldKey] !== 'X' && oldBoard[oldKey] !== 'O') {
      board[k] = k;
    } else {
      board[k] = oldBoard[oldKey];
    }
  });
}

function gravity() {
  _.forEachRight(board, function(position, k){
    if (board[k] === 'X' || board[k] === 'O') {
      var keyBelow = k;
      if (k >= 4 && k <= 6) {
        keyBelow = parseInt(k) + 3;
        if (board[keyBelow] !== 'X' && board[keyBelow] !== 'O') {
          board[keyBelow] = board[k];
          board[k] = k;
        }
      } else if (k >= 1 && k <= 3) {
        keyBelow = parseInt(k) + 6;
        var keyBelowTwo = parseInt(k) + 3;
        if (board[keyBelow] !== 'X' && board[keyBelow] !== 'O') {
          board[keyBelow] = board[k];
          board[k] = k;
        } else if (board[keyBelowTwo] !== 'X' && board[keyBelowTwo] !== 'O') {
          board[keyBelowTwo] = board[k];
          board[k] = k;
        }
      }
    } else {
      board[k] = k;
    }
  });
}

function game(player) {
  prompt.start();
  prompt.get(['position'], function(err, result) {
    updateBoard(result.position, player);
    rotateBoard();
    gravity();
    console.log('  user move: ' + result.position);
    // print new board
    printBoard();

    if (playerWon()) {
      console.log('Player ' + player + ' Won!!!')
    } else {
      // next turn
      if (player === 'X') {
        game('O');
      } else {
        game('X');
      }
    }
  });
}

console.log( 'Start Game, Player X: \n' +
  '  ' + board[1] + '  | ' + board[2] + '  | ' + board[3]
  + '\n--------------'
  + '\n  ' + board[4] + '  | ' + board[5] + '  | ' + board[6]
  + '\n--------------'
  + '\n  ' + board[7] + '  | ' + board[8] + '  | ' + board[9]
);

game('X');

