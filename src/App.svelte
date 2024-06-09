<script>
    import { onMount } from "svelte";
    import { setupMainCtx, setupUiCtx } from "./lib/render";
    import { listenKeys } from "./lib/input";
    import { start } from "./lib/scenes/start.scene";

    /** @type HTMLCanvasElement */
    let canvas, uiCanvas;

    onMount(async () => {
        setupMainCtx(canvas);
        setupUiCtx(canvas);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        uiCanvas.width = window.innerWidth;
        uiCanvas.height = window.innerHeight;
        document.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            uiCanvas.width = window.innerWidth;
            uiCanvas.height = window.innerHeight;
        });

        listenKeys();

        for (
            let data = {}, nextScene = start;
            !!nextScene;
            [data, nextScene] = await nextScene.run(data)
        );
    });
</script>

<canvas bind:this={canvas}></canvas>
<canvas bind:this={uiCanvas} class="ui"></canvas>

<style>
    canvas {
        background-color: black;
        margin: 0;
        z-index: 0;
    }

    .ui {
        background-color: transparent;
        z-index: 1;
    }
</style>
