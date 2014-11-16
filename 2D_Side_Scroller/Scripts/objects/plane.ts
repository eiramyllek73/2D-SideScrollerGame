// Plane Class
module objects {
    export class Hero extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("hero", game);
            this.game.addChild(this);
            this.update();
  
        }

        update() {
            this.y = stage.mouseY;
        }
    }
}