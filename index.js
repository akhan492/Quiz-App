//arsalan khan code of quizApp
const quizDB = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    a: "<script>",
    b: "<javascript>",
    c: "<js>",
    d: "<scripting>",
    answer: "ans1",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script href='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script src='xxx.js'>",
    d: "<script file='xxx.js'>",
    answer: "ans3",
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    answer: "ans2",
  },
  {
    question: "HTML stand  for",
    a: "hyper text markup language",
    b: "hyper text mixed language",
    c: "hyper extensilr language",
    d: "Scripting Language",
    answer: "ans1",
  },
];
const question = document.querySelector(".questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
// console.log(showScore);
// console.log(answers);

let quetionCout = 0;
let score = 0;
const loadQuestions = () => {
  let questionList = quizDB[quetionCout];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestions();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((currentAnsElem) => {
    if (currentAnsElem.checked) {
      answer = currentAnsElem.id;
      // console.log(answer);
    }
  });
  return answer;
};
const unCheckedAll = () => {
  answers.forEach((curElem) => {
    curElem.checked = false;
  });
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quizDB[quetionCout].answer) {
    score++;
  }

  quetionCout++;
  unCheckedAll();
  if (quetionCout < quizDB.length) {
    loadQuestions();
  } else {
    showScore.innerHTML = `<h1>your total score ✌️ ${score} / ${quizDB.length}</h1>
    <button class="btn" onclick="location.reload()"> play again </button>`;
    showScore.classList.remove("showArea");
  }
});
