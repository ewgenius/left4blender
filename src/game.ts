/// <reference path="../definitions/b4w.d.ts"/>

class Game {
  app: b4w.App;
  data: b4w.Data;
  controls: b4w.Controls;

  constructor() {
    this.app = <b4w.App>b4w.require('app');
    this.data = <b4w.Data>b4w.require('data');
    this.controls = <b4w.Controls>b4w.require('controls');
  }

  init() {
    this.app.init({
      canvas_container_id: "container",
      callback: () => this.run()
    });
  }

  run() {
    this.data.load("/scenes/test4.json", () => {
      this.app.enable_controls();
      this.app.enable_camera_controls();
    });
  }

  static main() {
    var game: Game = new Game();
    game.init();
  }
}

Game.main();
