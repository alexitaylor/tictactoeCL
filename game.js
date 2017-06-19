/**
 * Created by alexi on 6/19/17.
 */

var prompt = require('prompt');

var board = {
  1: '  1 ',
  2: '  2 ',
  3: '  3 ',
  4: '  4 ',
  5: '  5 ',
  6: '  6 ',
  7: '  7 ',
  8: '  8 ',
  9: '  9 ',
};

function updateBoard(position, player) {
  board[position] = '  ' + player + ' ';
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
    return true
  } else {
    return false;
  }
}

function game(player) {
  prompt.start();

  prompt.get(['position'], function(err, result) {
    updateBoard(result.position, player);
    console.log('  user move: ' + result.position);

    // print new board
    console.log(
      board[1] + '|' + board[2] + '|' + board[3]
      + '\n--------------'
      + '\n' + board[4] + '|' + board[5] + '|' + board[6]
      + '\n--------------'
      + '\n' + board[7] + '|' + board[8] + '|' + board[9]
    );

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





console.log( 'Start Game: \n' +
  board[1] + '|' + board[2] + '|' + board[3]
  + '\n--------------'
  + '\n' + board[4] + '|' + board[5] + '|' + board[6]
  + '\n--------------'
  + '\n' + board[7] + '|' + board[8] + '|' + board[9]
);



game('X');

// prompt.start();
//
// //
// // Get two properties from the user: username and email
// //
// prompt.get(['username', 'email'], function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  email: ' + result.email);
// });
