import { getCtx } from "./render";

class Tile {
    static getCtx() {
        if (!this.ctx) this.ctx = getCtx();
        this.ctx.imageSmoothingEnabled = false;
        return this.ctx;
    }

    constructor(image, x, y, tileSize) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.w = this.h = tileSize;
    }

    render = () => Tile.getCtx().drawImage(this.image, this.x, this.y, this.w, this.h);
}

export function generateTileMap(map, tileMap, startCoords, tileSize) {
    const tiles = [];
    for (let i = 0; i < map.length; i++) {
        const mapi = map[i];
        for (let j = 0; j < mapi.length; j++) {
            const mapij = mapi[j];
            if (mapij == " ") continue;
            const random = Math.random();
            tiles.push(new Tile(
                tileMap[mapij].filter(l => l[1] > random)[0][0],
                j * (tileSize) - 1 + startCoords.x,
                i * (tileSize) - 1 + startCoords.y,
                tileSize,
            ));
        }
    }
    return tiles;
}
