class View {
  constructor(game, $el) {
    this.game = game
    this.$el = $el
    this.setupBoard()
    this.bindEvents()
  }

  bindEvents() {
    console.log(this.game.isOver());

    $("li").on("click", (e) => {
      if (e.currentTarget.className === "mark") {
        window.alert("Invalid move!")
      } else if (this.game.isOver()) {
        alert("Game Over!")
      } else {
        this.game.playMove($(e.currentTarget).data("pos"))
        // console.log(this.game.isOver());
        e.currentTarget.className = "mark"
        let mark = this.game.currentPlayer
        e.currentTarget.innerText = mark
      }

    })
  }

  makeMove($square) {

  }

  setupBoard() {
    let el = this.$el.append($("<ul></ul>").addClass("grid"))
    for(let i = 0; i < 3; i++) {
      let $row = $("ul")
      for(let j = 0; j < 3; j++) {
        $row.append($("<li></li>").attr("class", "cell").data("pos", [i,j]))
      }
    }
  }
}

module.exports = View;
