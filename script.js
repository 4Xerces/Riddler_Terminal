const speed = 50;
let i = 0;
let sent = 0;
let nextSend = 0;
let nextI = 0;
let middleSend = 0;
let middleI = 0;
let lastSend = 0;
let lastI = 0;
let currentQuestion = 1; 

const intro = [
    ">> LOOK WHAT THE BAT DRAGGED IN. WHAT DO YOU SAY WE PLAY A LITTLE GAME?",
    ">> PROCEED [Y/N]",
    ">> THREE CORRECT ANSWERS AND THE TRUTH WILL BE EXPOSED. LET'S GET STARTED.",
    ">> HE IS NO ONE'S SON, LOOK AT HIS DOSSIER. HOODED MAN THAT'S CALLED..."
];

const nextLines = [
    ">> CORRECT ;)",
    ">> YOU'RE ON A CASE, YOU ARE A DETECTIVE AREN'T YOU?",
    ">> RICH CREATURES OF THE NIGHT BUNDLED UP, WHO ARE THEY?"
];

const middleLines = [ 
    ">> ANYONE WOULD'VE GUESSED THAT ONE.",
    ">> BUT DON'T GET COCKY NOW, CAUSE YOU'RE NOT THERE YET.",
    ">> NOW FOR YOUR LAST RIDDLE, THREE MUSKETEERS, THE ONES BEHIND THIS MASTERPIECE, WHO ARE THEY?"
];

const finalLines = [
    ">> WELL DONE",
    ">> THE TRUTH HAS BEEN EXPOSED. ACCESS GRANTED.",
    ">> THE CODE IS 121108250108, OPEN THE RIDDLER PROTOCOL FOR A SURPRISE ;)"
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
    
    const row = document.createElement("div");
    row.className = "input-row";
    row.innerHTML = `<span class="prompt"> >> ANSWER: </span>`;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "playerAnswer";
    inputField.className = "terminal-input";
    inputField.autocomplete = "off";
    
    
    inputField.addEventListener("keydown", checkAnswer);

    row.appendChild(inputField);
    answerDiv.appendChild(row);
    inputField.focus();
}

function writeNextLines() {
    if (nextSend < nextLines.length) {
        let currentLine = nextLines[nextSend];
        if (nextI < currentLine.length) {
            document.getElementById('intro').innerHTML += currentLine.charAt(nextI);
            nextI++;
            setTimeout(writeNextLines, speed);
        } else {
            nextSend++;
            nextI = 0;
            document.getElementById('intro').innerHTML += "<br>";
            setTimeout(writeNextLines, 1000);
        }
    } else {
        nextSend = 0;
        nextI = 0;
        answerInput(); 
    }
}


function writeMiddleLines() {
    if (middleSend < middleLines.length) {
        let currentLine = middleLines[middleSend];
        if (middleI < currentLine.length) {
            document.getElementById('intro').innerHTML += currentLine.charAt(middleI);
            middleI++;
            setTimeout(writeMiddleLines, speed);
        } else {
            middleSend++;
            middleI = 0;
            document.getElementById('intro').innerHTML += "<br>";
            setTimeout(writeMiddleLines, 1000);
        }
    } else {
        middleSend = 0;
        middleI = 0;
        answerInput();
    }
}

function writeFinalLines() {
    if (lastSend < finalLines.length) {
        let currentLine = finalLines[lastSend];
        if (lastI < currentLine.length) {
            document.getElementById('intro').innerHTML += currentLine.charAt(lastI);
            lastI++;
            setTimeout(writeFinalLines, speed);
        } else {
            lastSend++;
            lastI = 0;
            document.getElementById('intro').innerHTML += "<br>";
            setTimeout(writeFinalLines, 1000);
        }
    }
}

function checkAnswer(event){
    if(event.key === "Enter"){
        const inputField = document.getElementById("playerAnswer");
        const answer = inputField.value.trim().toLowerCase();

        inputField.disabled = true;
        inputField.id = ""; 

        const parentRow = inputField.parentElement;
        parentRow.innerHTML = `<span class="prompt"> >> ANSWER: </span> ${answer.toUpperCase()}`;
        document.getElementById("intro").innerHTML += "<br>";

        
        if (currentQuestion === 1) {
            if (answer === "red hood") {
                currentQuestion = 2;
                setTimeout(writeNextLines, 1000);
            } else {
                document.getElementById('intro').innerHTML += ">> INCORRECT, TRY USING THAT MONKEY BRAIN OF YOURS HARDER. <br>";
                answerInput();
            } 
        } 
        
        else if (currentQuestion === 2) {
            if (answer === "court of owls") {
                currentQuestion = 3;
                setTimeout(writeMiddleLines, 1000);
            } else {
                document.getElementById('intro').innerHTML += ">> INCORRECT, TRY USING THAT MONKEY BRAIN OF YOURS HARDER. <br>";
                answerInput();
            }
        }
        
        else if (currentQuestion === 3) {
            if (answer === "meteor://strike" ) { 
                currentQuestion = 4;
                setTimeout(writeFinalLines, 1000);
            } else {
                document.getElementById('intro').innerHTML += ">> INCORRECT, TRY USING THAT MONKEY BRAIN OF YOURS HARDER. <br>";
                answerInput();
            }
        }
    }
}