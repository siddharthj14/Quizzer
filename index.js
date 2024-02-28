const addQuestionButton = document.getElementById("add-question");
const questionsContainer = document.getElementById("questions-container");
let qCounter = 2;

addQuestionButton.addEventListener("click", function () {
  const newQuestionDiv = document.createElement("div");
  newQuestionDiv.classList.add("question");
  newQuestionDiv.innerHTML = `
        <label for="question${qCounter}">Question ${qCounter}:</label>
        <input type="text" id="question${qCounter}">
        <label for="answer${qCounter}">Options:</label>
        <input type="radio" class="correct-answer" name="correct_answer_${qCounter}">
        <input type="text" class="answer" name="answers_${qCounter}" id="answer${qCounter}_1" placeholder="Option 1">
        <input type="radio" class="correct-answer" name="correct_answer_${qCounter}">
        <input type="text" class="answer" name="answers_${qCounter}" id="answer${qCounter}_2" placeholder="Option 2">
        <input type="radio" class="correct-answer" name="correct_answer_${qCounter}">
        <input type="text" class="answer" name="answers_${qCounter}" id="answer${qCounter}_2" placeholder="Option 3">
        <input type="radio" class="correct-answer" name="correct_answer_${qCounter}">
        <input type="text" class="answer" name="answers_${qCounter}" id="answer${qCounter}_2" placeholder="Option 4">
    `;
  questionsContainer.appendChild(newQuestionDiv);
  qCounter++;
});

const submitQuizButton = document.getElementById("submit-quiz");
submitQuizButton.addEventListener("click", function () {
  const quizTitle = document.getElementById("quiz-title").value;
  const questions = document.querySelectorAll(".question");
  const quizData = {
    title: quizTitle,
    questions: [],
  };
  questions.forEach((question, index) => {
    const questionText = question.querySelector('input[type="text"]').value;
    const answers = question.querySelectorAll(".answer");
    const correctAnswerRadios = question.querySelectorAll(".correct-answer");
    const answerOptions = [];
    let correctAnswerIndex = -1;
    answers.forEach((answer, index) => {
      answerOptions.push(answer.value);
      if (correctAnswerRadios[index].checked) {
        correctAnswerIndex = index;
      }
    });
    quizData.questions.push({
      question: questionText,
      answers: answerOptions,
      correctAnswer: correctAnswerIndex,
    });
  });
  console.log(quizData);
});
