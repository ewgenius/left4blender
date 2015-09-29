var Game = (function () {
    function Game() {
        this.app = b4w.require('app');
        this.data = b4w.require('data');
        this.controls = b4w.require('controls');
        this.scenes = b4w.require('scenes');
    }
    Game.prototype.init = function () {
        var _this = this;
        this.app.init({
            canvas_container_id: "container",
            callback: function () { return _this.run(); }
        });
    };
    Game.prototype.run = function () {
        var _this = this;
        this.data.load("/scenes/test4.json", function () {
            _this.app.enable_controls();
            _this.app.enable_camera_controls();
        });
    };
    Game.main = function () {
        var game = new Game();
        game.init();
        window['game'] = game;
    };
    return Game;
})();
Game.main();
