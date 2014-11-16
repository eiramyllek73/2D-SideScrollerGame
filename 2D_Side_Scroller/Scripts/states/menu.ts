/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />

﻿/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles 
the menu state of this game
*/
module states {

    export function menuState() {
        background.update();
        hero.update();
    }

    export function Menu() {
        var mailPilotText: createjs.Text;

        game = new createjs.Container();

        background = new objects.Background(game);

        hero = new objects.Hero(game);

        mailPilotText = new createjs.Text("WANNA PIRANHA?", constants.GAME_FONT, constants.FONT_COLOUR);
        mailPilotText.regX = mailPilotText.getBounds().width * 0.5;
        mailPilotText.regY = mailPilotText.getBounds().height * 0.5;
        mailPilotText.x = stage.canvas.width * 0.5;
        mailPilotText.y = stage.canvas.height * 0.5;
        game.addChild(mailPilotText);

        mailPilotText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }

}  