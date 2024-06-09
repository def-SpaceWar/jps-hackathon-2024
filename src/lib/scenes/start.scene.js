import { Scene } from "../scene";
import { getPlayer } from "../player";
import { getCtx, loadImage } from "../render";
import { bgMapStart, loadBgTileMap, loadFgTileMap, fgMapStart } from "./sceneTiles";
import { generateTileMap } from "../tileGen";
import { Door } from "../door";
import door1Url from "../../assets/png/sprites/door1.png";
import { door1Animations } from "../../assets/png/sprites/animations";
import { startCorridor } from "./startCorridor.scene";
import { tutorial } from "./tutorial.scene";

async function getStartData(oldData) {
    const redefines = {
        camera: { x: 0, y: 0, scale: 1.25 },
        bgTiles: generateTileMap(
            bgMapStart,
            await loadBgTileMap(),
            { x: -430, y: -283 },
            64,
        ),
        fgTiles: generateTileMap(
            fgMapStart,
            await loadFgTileMap(),
            { x: -430, y: -283},
            64,
        ),
        doors: [
            new Door(
                await loadImage(door1Url), door1Animations,
                303, 124,
                startCorridor, {x: 0, y: 0},
            ),
            new Door(
                await loadImage(door1Url), door1Animations,
                0, 0,
                tutorial, {x: 0, y: 0},
            ),
        ],
    };
    if (oldData.player) {
        return {
            ...oldData,
            ...redefines,
        }
    }
    return {
        ctx: getCtx(),
        player: await getPlayer(),
        ...redefines,
    };
}
export const start = new Scene({
    getData: getStartData,

    update(dt, exit) {
        this.data.player.update(dt);
        this.data.player.unCollide(this.data.fgTiles);
        this.data.player.goThroughDoor(this.data.doors, exit, this.data);
    },

    render(dt) {
        const ctx = this.data.ctx;
        this.data.camera.x = this.data.player.pos.x / 3;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.save();

        ctx.translate(
            window.innerWidth / 2,
            window.innerHeight / 2,
        );

        ctx.translate(
            -this.data.camera.x,
            -this.data.camera.y,
        );

        ctx.scale(this.data.camera.scale, this.data.camera.scale);

        this.data.bgTiles.forEach(t => t.render());
        this.data.fgTiles.forEach(t => t.render());
        this.data.player.render(dt);
        this.data.doors.forEach(d => d.render(dt));
        ctx.restore();
    },
});
