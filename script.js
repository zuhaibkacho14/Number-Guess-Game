document.addEventListener('DOMContentLoaded', () => {
    const minNumber = 1;
    const maxNumber = 100;
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const feedback = document.getElementById('feedback');
    const restartBtn = document.getElementById('restart-btn');
    const minNumberSpan = document.getElementById('minNumber');
    const maxNumberSpan = document.getElementById('maxNumber');
    
    let randomNumber;
    
    function startGame() {
        randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        feedback.textContent = '';
        guessInput.value = '';
        restartBtn.disabled = true;
    }
    
    function checkGuess() {
        const userGuess = parseInt(guessInput.value, 10);
        if (isNaN(userGuess)) {
            feedback.textContent = 'Please enter a valid number.';
            return;
        }
        
        if (userGuess < minNumber || userGuess > maxNumber) {
            feedback.textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
            return;
        }
        
        if (userGuess === randomNumber) {
            feedback.textContent = 'Congratulations! You guessed the number!';
            restartBtn.disabled = false;
        } else if (userGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
        } else {
            feedback.textContent = 'Too high! Try again.';
        }
    }
    
    function restartGame() {
        guessInput.value = '';
        startGame();
    }
    
    guessBtn.addEventListener('click', checkGuess);
    restartBtn.addEventListener('click', restartGame);
    
    // Start the game on page load
    startGame();
});
