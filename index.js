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
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    let guessedCorrectly = false;
    // Loop until the user guesses correctly
    while (!guessedCorrectly) {
        const answer = await inquirer.prompt([
            {
                name: "userGuessNumber",
                type: "number",
                message: "Please guess a number between 1-6",
            },
        ]);
        if (answer.userGuessNumber === randomNumber) {
            console.log("Congratulations, you guessed the correct number!");
            guessedCorrectly = true; // End the loop
            // Ask if the user wants to play again
            const playAgainAnswer = await inquirer.prompt([
                {
                    name: "playAgain",
                    type: "confirm",
                    message: "Do you want to play again?",
                },
            ]);
            if (playAgainAnswer.playAgain) {
                guessedCorrectly = false; // Reset for a new game
            }
            else {
                console.log("Thank you for playing!");
            }
        }
        else {
            console.log("You guessed the wrong number.");
            const playAgainAnswer = await inquirer.prompt([
                {
                    name: "tryAgain",
                    type: "confirm",
                    message: "Try again?",
                },
            ]);
            if (playAgainAnswer.tryAgain) {
                guessedCorrectly = false; // Reset for a new game
            }
            else {
                console.log("Better luck next time!");
                guessedCorrectly = true;
            }
        }
    }
}
// Start the game
playGame();
