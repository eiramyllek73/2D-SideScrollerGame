﻿/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles
the Enemy class, which is the piranha in this game
*/

module objects {
    // Enemy class
    export class Enemy extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game: createjs.Container) {
            super("enemy", game);
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
            this.y -= this.dy;
            if (this.x + this.width <= 0) {
                this.reset();
            }

        }
    }
} 