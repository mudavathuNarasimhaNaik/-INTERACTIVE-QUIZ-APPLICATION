const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "What is 5 + 3?", options: ["5", "8", "12", "15"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct: 2 }
];

let currentQuestionIndex = 0;
let selectedOptions = {};

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    
    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const isChecked = selectedOptions[currentQuestionIndex] === index ? "checked" : "";
        optionsContainer.innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="quizOption" id="option${index}" value="${index}" ${isChecked} onclick="selectOption(${index})">
                <label class="form-check-label" for="option${index}">
                    ${option}
                </label>
            </div>`;
    });
}

function selectOption(optionIndex) {
    selectedOptions[currentQuestionIndex] = optionIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

window.onload = loadQuestion;
