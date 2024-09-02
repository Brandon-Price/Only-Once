// Container for the text.
var container = document.getElementById("text");

// Creating variable speeds to be able to fine tune them for whatever is needed.
const speeds = {
    slow: 120,
    normal: 70,
    fast: 40
}

type possibleDialogue = { 
    text: string;
    textSpeed: number;
    classes?: string;
}

let dialogue: Array<possibleDialogue> = [
    {text: 'Hey', textSpeed: speeds.slow},
    {text: "What's up", textSpeed: speeds.normal},
    {text: "I'm great!", textSpeed: speeds.fast}
]

let textCharacters: any = [];

dialogue.forEach((line, index) => {

    // Adds a space at the end of each sentence
    if(index < dialogue.length - 1){
        line.text += " ";
    }

    line.text.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        container?.appendChild(span);
        textCharacters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.textSpeed,
            classes: []
        })
    })
})

function revealCharacters(list: any){
    let next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");

    var delay = next.isSpace ? 0 : next.delayAfter;

    if(list.length > 0){
        setTimeout(function(){
            revealCharacters(list);
        }, delay)
    }
}

revealCharacters(textCharacters);