import {
    Environment
} from "./environment.js";
import {
    options,
    print
} from "./additions.js"

const defaultLine = "We are the champions of tomorrow";
const BR = "br /"

function main() {
    let enterEl = document.getElementById("enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
}

var environment = new Environment("Forest -");

function addToOutput(newLine = defaultLine) {
    let output = document.getElementById("output");
    output.innerHTML = output.innerHTML + BR + newLine;
}

function onCommand(command) {
    if (command == "help") {
        options.outputOptions();
    } else if (command == "left") {

    } else if (command == "right") {

    } else if (command == "up") {

    } else if (command == "down") {

    }
    else {
        addToOutput(command);
    }
}

function onClickEnter() {
    let commands = document.getElementById("commands");
    addToOutput(commands.value);
}

main();
print("log", "hello");