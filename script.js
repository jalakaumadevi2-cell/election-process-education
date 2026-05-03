// script.js

function checkAnswer(answer) {
    const result = document.getElementById("quizResult");

    if (answer === "correct") {
        result.textContent = "Correct! Votes are counted after voting.";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong answer. Try again!";
        result.style.color = "red";
    }
}