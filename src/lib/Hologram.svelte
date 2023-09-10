<script lang="ts">
    import {parseColors} from "$lib/ColorParser";

    export let text;
    export let background = "day";

    $: lineCount = text.split("\n").length;
    $: textSize = lineCount <= 22 ? 15 / lineCount : 10 / lineCount;
    $: fontSize = "font-size: " + textSize + "em";
</script>
<div class="relative inline-block mx-auto">
    <img src="/backgrounds/{background}.webp" aria-hidden="true" alt="">
    <div class="inline-block absolute top-0 left-0 w-full h-full text-center flex justify-items-center align-center items-center">
        <div class="w-full">
            {#each text.split("\n") as line}
                <span style={fontSize}>
                    <span class="line">{@html parseColors(line)}</span>
                </span>
                <br>
            {/each}
        </div>
    </div>
</div>

<style>
    img {
        aspect-ratio: 16 / 9;
        width: min(80em, 90vw);
    }
    .line {
        display: inline-block;
        font-family: Mojangles, monospace;
        background-color: rgba(0, 0, 0, 0.35);
        padding: 0.25em;
        margin: 0.125em;
    }
</style>

