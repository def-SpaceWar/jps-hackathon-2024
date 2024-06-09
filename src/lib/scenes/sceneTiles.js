import { loadImage } from "../render";
import bgBlankUrl from "../../assets/png/tiles/blank_bg.png";
import bgBlankUrlCracked from "../../assets/png/tiles/cracked_bg.png";
import bgBlankUrlCrackedVine from "../../assets/png/tiles/cracked_vine_bg.png";
import bgBlankUrlHole from "../../assets/png/tiles/hole_bg.png";
import bgBlankUrlLadder from "../../assets/png/tiles/ladder_bg.png";
import bgBlankUrlVine from "../../assets/png/tiles/vine_bg.png";

import fgBlankUrl from "../../assets/png/tiles/blank_fg.png";
import fgBlankUrlCracked from "../../assets/png/tiles/cracked_fg.png";
import fgBlankUrlMoss from "../../assets/png/tiles/moss_fg.png";


export const loadBgTileMap = async () => {
    return {
        "b": [
            [await loadImage(bgBlankUrlHole), 0.025],
            [await loadImage(bgBlankUrlVine), 0.05],
            [await loadImage(bgBlankUrlCrackedVine), 0.075],
            [await loadImage(bgBlankUrlCracked), 0.1],
            [await loadImage(bgBlankUrl), 1.0],
        ],
        "l": [
            [await loadImage(bgBlankUrlLadder), 1],
            
        ],
    }
}

export const loadFgTileMap = async () => {
    return {
        "b": [
            [await loadImage(fgBlankUrlMoss), 0.1],
            [await loadImage(fgBlankUrlCracked), 0.2],
            [await loadImage(fgBlankUrl), 1.0],
            
        ],
    }
}

export const bgMapStart = [
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "l", "b", "b", "b", "b"],
];

export const fgMapStart = [
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b",],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b",],
];


export const bgMap2 = [
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
];

export const fgMap2 = [
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
]

export const bgMapTutorial =[["b"]];

export const fgMapTutorial = [
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "b"],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
];