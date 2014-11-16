/// <reference path="../managers/asset.ts" />

/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles 
the controlling of the game's background
*/
module objects {
    // Background Class
    export class Background extends createjs.Bitmap {
        width: number;
        height: number;
        dx: number;
        constructor() {
            super(managers.Asset.loader.getResult("background"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = this.width;
        }

        update() {
            this.x -= 3;
            if (this.x + this.width - 50 <= 0) {
                this.reset();
            }
        }
    }
}  