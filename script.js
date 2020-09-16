
var questions = [
    { 
    title: "Question 1",
    ques: "Question 1 text",
    answers: {
        ans1: "a",
        ans2: "b",
        ans3: "c",
        ans4: "d" },
    correctAnswer: "c",
    },
    

    {
    title: "Question 2",
    ques: "Question 2 text",
    answers: {
        ans1: "a",
        ans2: "b",
        ans3: "c",
        ans4: "d"},
    correctAnswer: "a",
    },

    {
     title: "Question 3",
        ques: "Question 3 text",
        answers: {
            ans1: "a",
            ans2: "b",
            ans3: "c",
            ans4: "d"},
        correctAnswer: "d",
        }, 

    {
        title: "Question 4",
        ques: "Question 4 text",
        answers: {
            ans1: "a",
            ans2: "b",
            ans3: "c",
            ans4: "d"},
        correctAnswer: "b",
            },

        {
        title: "Question 5",
        ques: "Question 5 text",
        answers: {
            ans1: "a",
            ans2: "b",
            ans3: "c",
            ans4: "d"},
        correctAnswer: "c",
                    }
]      
  
document.getElementById("headText").textContent = "Welcome to The Quiz"
document.getElementById("description").textContent = "placeholder text slkdjgsdgsdkj"
var titleEl = document.getElementById("headText");
var textEl = document.getElementById("description")
var startEl = document.getElementById("start")

var scores = document.createElement("a")
scores.setAttribute("href", "viewscores.html");
topbar.appendChild(scores)

var timerEl = document.getElementById("countdown")
timerEl.textContent = " ";
topbar.appendChild(timerEl)

var questionCounter = 0;
var timeLeft = 75;

startEl.addEventListener("click", function() {
    scores.textContent = "View Scores";
    countdown();
    quiz();
})

function countdown() {
    startEl.style.display = "none";
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0 || questionCounter >= questions.length) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

var description = document.getElementById("description")

description.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        console.log(event.target.textContent);
        if (event.target.textContent === questions[questionCounter].correctAnswer) {
            console.log("correctAnswer")
            questionCounter++;
            quiz();
        } else {
            console.log("wrong answer")
            timeLeft = timeLeft - 15;
            questionCounter++;
            quiz();
        }
    }
}
)

 
function quiz() {
   if (questionCounter >= questions.length) {
        timerEl.textContent = " ";
        titleEl.textContent = "all done";
        textEl.textContent = "Your score is " + timeLeft;
        localStorage.setItem("score", timeLeft)
        
    } else {
         titleEl.textContent = questions[questionCounter].title;
        textEl.textContent = questions[questionCounter].ques;
        var btn1 = document.createElement("button");
        btn1.textContent = questions[questionCounter].answers.ans1;
        description.appendChild(btn1);
        var btn2 = document.createElement("button");
        btn2.textContent = questions[questionCounter].answers.ans2;
        description.appendChild(btn2);
        var btn3 = document.createElement("button");
        btn3.textContent = questions[questionCounter].answers.ans3;
        description.appendChild(btn3);
        var btn4 = document.createElement("button");
        btn4.textContent = questions[questionCounter].answers.ans4;
        description.appendChild(btn4);
    }

    
}

if (questionCounter >= questions.length) {
    var initialsFor = document.createElement("form");
    initialsFor.setAttribute("method", "POST")
    

    var initials = document.createElement("input");
    initials.setAttribute("type", "text")


    initialsFor.appendChild(initials)
    description.appendChild(initialsFor)
}



