let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let guesses = [];

document.getElementById('submit-btn').addEventListener('click', checkGuess);
document.getElementById('guess-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const userGuess = Number(document.getElementById('guess-input').value);
    const result = document.getElementById('result');
    const previousGuesses = document.getElementById('previous-guesses');

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guesses.push(userGuess);
    previousGuesses.textContent = 'Previous guesses: ' + guesses.join(', ');

    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number in ${guessCount} tries!`;
        gameOver();
    } else if (guessCount === 10) {
        result.textContent = `Game over! You've reached the maximum number of guesses. The correct number was ${randomNumber}.`;
        gameOver();
    } else {
        if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else if (userGuess > randomNumber) {
            result.textContent = 'Too high! Try again.';
        }
        guessCount++;
        document.getElementById('guess-input').value = '';
        document.getElementById('guess-input').focus();
    }
}

function gameOver() {
    document.getElementById('guess-input').disabled = true;
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('restart-btn').style.display = 'inline';
    document.getElementById('restart-btn').addEventListener('click', restartGame);
}

function restartGame() {
    guessCount = 1;
    guesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById('guess-input').disabled = false;
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('result').textContent = '';
    document.getElementById('previous-guesses').textContent = '';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
}
