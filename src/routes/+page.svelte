<script>
    import Hologram from "$lib/Hologram.svelte";
    import {RangeSlider} from "@skeletonlabs/skeleton";
    import {usernames, values} from "$lib/usernames";

    let number = 10;

    let header = "&6=== &eThe best leaderboard &6===";
    let format = "&6{POS}. &e{NAME} &7- &e{VALUE}";
    let footer = "&6========================";

    let lines = []

    $: lines = (() => {
        let newLines = [];
        for (let pos = 1; pos <= number; pos++) {
            newLines.push(
                format
                    .replaceAll("\{POS}", pos)
                    .replaceAll("\{NAME}", usernames[pos])
                    .replaceAll("\{VALUE}", values[pos].toLocaleString())
            );
        }
        return newLines;
    })();
</script>

<div class="text-center">
    <br>
    <h1 class="h1">Hologram leaderboard generator</h1>
    <div class="limit">
        This page was made to make it easier to generate leaderboards
        <br>
        <br>

        Header
        <textarea class="textarea" rows="" placeholder="&6=== &eThe best leaderboard &6===" bind:value={header}></textarea>
        <br>
        Row format
        <input class="textarea" type="text" bind:value={format}>
        <br>
        Footer
        <textarea class="textarea" rows="" placeholder="&6=== &eThe best leaderboard &6===" bind:value={footer}></textarea>

        <br>
        <br>

        <RangeSlider bind:value={number} step={1} max={20} min={5}/>
        <input type="number" class="input w-16" bind:value={number}>


    </div>
    <br>
    <Hologram text={header + "\n" + lines.join("\n") + "\n" + footer}/>
</div>