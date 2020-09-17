// Array of objects containing the questions, answers, and correct answer that will be on the quiz.
var questions = [
    { 
    title: "Question 1",
    ques: "What was the most recent Pokémon type introduced into the games?",
    answers: {
        ans1: "a. Dark",
        ans2: "b. Steel",
        ans3: "c. Ghost",
        ans4: "d. Fairy" },
    correctAnswer: "d. Fairy",
    },
    

    {
    title: "Question 2",
    ques: "What are the twin Legendary Pokémon that represent truth and ideals?",
    answers: {
        ans1: "a. Latias and Latios",
        ans2: "b. Mewtwo and Mew",
        ans3: "c. Reshiram and Zekrom",
        ans4: "d. Lugia and Ho-oh"},
    correctAnswer: "c. Reshiram and Zekrom",
    },

    {
     title: "Question 3",
        ques: "Which of these is NOT an evolution of Eevee?",
        answers: {
            ans1: "a. Jolteon",
            ans2: "b. Finneon",
            ans3: "c. Sylveon",
            ans4: "d. Umbreon"},
        correctAnswer: "b. Finneon",
        }, 

    {
        title: "Question 4",
        ques: "Which of these Pokémon evolves with a Thunder Stone?",
        answers: {
            ans1: "a. Zapdos",
            ans2: "b. Plusle",
            ans3: "c. Pikachu",
            ans4: "d. Shinx"},
        correctAnswer: "c. Pikachu",
            },

    {
        title: "Question 5",
        ques: "What is the trio of Starter Pokémon from the Hoenn Region?",
        answers: {
            ans1: "a. Charmander, Squirtle, and Bulbasaur",
            ans2: "b. Piplup, Chimchar, and Turtwig",
            ans3: "c. Chikorita, Cyndaquil, and Totodile",
            ans4: "d. Mudkip, Treecko, and Torchic"},
        correctAnswer: "d. Mudkip, Treecko, and Torchic",
                    },

    {
        title: "Question 6",
        ques: "What Pokémon has been banned from appearing in the anime?",
        answers: {
            ans1: "a. Porygon",
            ans2: "b. Jynx",
            ans3: "c. Arceus",
            ans4: "d. Salazzle"},
        correctAnswer: "a. Porygon",
    },

    {
        title: "Question 7",
        ques: "What type combination does not exist for any current Pokémon?",
        answers: {
            ans1: "a. Psychic/Fairy",
            ans2: "b. Rock/Ghost",
            ans3: "c. Fighting/Steel",
            ans4: "d. Dark/Electric"},
        correctAnswer: "b. Rock/Ghost",
    },

    {
        title: "Question 8",
        ques: "What Pokémon type is weak to itself?",
        answers: {
            ans1: "a. Ice",
            ans2: "b. Psychic",
            ans3: "c. Dragon",
            ans4: "d. Fighting"},
        correctAnswer: "c. Dragon",
    },

    {
        title: "Question 9",
        ques: "How many Pokémon currently exist?",
        answers: {
            ans1: "a. 893",
            ans2: "b. 876",
            ans3: "c. 904",
            ans4: "d. 882"},
        correctAnswer: "a. 893",
    },

    {
        title: "Question 10",
        ques: "What was the first Legendary Pokémon ever shown in the anime?",
        answers: {
            ans1: "a. Mewtwo",
            ans2: "b. Articuno",
            ans3: "c. Moltres",
            ans4: "d. Ho-oh"},
        correctAnswer: "d. Ho-oh",
    },
]      
  
//Variables on the starting screen
document.getElementById("headText").textContent = "Pokémon Trivia Quiz"
document.getElementById("description").innerHTML = "Welcome to the Pokémon Trivia Quiz!" + '<br>' + "Are you ready to test your Pokémon knowledge?" + '<br>' + "You will have 120 seconds to answer these trivia questions. If you answer one incorrectly, you will lose 15 seconds from the timer." + '<br>' + "Try to answer all the questions with as much time remaining as possible!"
document.querySelector("form").style.display = "none";

// Defining elements in the document and turning them into variables
var titleEl = document.getElementById("headText");
var description = document.getElementById("description")
var startEl = document.getElementById("start")
var topbar = document.querySelector("#topbar");
var form = document.querySelector("form")
var result = document.getElementById("result")
var playAgain = document.getElementById("again")
var scoreBtn = document.getElementById("score")

//Definition of the array of high scores that the users' initials and scores will be pushed into
var highScores = localStorage.getItem('scores');
if(highScores){
    highScores = JSON.parse(highScores);
} else {
    highScores = []
}

// Creates the link to viewing scores from topbar
var scoresLink = document.createElement("a")
topbar.appendChild(scoresLink)

// Creating the link to the visible timer
var timerEl = document.getElementById("countdown")
timerEl.textContent = " ";
topbar.appendChild(timerEl)

