#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6"
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation you guessed a number");
}
else {
    console.log("you guessed wrong number");
}
