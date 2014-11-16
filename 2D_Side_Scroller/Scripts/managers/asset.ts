﻿/*
Author: Kelly McAlpine 200269425
Project: 2D Side-Scroller Game
Last Updated: 11/15/2014
Description: This typescript file handles 
all assets for the game (images, sounds & spritesheet)
*/

module managers {

    //asset manifest
    var assetManifest = [
        { id: "background", src: "Assets/Images/background.gif" },
        { id: "burp", src: "Assets/Sounds/burp.wav" },
        { id: "harp", src: "Assets/Sounds/harp.wav" },
        { id: "harpoon", src: "Assets/Sounds/harpoon.mp3" },
        { id: "underwater", src: "Assets/Sounds/underwater.mp3" }
    ]

    var spriteSheetData = {
        "images": ["Assets/Images/underwater.png"],
        "frames": [

            [2, 2, 65, 62],
            [146, 2, 100, 41],
            [69, 2, 75, 58],
            [146, 45, 65, 7]
        ],
        "animations": {

            "enemy": [0],
            "hero": [1],
            "reward": [2],
            "shoot": {
                frames: [3, 4, 5, 6, 7],
                speed: 1
            }
        }
    };

    // Asset Manager Class
    export class Asset {
        public static manifest;
        public static data;

        public static loader;
        public static underwater: createjs.SpriteSheet;      
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.underwater = new createjs.SpriteSheet(spriteSheetData);
        }

    }

} 