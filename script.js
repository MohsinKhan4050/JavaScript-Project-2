const questionEl = document.querySelector("#question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const scoreEl = document.querySelector("#score");


let num1, num2, correctAns;

let score = 0;
scoreEl.innerHTML = `Score: ${score}`

function generateQuestion() {
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    questionEl.innerHTML = `What is ${num1} &times ${num2}`;
    correctAns = num1 * num2;
}
generateQuestion();

function submitForm(e) {
    e.preventDefault();

    userAns = Number(inputEl.value);

    if (userAns === correctAns) {
        score++;
        scoreEl.innerHTML = `Score: ${score}`;
        console.log(score)
        inputEl.style.borderColor = "#ddd";
    }

    else {
        score = Math.max(0, score - 1);
        scoreEl.innerHTML = `Score: ${score}`;
        inputEl.style.borderColor = "red";

    }

    generateQuestion();
    inputEl.value = "";
}
formEl.addEventListener("submit", submitForm)

































