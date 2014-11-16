/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />

﻿/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles 
play state of this game
*/
module states {

    export function playState() {
        background.update();
        reward.update();
        hero.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemy[count].update();
        }

        collisionCheck();
        scoreboard.update();

        //check to see if the player has run out of lives or not
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    export function Play() {

        game = new createjs.Container();

        background = new objects.Background(game);
        reward = new objects.Reward(game);
        hero = new objects.Hero(game);

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemy[count] = new objects.Enemy(game);
        }

        scoreboard = new objects.Scoreboard(game);

        stage.addChild(game);
    }

}  