import { Scene } from "../scene";
import { getPlayer } from "../player";
import { getCtx, loadImage } from "../render";
import { bgMap2, loadBgTileMap, loadFgTileMap, fgMap2 } from "./sceneTiles";
import { generateTileMap } from "../tileGen";
import { Door } from "../door";
import door1Url from "../../assets/png/sprites/door1.png";
import { door1Animations } from "../../assets/png/sprites/animations";

async function getStartData(oldData) {
    const redefines = {
        camera: { x: 0, y: 0, scale: 1 },
        bgTiles: generateTileMap(
            bgMap2,
            await loadBgTileMap(),
            { x: -900, y: -400 },
            64,
        ),
        fgTiles: generateTileMap(
            fgMap2,
            await loadFgTileMap(),
            { x: -900, y: -400 },
            64,
        ),
        doors: [
            new Door(
                await loadImage(door1Url), door1Animations,
                400, 263,
                undefined, {x: 500, y: -200},
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
export const startCorridor = new Scene({
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

        this.data.bgTiles.forEach(t => t.render());
        this.data.fgTiles.forEach(t => t.render());
        this.data.player.render(dt);
        this.data.doors.forEach(d => d.render(dt));
        ctx.restore();
    },
});
