let point = 0;
let currentQuestionIndex = 0;
let username = " ";

// add questions here with whatever you wanna ask
let page2 = [{
            question: "Harry Potter is a _____?",
            choice: "Gangster",
            choice2: "Wizzard",
            choice3: "Regular guy",
            correctChoice: "2"
}, {
            question: "What does command console.log('hello world'); do?",
            choice: "hello world",
            choice2: "HELLOWORLD",
            choice3: "Hacks everyone's device",
            correctChoice: "1"
}, {
            question: "What is your name?",
            choice: `${personName}`,
            choice2: "Bob",
            choice3: "Cooler Bob",
            correctChoice: "1"
}, {
            question: "How many days does the month of January have?",
            choice: "15",
            choice2: "30",
            choice3: "31",
            correctChoice: "3"
}, {
            question: "What planet do we live on?",
            choice: "Jupiter",
            choice2: "Earth",
            choice3: "Saturn",
            correctChoice: "2"
},{
            question: "is this a quizz?",
            choice: "Yes",
            choice2: "No",
            choice3: "I don't know",
            correctChoice: "1"
        }, {
            question: "What is the first letter of the alphabet?",
            choice: "S",
            choice2: "Ö",
            choice3: "A",
            correctChoice: "3"
        }, {
        question: "In which month is christmas celebrated?",
            choice: "December",
            choice2: "July",
            choice3: "Christmasember",
            correctChoice: "1"
        }, {
        question: "Do you see the score system working at top right?",
            choice: "Yes",
            choice2: "No",
            choice3: "I'm legally blind.",
            correctChoice: "1"
        }, {
        question: "What is 4+2",
            choice: "2",
            choice2: "42",
            choice3: "6",
            correctChoice: "3"
        }];

// page 1 greets user.
document.addEventListener("DOMContentLoaded", function() {
        document.querySelector("button").addEventListener("click", personName);
    });

function personName(){
    username = document.getElementById("nameInput").value;
    if(username !== ""){
        alert(`Nice to meet you ${username}!`);
    } else {
        alert("Nice to meet you Human!");
        username = "Human";
    }
    page2[2].choice = username; //for question 3 cuz I decided to ask usernames name there lol so this is needed for that.
    showPage2();
};

// adding page 1 since the quizz restarts so I need to send user to here otherwise I could send them to page 2 by switching the function in resetquizz()
function showPage1(){
    point = 0;
    currentQuestionIndex = 0;

    // code below hides page 3 stuff otherwise its on page 1 overlapping other stuff lol.
    document.getElementById("page3").style.display = "none";
    document.getElementById("playerResult").style.display = "none";
    document.getElementById("questionText").style.display = "none";
    document.getElementById("playerScore").style.display = "none";
    document.getElementById("maxScore").style.display = "none";
    document.getElementById("pointsText").style.display = "none";


    document.getElementById("nameInput").style.display = "block"; //shows the name input on my masterpiece artwork hahaha
    document.querySelector("button").style.display = "block" // shows the button again so you can start the quizz.
    document.getElementById("pageImage").src= "./image/page1.png"; // the ./ basically tells it to go back one folder and I think 2 dots sends them back 2 folders.

}

// quizz starts and here it shows page 2.
function showPage2(){
    document.getElementById("nameInput").style.display="none";
    document.querySelector("button").style.display="none";
    document.getElementById("pageImage").src= "./image/page2.png";
    document.getElementById("page2").style.display = "block";
    loadQuestion(currentQuestionIndex);  //loads question for the quizz


    // THIS PART BASICALLY MAKES PAGE 2 STUFF VISIBLE SO DONT PUT THEM TO NONE OR WHEN YOU RETRY QUIZZ SOME OF THE STUFF WILL NOT BE THERE.
    document.getElementById("choice1").style.display="block"; 
    document.getElementById("choice2").style.display="block";
    document.getElementById("choice3").style.display="block";
    document.getElementById("currentQuestion").style.display="block";
    document.getElementById("questionText").style.display = "block";
    document.getElementById("playerScore").style.display = "block";
    document.getElementById("maxScore").style.display = "block";
    document.getElementById("pointsText").style.display = "block";

    

}

