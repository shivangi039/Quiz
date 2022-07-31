const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a: "Hello to My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: Which of the following is not a programming language?",
        a: "TypeScript",
        b: "Python",
        c: "Anaconda",
        d: "Java",
        ans: "ans3"
    },

    {
        question: "Q3: Which of the below is the abbreviation of CSS ?",
        a: "Cascade sheets style",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "Coded Style Sheet",
        ans: "ans3"

    },

    {
        question: "Q4: Which of the following is a logical OR operator?",
        a: "&",
        b: "&&",
        c: "||",
        d: "None of the above",
        ans: "ans3"

    },

    {
        question: "Q5: How many heading tags are there in HTML5?",
        a: "2",
        b: "3",
        c: "5",
        d: "6",
        ans: "ans4"

    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const innercontainer = document.querySelector(".inner__div");

const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList =  quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log('checkedAnswer');

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;

    deselectAll();
    if(questionCount === quizDB.length-1){
        submit.innerText = 'Submit';
    }
    
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else {
        innercontainer.innerHTML = `
            <div id="showscore">
            <h3> You Scored ${score}/${quizDB.length} </h3>
            <button class = "btn" onClick="location.reload()">Play Again</button>
            </div>
        `;
        confetti({
            particleCount: 1000,
            spread: 200,
            zIndex : 1000,
        });
        // question.innerHTML = '';
        // showscore.classList.remove('scorearea');
    }
});