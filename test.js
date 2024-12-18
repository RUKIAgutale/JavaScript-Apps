// Questions and answers
const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What color is the sky on a clear day?", answer: "Blue" }
];

// Start the test
function startTest() {
    let score = 0;

    // Loop through the questions
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = prompt(questions[i].question);

        if (userAnswer !== null && userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
            score++;
        }
    }

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}
