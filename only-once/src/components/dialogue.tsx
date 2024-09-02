document.addEventListener("DOMContentLoaded", () => {
    // Container for the text.
    var container = document.querySelector('.text');
    
    // Creating variable speeds to be able to fine tune them for whatever is needed.
    const speeds = {
        slow: 120,
        normal: 70,
        fast: 40
    }

    type possibleDialogue = { 
        text: string;
        textSpeed: number;
        classes?: string[];
    }

    let dialogues: Array<Array<possibleDialogue>> = [
        [
            {text: 'Hey!', textSpeed: speeds.slow},
            {text: "What's up?", textSpeed: speeds.normal, classes: ["bold"]},
            {text: "I'm great!", textSpeed: speeds.fast}
        ],
        [
            {text: 'So....', textSpeed: speeds.slow},
            {text: "Uhmm.. You still", textSpeed: speeds.slow},
            {text: "here?", textSpeed: speeds.slow, classes: ["bold"]}
        ],
        [
            {text: 'Did you know', textSpeed: speeds.normal},
            {text: "there is a", textSpeed: speeds.normal},
            {text: "secret here?", textSpeed: speeds.slow, classes: ["bold"]}
        ],
        [
            {text: 'Come back', textSpeed: speeds.normal},
            {text: "later to answer the", textSpeed: speeds.normal},
            {text: "question.", textSpeed: speeds.normal, classes: ["bold"]}
        ]
    ]

    function displayDialogue(){

        if(container){
            container.innerHTML = '';
        }

        let dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];

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
                    classes: line.classes || []
                })
            })
        })

        function revealCharacters(list: any){
            let next = list.splice(0, 1)[0];
            next.span.classList.add("revealed");

            next.classes.forEach((c:any) => {
                next.span.classList.add(c);
            })

            var delay = next.isSpace ? 0 : next.delayAfter;

            if(list.length > 0){
                setTimeout(function(){
                    revealCharacters(list);
                }, delay)
            }
        }

        revealCharacters(textCharacters);
    }

    displayDialogue();

    setInterval(displayDialogue, 10000);
})

