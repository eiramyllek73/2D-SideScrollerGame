/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles 
the Reward class - which is the mermaid for this game
*/

module objects {
    // Reward Class
    export class Reward extends objects.GameObject {
        dx: number;
        dy: number;
        constructor(game: createjs.Container) {
            super("reward", game);
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 1 + 1);
            this.dx = Math.floor(Math.random() * 5 + 5);
        }

        update() {
            this.x -= this.dx;
            if (this.x + this.width <= 0) {
                this.reset();
            }

        }
    }
}  