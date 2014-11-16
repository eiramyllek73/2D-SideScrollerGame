module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        game: createjs.Container;

        constructor(spriteString: string, game: createjs.Container) {
            super(managers.Asset.underwater, spriteString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;
            this.game = game;
        }

    }
}  