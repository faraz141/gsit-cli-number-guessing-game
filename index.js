#! /usr/bin/env node
// import inquirer from "inquirer";
// // computer will generate a random number
// // user input for guessing number
// // compare user input with computer generated number and show result
// const randomNumber = Math.floor(Math.random() * 6 + 1 );
// const answer = await inquirer.prompt([
//     {
//         name : "userGuessNumber",
//         type: "number",
//         message: "Please guess a number between 1-6"
//     },
// ]);
// if(answer.userGuessNumber === randomNumber){
//     console.log("congratulation you guessed a number");
// }else{
//     console.log("you guessed wrong number");
// }
// #!/usr/bin/env node
import inquirer from "inquirer";
// Function to handle the guessing game
async function playGame() {
    let playAgain = true;
    while (playAgain) {
        // Generate a random number between 1 and 6
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        // Ask the user to guess the number
        const answer = await inquirer.prompt([
            {
                name: "userGuessNumber",
                type: "number",
                message: "Please guess a number between 1-6",
            },
        ]);
        // Check if the guess is correct
        if (answer.userGuessNumber === randomNumber) {
            console.log("Congratulations, you guessed the correct number!");
        }
        else {
            console.log("You guessed the wrong number.");
        }
        // Ask if the user wants to play again
        const playAgainAnswer = await inquirer.prompt([
            {
                name: "playAgain",
                type: "list",
                message: answer.userGuessNumber === randomNumber ? "Do you want to play again?" : "Try again?",
                choices: ["YES", "NO"]
            },
        ]);
        if (playAgainAnswer.playAgain === "NO") {
            playAgain = false;
            console.log(answer.userGuessNumber === randomNumber ? "Thank you for playing!" : "Better luck next time!");
        }
    }
}
// Start the game
playGame();
