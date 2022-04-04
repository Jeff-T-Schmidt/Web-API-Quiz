var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('questions-container')
var questionElement = document.getElementById('questions')
var answerButtonElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionsIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0

    console.log("chosenquestions:", shuffledQuestions)

    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.setAttribute("data-status", answer.correct)
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
        // console.log(typeof questions)
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(event){
    var element = event.target  
    if(element.matches(".btn")){
    var correct = element.dataset.correct
    // console.log(correct)
    // console.log(questions[currentQuestionsIndex].answers[correctAnswer])
    // if(correct == questions[currentQuestionsIndex].correct){}
    }

    
    // setStatusClass(document.body.correct, correct)
    // Array.from(answerButtonElement.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
        if(shuffledQuestions.length > currentQuestionsIndex +1) {
    nextButton.classList.remove('hide')
    }else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     }else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

const questions = [
    {
        question: "Is Joe the best UW Boot Camp Instructor?",
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false},
            { text: 'Maybe', correct: false},
            { text: 'Who?', correct: false}
        ],
        correctAnswer: 0
    },
    {
        question: "What does the acronym 'HTML' stand for??",
        answers: [
            { text: 'HyperText Markup Language', correct: true},
            { text: 'Markup Language HyperText', correct: false},
            { text: 'Language HyperText Markup', correct: false},
            { text: 'Yes?', correct: false}
        ],
        correctAnswer: 0
    },
    {
        question: "What time does the UW Boot Camp start?",
        answers: [
            { text: '10:00am', correct: true},
            { text: '9:00am', correct: false},
            { text: '11:00am', correct: false},
            { text: 'Whenever', correct: false}
        ],
        correctAnswer: 0
    },
    {
        question: "When does afternoon office hours usually begin?",
        answers: [
            { text: '2:30pm', correct: true},
            { text: '3:00pm', correct: false},
            { text: '1:00pm', correct: false},
            { text: 'What are office hours?', correct: false}
        ],
        correctAnswer: 0
    },
    {
        question: "Which TA recently got a new job?",
        answers: [
            { text: 'Sam', correct: true},
            { text: 'Lindsay', correct: false},
            { text: 'Evan', correct: false},
            { text: 'TA #4', correct: false}
        ],
        correctAnswer: 0
    },
    {
        question: "Is web development fun?",
        answers: [
            { text: 'Yes-ish', correct: true},
            { text: 'No!', correct: false},
            { text: 'Getting there', correct: false},
            { text: 'Help...', correct: false}
        ],
        correctAnswer: 0
    }
    
]


//score

//timer - in the checkWin function, "clearInenterval(timer);" to stop the clock

//show results
//save local storage


//if incorrect, subtract time for countdown timer
createRadioButtonFromArray(itemAnswers[currentQuestion].choices);

//Countdown timer setup to lose [timePara]
var timer;
var timeLeft =10;

function startTimer() {
    timer = setInterval(function(){
        console.log(timeLeft);
        timeLeft--;
        timePara.textContent=timeLeft
        if(timeLeft<=0){
                clearInterval(timer);
                console.log("Lost!")
        }
    },1000)
}
startTimer();
//in the checkWin function, "clearInenterval(timer);" to stop the clock

//start game function


