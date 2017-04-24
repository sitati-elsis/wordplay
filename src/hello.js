const defaultLine = "We are the champions of tomorrow";
const BR = "br /"

function main() {
    let enterEl = document.getElementById("enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

function addToOutput(newLine = defaultLine) {
    let output = document.getElementById("output");
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onClickEnter() {
    let commands = document.getElementById("commands");
    addToOutput(commands.value);
}

main();