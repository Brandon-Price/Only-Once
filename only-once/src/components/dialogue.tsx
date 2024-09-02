// Container for the text.
var container = document.getElementById("text");

// Creating variable speeds to be able to fine tune them for whatever is needed.
const speeds = {
    slow: 120,
    normal: 70,
    fast: 40
}

// Dialogue should just be text and how fast he will speak (how fast the text will appear on screen)
type possibleDialogue = { 
    text: string;
    textSpeed: number;
}

// All of the possible text of the npc
let dialogue: Array<possibleDialogue> = [
    {text: 'Hey', textSpeed: speeds.slow},
    {text: "What's up", textSpeed: speeds.normal},
    {text: "I'm great!", textSpeed: speeds.fast}
]

let textCharacters: Array<string> = [];

dialogue.forEach((line, index) => {

    // Adds a space at the end of each sentence
    if(index < dialogue.length - 1){
        line.text += " ";
    }

    line.text.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        container?.appendChild(span);
    })
})