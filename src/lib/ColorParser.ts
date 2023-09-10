
export function parseColors(s: string) {
    let correctedString = s.replace(/<(color:)?#([0-9a-f]{6})>/g, "&#$2")
    const colorParts = correctedString.split(/[&§]/);
    for (let i in colorParts) {
        let colorPart = colorParts[i];
        if(colorPart.length == 0) continue;
        const firstChar = colorPart.substring(0, 1);
        // hex
        if(colorPart.startsWith("#") && colorPart.length >= 7) {
            const hex = colorPart.substring(1, 7);
            if((/[0-9a-f]{6}/.exec(hex) ?? []).length > 0) { // valid hex
                colorPart = colorPart.substring(7);
                colorPart = "<span style='color:#" + hex + ";'>" + colorPart + "</span>";
            }
        } else if(Object.keys(colorCodes).includes(firstChar)) {
            const hex = colorCodes[firstChar];
            colorPart = colorPart.substring(1);
            colorPart = "<span style='color:#" + hex + ";'>" + colorPart + "</span>";
        } else {
            // add & back if it's not a color
            if(i != 0) colorPart = "&" + colorPart;
        }
        colorParts[i] = colorPart;
    }
    return colorParts.join("");
}

const colorCodes = {
    "0": "000000",
    "1": "0000aa",
    "2": "00aa00",
    "3": "00aaaa",
    "4": "aa0000",
    "5": "aa00aa",
    "6": "ffaa00",
    "7": "aaaaaa",
    "8": "555555",
    "9": "5555ff",
    "a": "55ff55",
    "b": "55ffff",
    "c": "ff5555",
    "d": "ff55ff",
    "e": "ffff55",
    "f": "ffffff"
}
