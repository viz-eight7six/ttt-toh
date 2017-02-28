const View = require ('./tow-view.js')// require appropriate file
const Game = require ('./../solution/game.js')// require appropriate file


$( () => {
  const rootEl = $('.hanoi');
  const game = new Game();
  new View(game, rootEl);
});
