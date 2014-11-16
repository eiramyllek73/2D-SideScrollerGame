/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/hero.ts" />
/// <reference path="objects/reward.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

﻿/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles the 
preload function, init function, changeState function, 
distance measures, collision checks & main game loop functions
*/

var stage: createjs.Stage;
var game: createjs.Container;
var instructions;

// game objects
var hero: objects.Hero;
var reward: objects.Reward;
var enemy = [];
var background: objects.Background;
var background2: objects.Background;
var scoreboard: objects.Scoreboard;
var shots: boolean;
var mouseClick = {};

var currentState: number;
var currentStateFunction;

// Preload function
function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);

}

/**
* This function initalizes the game
*
**/
function init(): void {
    //Set up stage, canvas & ticker
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    createjs.Sound.play("underwater");

    //Add event listener for clicking mouse for shooting
    //click.addEventListener('mouseClick', mouseClick);

    // Set up first state of game
    currentState = constants.MENU_STATE;
    changeState(currentState);

    gameStart();

}

// Game Loop
function gameLoop(event): void {

    currentStateFunction();

    stage.update();
}

/**
* This function changes the state the game is currently on
*
**/
function changeState(state: number) {

    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.Menu();
            break;
        case constants.PLAY_STATE:
            currentStateFunction = states.playState;
            states.Play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            states.GameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            break;

    }
}

/**
* This function plots 2 areas, and determines the distance
*
**/
function distance(point1: createjs.Point, point2: createjs.Point): number {
    var p1: createjs.Point;
    var p2: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

    p1 = new createjs.Point();
    p2 = new createjs.Point();

    p1.x = point1.x;
    p1.y = point1.y;
    p2.x = point2.x;
    p2.y = point2.y;

    theXs = p2.x - p1.x;
    theYs = p2.y - p1.y;

    theXs = theXs * theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

/**
* This function checks if the scuba diver has connected with a mermaid for points
*
**/
function heroAndReward() {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = hero.x;
    p1.y = hero.y;
    p2.x = reward.x;
    p2.y = reward.y;

    if (distance(p1, p2) <= ((hero.width * 0.5) + (reward.width * 0.5))) {
        createjs.Sound.play("harp");
        scoreboard.score += 100;
        reward.reset();
    }
}

/**
* This function checks if the scuba diver has been eaten by a piranha
*
**/
function heroAndEnemy(theEnemy: objects.Enemy) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    var enemy: objects.Enemy = new objects.Enemy(game);

    enemy = theEnemy;

    p1.x = hero.x;
    p1.y = hero.y;
    p2.x = enemy.x;
    p2.y = enemy.y;

    if (distance(p1, p2) <= ((hero.width * 0.5) + (enemy.width * 0.5))) {
        createjs.Sound.play("burp");
        scoreboard.lives -= 1;
        enemy.reset();
    }
}

function collisionCheck() {
    heroAndReward();

    for (var count = 0; count < constants.ENEMY_NUM; count++) {
        heroAndEnemy(enemy[count]);
    }
}

function gameStart(): void {

   
}