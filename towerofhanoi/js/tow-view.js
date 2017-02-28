var main = require("./main.js")

class View{

  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.setUpTower()
    // this.render()
  }

  setUpTower(){
    for (let i = 0; i < 3; i++) {
      this.$el.append($("<ul></ul>").attr("class", "pile"))
      }

    $('ul').eq(0).append($("<li></li>").attr("class", "disc1") )
    $('ul').eq(0).append($("<li></li>").attr("class", "disc2") )
    $('ul').eq(0).append($("<li></li>").attr("class", "disc3") )

  }

  render() {
    this.game.towers.forEach( (pile) => {
      this.$el.append($("<ul></ul>").attr("class", "pile"))
      pile.forEach( (disc) => {
        $('ul').append($("<li></li>").attr("class", disc))
      })
    })
  }

}

module.exports = View;
