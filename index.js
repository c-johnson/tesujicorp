// import { Goban } from 'goban';

const Goban = window.goban.Goban;

class Tesuji {
  constructor() {
    this.goban_container = document.querySelectorAll('#goban-container')[0];

    this.buildGoban();
    this.render();
  }

  buildGoban() {
    this.goban_div = document.createElement('div');

    let opts = {
      "board_div": this.goban_div,
      "interactive": true,
      "mode": "puzzle",
      "player_id": 0,
      "server_socket": null,
      "square_size": 20
    };

    this.goban = new Goban(opts);
    this.goban.setMode("puzzle");
    this.goban.on("update", () => this.onUpdate());
    window["global_goban"] = this.goban;
  }
  
  render() {
    this.goban_container.append(this.goban_div);
  }
}

window.tesuji = new Tesuji();