//Sets variables of questionCounter and timeLeft to 0
var questionCounter = 0;
var timeLeft = 120;

//Topbar, view scores button and play again button are originally hidden from view
topbar.style.display = "none";
playAgain.style.display = "none";
scoreBtn.style.display = "none";

//Function that happens when the start button is clicked: topbar is visible, countdown function is called, quiz function is called
startEl.addEventListener("click", function() {
    topbar.style.display = "block";
    scoresLink.textContent = "View Scores";
    countdown();
    quiz();
})

// If the scores link on the topbar is clicked, you can view the scores
scoresLink.addEventListener("click", function() {
    viewScores();
})

// Starts the countdown from 120 seconds, time interval is cleared if the time left is less than or equal to 0
function countdown() {
    startEl.style.display = "none";
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft <= 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

// Function for clicking on the quiz's answer buttons; if the answer is correct, the user is notified through the result screen and the question counter increases. If the user is incorrect, 15 seconds are subtracted by the timer, the user is notified, and the question counter increases.
description.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        console.log(event.target.textContent);
        if (event.target.textContent === questions[questionCounter].correctAnswer) {
            console.log("correctAnswer");
            result.textContent= "Correct!";

            questionCounter++;
            quiz();
        }
        else {
            console.log("wrong answer")
            result.textContent= "Wrong..."
            timeLeft = timeLeft - 15;
            questionCounter++;
            quiz();
        }
    }
})
 
// Quiz function that creates the quiz buttons and displays the questions until the question counter reaches the end of the questions. Then it displays the user's score and the form that prompts users to submit their score. Their score is stored in local storage.
function quiz() {
   if (questionCounter >= questions.length || timeLeft <= 0) {
    timerEl.style.display = "none";
    titleEl.textContent = "You are all done!";
    result.style.display = "none";
    if (timeLeft <= 0) {
        timeLeft = 0;
        description.textContent = `You ran out of time...you can submit your initials, or try again!`;
        playAgain.style.display = "block";
    } else {
        description.textContent = `Your score is ${timeLeft}. Submit your initials and save your score!`};
        localStorage.setItem("score", timeLeft);
        document.querySelector("form").style.display = "block";
        
    } else {
        titleEl.textContent = questions[questionCounter].title;
        description.textContent = questions[questionCounter].ques;
        buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", "button-div")
        var btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn btn-success answer")
        btn1.textContent = questions[questionCounter].answers.ans1;
        buttonDiv.appendChild(btn1);
        var btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn btn-success answer")
        btn2.textContent = questions[questionCounter].answers.ans2;
        buttonDiv.appendChild(btn2);
        var btn3 = document.createElement("button");
        btn3.setAttribute("class", "btn btn-success answer")
        btn3.textContent = questions[questionCounter].answers.ans3;
        buttonDiv.appendChild(btn3);
        var btn4 = document.createElement("button");
        btn4.setAttribute("class", "btn btn-success answer")
        btn4.textContent = questions[questionCounter].answers.ans4;
        buttonDiv.appendChild(btn4);
        description.appendChild(buttonDiv);
    }
    
}

// When the form is submitted, the initials and the user's score are logged into local storage and they are notified that they submitted their scores. They have the option to view the high scores or to play again.
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var initialsInput = document.getElementById("form-input").value.trim();
    console.log(initialsInput);
    var user = {
        userInits: initialsInput,
        userScore: timeLeft
    };
    highScores.push(user);
    localStorage.setItem('scores', JSON.stringify(highScores))
    scores.textContent = "";
    document.querySelector("form").style.display = "none"
    titleEl.textContent = "Thank you for submitting!"
    description.textContent = " "
    playAgain.style.display = "block"
    scoreBtn.style.display = "block"
})

// Function for score button
scoreBtn.addEventListener ("click", function() {
    viewScores();
})  

// Function for play again button
playAgain.addEventListener("click", function() {
    location.reload();
})
  


//Function where the high scores are displayed in descending order
function viewScores() {
    titleEl.textContent= "High Scores!"
    document.querySelector("form").style.display = "none";
    result.style.display = "none";
    timerEl.style.display = "none";
    scoreBtn.style.display = "none";
    playAgain.style.display = "block";
    description.textContent= " ";
    var scoreboard = document.createElement("div");
    scoreboard.setAttribute = ("class", "scoreboard")
    for (i=0; i<highScores.length; i++) {
        var scoreDiv = document.createElement("div");
        scoreDiv.setAttribute = ("class", "scorediv");
        highScores.sort((a, b) => {
            return b.userScore - a.userScore
        });
        scoreDiv.textContent = (i+1) + ". " + highScores[i].userInits + " : " + highScores[i].userScore + " seconds left";
        scoreboard.appendChild(scoreDiv)
        }
        description.appendChild(scoreboard)
    
    }







