var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('questions-container')
var questionElement = document.getElementById('questions')
var answerButtonElement = document.getElementById('answer-buttons')
var timePara = document.querySelector('.timer')
var wins = localStorage.getItem("wins") || 0;
var losses = localStorage.getItem("losses") || 0;
// winsSpan.textContent = wins;
// lossesSpan.textContent = losses;

var shuffledQuestions, currentQuestionsIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

// var timer;
// var timeLeft =100;

// function startTimer() {
//     timer = setInterval(function(){
//         console.log(timeLeft);
//         timeLeft--;
//         timePara.textContent=timeLeft
//         if(timeLeft<=0){
//                 clearInterval(timer);
//                 console.log("Lost!")
//         }
//     },1000)
// }


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0

    console.log("chosenquestions:", shuffledQuestions)

    setNextQuestion()
    startTimer();
}

function setNextQuestion(){
    resetState()
    showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer
        button.setAttribute("data-status", answer.correct)
        button.classList.add("btn")
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
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
    console.log(event.target.textContent)
    }
        if(shuffledQuestions.length > currentQuestionsIndex +1) {
    nextButton.classList.remove('hide')
    }else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}
// function checkWin(answer) {
//    var corrrectAnswer = event.target.textContent 
//     if (answers === correctAnswer){
//                                             //HELP!!
//     // isPlaying = false;
//     //clearInterval(timer);
//     return true;
//   } else {
//     return false;
//   }
// }


// console.log(checkWin)

const questions = [
    {
        question: "Is Joe the best UW Boot Camp Instructor?",
        answers: [ 'Yes', 'No', 'Maybe', 'Who?' ],
        correctAnswer: 'Yes'
    },
    {
        question: "What does the acronym 'HTML' stand for??",
        answers: ['HyperText Markup Language', 'Markup Language HyperText', 'Language HyperText Markup', 'TextHyper Language Markup'],
        correctAnswer: 'Yes?'
    },
    {
        question: "What time does the UW Boot Camp start?",
        answers: ['10:00am','9:00am', '11:00am', 'Whenever',],
        correctAnswer: '10:00am'
    },
    {
        question: "When does afternoon office hours usually begin?",
        answers: ['2:30pm','3:00pm', '1:00pm', 'What are office hours?',],
        correctAnswer: '2:30pm'
    },
    {
        question: "Which TA recently got a new job?",
        answers: ['Sam','Lindsay','Evan','TA #4',],
        correctAnswer: "Sam"
    },
    {
        question: "Is web development fun?",
        answers: ['Yes-ish','No!','Getting there','Help...',],
        correctAnswer: 'Yes-ish'
    }
    
]

//check (event.target.textContent) string to see if it equals the correctAnswer string (answer ===correctAnswer)
//score (btn) header that changes in real time.

//timer - in the checkWin function, "clearInenterval(timer);" to stop the clock

//show results
//save local storage


//if incorrect, subtract time for countdown timer


//Countdown timer setup to lose [timePara]

//start game function


