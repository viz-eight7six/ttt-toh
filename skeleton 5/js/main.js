const View = require ('./ttt-view.js')// require appropriate file
const Game = require ('./solution/game.js')// require appropriate file

$( () => {
  // Your code here
  new View(new Game(), $('figure'))
});
