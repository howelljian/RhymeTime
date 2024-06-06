let currentPlayer = 'player1'; // Set initial current player
let player1Words = []; // Array to store words submitted by Player 1
let player2Words = []; // Array to store words submitted by Player 2

function startGame() {
    window.location.href = '/game';
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'; // Switch current player
}

function submitWord(player) {
    // Disable the submit button for the inactive player
    const inactivePlayer = player === 'player1' ? 'player2' : 'player1';
    document.getElementById(`inputWord${inactivePlayer === 'player1' ? '1' : '2'}`).disabled = true;

    const inputWord = document.getElementById(`inputWord${player === 'player1' ? '1' : '2'}`).value.trim().toLowerCase();
    const message = document.getElementById(`message${player === 'player1' ? '1' : '2'}`);
    const wordArray = player === 'player1' ? player1Words : player2Words;

    if (inputWord === '') {
        message.textContent = 'Please enter a word!';
        return;
    }

    // Store the submitted word
    wordArray.push(inputWord);

    // Display all submitted words with consistent font size
    const maxWordLength = Math.max(...player1Words.concat(player2Words).map(word => word.length));
    message.innerHTML = wordArray.map(word => `<span style="font-size: ${(15 - maxWordLength) * 2}px;">${word}</span>`).join('<br>');

    // Enable the submit button for the other player
    document.getElementById(`inputWord${inactivePlayer === 'player1' ? '1' : '2'}`).disabled = false;

    // Clear the current input field
    document.getElementById(`inputWord${player === 'player1' ? '1' : '2'}`).value = '';

    // Switch current player
    switchPlayer();
}

function reset() {
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message2").innerHTML = "";
    document.getElementById("inputWord").value = "";
    document.getElementById("inputWord1").value = "";
    document.getElementById("inputWord2").value = "";
    player1Words = [];
    player2Words = [];
}
