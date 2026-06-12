const speed = 50;

let i = 0;
let sent = 0;

const intro=[
    ">> LOOK WHAT THE BAT DRAGGED IN. WHAT DO YOU SAY WE PLAY A LITTLE GAME?",
    ">> PROCEED [Y/N]",
    ">> THREE CORRECT ANSWERS AND THE TRUTH WILL BE EXPOSED. LET'S GET STARTED.",
    ">> WHAT IS BLACK AND BLUE AND DEAD ALL OVER?"
];



function intro_writer(){
    if (sent < 2){
        let currentSent = intro[sent];

    if (i < currentSent.length){
        document.getElementById("intro").innerHTML += currentSent.charAt(i);
        i++;
        setTimeout(intro_writer, speed);
    }

    else {
        sent++;
        i= 0;
        document.getElementById("intro").innerHTML += "<br>";

        if (sent === 2){
            document.getElementById("intro").innerHTML += "<br>";
        }

        setTimeout(intro_writer, 1000);
    }
}

else if(sent === 2 && i === 0){
startInput();
}

}

function startInput(){
window.addEventListener("keydown", function handleInput(event) {
    if(event.key === "Y" || event.key === "y"){
    window.removeEventListener("keydown", handleInput)
    continueWriter();
    }

}

)
}

function continueWriter(){
   if (sent < intro.length){
        let currentSent = intro[sent];

    if (i < currentSent.length){
        document.getElementById("intro").innerHTML += currentSent.charAt(i);
        i++;
        setTimeout(continueWriter, speed);
    }

    else {
        sent++;
        i= 0;
        document.getElementById("intro").innerHTML += "<br>";
        setTimeout(continueWriter, 1000);
    }
} 

else{
    answerInput();
}
}

function answerInput(){
    const answerDiv = document.getElementById("intro");

    answerDiv.innerHTML += "<br>";

    answerDiv.innerHTML += `<span class="prompt"> >> ANSWER: </span>
    <input type="text" id="playerAnswer" class="terminal-input" autofocus onkeydown= checkAnswer(event)>
    `;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "playerAnswer";
    inputField.className = "terminal-input";
    inputField.autofocus = true;
    inputField.onkeydown = checkAnswer;

    inputField.focus();



}

function checkAnswer(event){
    if(event.key === "Enter"){
        const inputField = document.getElementById("playerAnswer");
        const answer = inputField.value.trim();

        inputField.remove();
        document.getElementById("intro").innerHTML += `${answer.toUpperCase()} <br>`;

        
    }
}