// shows end of quizz when you get the score so it shows different page depending on your score.
function showPage3(){
    document.getElementById("choice1").style.display="none"; //none will basically hide the items well in this case its the choice.
    document.getElementById("choice2").style.display="none";
    document.getElementById("choice3").style.display="none";
    document.getElementById("currentQuestion").style.display="none";
    document.getElementById("questionText").style.display = "none";
    
    document.getElementById("page3").style.display = "block"; //block will basically make the stuff visible. switch them around to test but make sure to be on right page to see changes.
    document.getElementById("playerResult").style.display = "block";


    document.getElementById("pageImage").src= scorePage();
    document.getElementById("pageImage").style.display = "block";

    document.getElementById("restart").style.display = "block";

    document.getElementById("restart").addEventListener("click", resetQuizz);
}

// restarts whole quizz.
function resetQuizz(){
    point = 0;
    currentQuestionIndex = 0;

    document.getElementById("playerScore").innerHTML = point;
    document.getElementById("currentQuestion").innerHTML = currentQuestionIndex + " /10"
    document.getElementById("questionText").style.display = "block"; //starts to show question again. I set it to none in showpage3 to make it go bye bye in page 3.

    showPage1();
}

// shows question number at top of the quizzzzzzz
function showQuestionNumber(){
    let currentQuestion = currentQuestionIndex + "/ 10"
    document.getElementById("currentQuestion").innerHTML = currentQuestion;
}

// loads question and
function loadQuestion(questionIndex){
    let question = page2[questionIndex];
    document.getElementById("questionText").innerText = question.question;
    document.getElementById("choice1").innerText = question.choice;
    document.getElementById("choice2").innerText = question.choice2;
    document.getElementById("choice3").innerText = question.choice3;

    //answer checker!!!!!!!!!!!!!!!!!!!!!
    document.getElementById("choice1").onclick = () => checkAnswer(1);
    document.getElementById("choice2").onclick = () => checkAnswer(2);
    document.getElementById("choice3").onclick = () => checkAnswer(3);    
}

// checks answers if they are correct or wrong.
function checkAnswer(choice){
    let correctChoice = page2[currentQuestionIndex].correctChoice; // this one it goes to the page2 and checks the correct answer or choice.

    if(choice == correctChoice){
        point++
        document.getElementById("playerScore").innerHTML = point;
    }

        currentQuestionIndex++;
        showQuestionNumber();

    if(currentQuestionIndex < page2.length){
        loadQuestion(currentQuestionIndex)
    }else if (currentQuestionIndex === page2.length){
        showPage3();
    }
    else{
            showScore();
};
};

// gives random image based on score.
function scorePage(){
    let score = point; 
    let imageUrl = "";

    if(score === 10){
        document.getElementById("playerScore").innerHTML == point;
        document.getElementById("playerResult").innerHTML = "You are the peak human with highest level of knowledge!";
       imageUrl = "./image/perfectScore.jpg";
    } 
    else if(score >= 6 && score <= 9){
        document.getElementById("playerScore").innerHTML == point;
        document.getElementById("playerResult").innerHTML = "Ahhh a challenger! You almost there! try again. You got this!";
        imageUrl = "./image/7To9.jpg"
    } 
    else if (score >= 4 && score <= 5){
        document.getElementById("playerScore").innerHTML == point;
        document.getElementById("playerResult").innerHTML = "You are okay I guess. You can use Google you know?";
        imageUrl = "./image/4To6.jpg"
    } else{
        document.getElementById("playerScore").innerHTML == point;
        document.getElementById("playerResult").innerHTML = "You lack wisdom. Go back and do it all over again when you smarter.";
        imageUrl = "./image/0To3.jpg"
        
    } 
    return imageUrl;
}