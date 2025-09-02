const max = prompt("Enter the maximum number:");
const random = Math.floor(Math.random() * parseInt(max)) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        alert("User quits");
        break;
    }

    const numGuess = parseInt(guess);

    if (numGuess === random) {
        alert("Yes, you are right! Congrats! The random number was " + random);
        break;
    } else if (numGuess < random) {
        guess = prompt("Hint: Guess was too small, try again.");
    } else {
        guess = prompt("Hint: Guess was too large, try again.");
    }
}