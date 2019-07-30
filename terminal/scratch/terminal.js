//Use stack to keep record of last node added in terminal 
//This can be helpful to have a reference to node to which 
//the text has to appended or removed

//keys for KeyBoardEvent are
//Backspace
//Enter
//Control
var stack = [];
var topOfStack = -1;

var terminal = document.getElementById("terminal");
terminal.onkeydown = function(evt) {
    var terminalText = terminal.innerHTML;
    var newLine = "<br/>";
    console.log(evt);
    if (evt.key == "Backspace") {
        var lastIndex = terminalText.length - 1;
        terminal.innerHTML = terminalText.slice(0, lastIndex);
    }
    if (evt.key == "Enter") {
        terminal.innerHTML += newLine
    }
    else {
        terminal.innerHTML += evt.key
    }
};