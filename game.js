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

function game(payerTurn) {
  prompt.start();

  prompt.get(['position'], function(err, result) {
    console.log('  user move: ' + result.position);
    game();
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
