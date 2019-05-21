let score = 0;
let questionIndex = 0;
let questionDisplay = 1;


function handleBegin() {
    // responsible for hiding the "intro" class section when the "begin" button is clicked. 
    $("#begin").click(function(event) {
        event.preventDefault();
        $(".intro").remove();
        $("#questNumb").text(1);
        console.log('`handleBegin` ran');
        renderQuestion();
    });
}

function renderQuestion() {
    // This function will be responsible for rendering the question and adding it to the "question" class section
    if (questionIndex < QUESTIONS.length) {
        let newSection = `<section class="question">
        <h2 class="title">${QUESTIONS[questionIndex].question}</h2>
        <form>
            <input type="radio" class="choice" name="choice" value="${QUESTIONS[questionIndex].answers[0]}" required>${QUESTIONS[questionIndex].answers[0]}<br>
            <input type="radio" class="choice" name="choice" value="${QUESTIONS[questionIndex].answers[1]}" required>${QUESTIONS[questionIndex].answers[1]}<br>
            <input type="radio" class="choice" name="choice" value="${QUESTIONS[questionIndex].answers[2]}"  required>${QUESTIONS[questionIndex].answers[2]}<br>
            <input type="radio" class="choice" name="choice" value="${QUESTIONS[questionIndex].answers[3]}"  required> ${QUESTIONS[questionIndex].answers[3]}<br>
            <button id="submitIt">Submit!</button>
        </form>
    </section>`;
    $('.container').append(newSection);
    console.log('`renderQuestion` ran and created a new question.');
    handleSubmit();
    displayChicken()
    } else {
        console.log('`renderQuestion` rand and there were no more questions. Finishing quiz...');
        handleFinish();
    }
    
    
};

function handleSubmit() {
    // function to handle all functions when the "submit answer" button is clicked
    $('#submitIt').click(function(event) {
        event.preventDefault();
        console.log('`handleSubmit` ran');
        handleAnswer();
        $('.question').remove();
        
    });    
   
}

function handleAnswer() {
    // this function is responsible for deciding if the selected answer value is equal to the correct answer. 
    let selectedAnswer = $('input[name="choice"]:checked').val();
    console.log('selectedAnswer is ' + selectedAnswer);
    if (selectedAnswer === QUESTIONS[questionIndex].correct){
        console.log('A matching answer was found with the value of ' + selectedAnswer);
        console.log('`handleAnswer` ran and the answer was correct!');
        handleCorrect();
    } else {
        console.log('`handleAnswer` ran and the answer was wrong!');
        handleWrong();
    }
}

function hanldeQuestNav() {
    // function responsible for updating what question number the user is on. 
    questionIndex++;
    questionDisplay++;
    console.log(questionDisplay);
    $('#questNumb').text(questionDisplay);
    console.log('`handleQuestNav` ran and questionIndex is equal to ' + questionIndex);

    
}

function handleCorrect() {
    // function responsible for showing the user selected the correct answer.
    score++;
    $('#score').text(score);
    console.log('`handleCorrect` ran and the score is now ' + score);
    displayCorrect();
    

}

function handleWrong() {
    // function responsible for showing the user they selected the wrong anser.
    console.log('`handleWrong` ran');
    displayWrong();
    handleNext();
}

function displayWrong() {
    let wrongDisplay = `<section class="subContainer">
    <h2 class="title">Sadness... A failure. But you must go on!!</h2>
    <img class="fail" src="images/heyListen.jpg">
    <button id="next">Next!</button>
    <h3>The correct answer was:</h3>
    <h4>${QUESTIONS[questionIndex].correct}<h4>
    </section>`;
    
    $('.container').append(wrongDisplay);
    console.log('`displayWrong` ran and is showing the correct answer.');
}


function displayCorrect(){
    // function displays the correct answer if the user picked the correct answer. 
    let correctDisplay = `<section class="subContainer">
    <h2 class="title">Congratulations! You've gained a heart for your wisdom!</h2>
    <img class="plusHeart" src="images/linkZelda1.gif">
    <button id="next">Next!</button>
    </section>`;
    $('.container').append(correctDisplay);
    console.log('`displayCorrect` ran');
    handleNext();
}

function handleNext(){
    // function responsible for when user clicks "next" button, will call hanldeQuestNav() to update questionIndex and re-call the question generator. 
    $('#next').click(function(event){
        event.preventDefault();
        hanldeQuestNav();
        $('.subContainer').remove();
        removeSubContainer();
        renderQuestion();
        
        console.log('`handleNext` ran');
    });

}

function removeSubContainer() {
    // responsible for removing any element with a class of subContainer
    $('.subContainer').remove();
    console.log('`removeSubContainer` ran');
}

function handleFinish() {
    // function hanldes when there are no more questions in the QUESTIONS array.
    if (score === 10) {
        perfectScore();
    } else if (score > 7) {
        betterScore();
    } else if (score > 3) {
        normScore();
    } else {
        badScore();
    }
}

function hanldeRestart() {
    // function to handle when quiz is over and user wants to click button to restart the quiz. 
    $('#restart').click(function(event){
        event.preventDefault();
        removeSubContainer();
        score = 0;
        questionIndex = 0;
        questionDisplay = 1;
        $('#score').text(score);
        $('#questNumb').text(0);
        console.log('restart button pressed, score and questionIndex to 0, and questionDisplay reset to 1.');
        let introSection = `<section class="subContainer intro">
        <h2 class="title">Test your Zelda OoT knowledge of the legend here!</h2>
        <img src="images/link2.gif" class="plusHeart">
        <button id="begin">Begin!</button>
        </section>
        <section class="question subContainer"></section>`;
        $('.container').append(introSection);
        console.log('`handleRestart` has run and re-inserted the intro content with the begin button. Ready to play!');
        handleBegin();

    })
}

function displayChicken() {
    // Responsible for adding the chicken image in the last question.
    if (questionIndex === 9) {
        let imageElement = `<br><img class="chicken" src="images/chicken.gif">`;
        $('.title').append(imageElement);
        console.log("`displayChicken` ran and should have added a chicken.gif on the last question.");
    }
   
}

function perfectScore() {
    // Responsible for displaying screen for perfect score
    let betterFinish = `<section class="subContainer">
    <h2 class="title">You earned the Triforce! Congratulations on your pefect score! You have earned ${score} hearts!</h2>
    <br><img class="perfect" src="images/triforce.gif">
    <button id="restart">Restart!</button>
    </section>`;
    $('.container').append(betterFinish);
    $('#questNumb').text(QUESTIONS.length); // Should prevent from displaying more questions than there are. 
    console.log('`perfectScore` ran and is now showing the final score.');
    hanldeRestart();

}


function betterScore() {
    // Responsible for displaying screen for better score
    let betterFinish = `<section class="subContainer">
    <h2 class="title">You're a master of your Zelda desitny! You have finished your quest! You have earned ${score} hearts!</h2>
    <br><img class="tryTheForce" src="images/link2.gif">
    <button id="restart">Restart!</button>
    </section>`;
    $('.container').append(betterFinish);
    $('#questNumb').text(QUESTIONS.length); // Should prevent from displaying more questions than there are. 
    console.log('`betterScore` ran and is now showing the final score.');
    hanldeRestart();
}

function normScore() {
    // Responsible for display a normal reward screen for scores 4-7
    let normFinish = `<section class="subContainer">
    <h2 class="title">Congratulations! You have finished your quest! You have earned ${score} hearts!</h2>
    <br><img class="tryTheForce" src="images/.jpg">
    <button id="restart">Restart!</button>
    </section>`;
    $('.container').append(normFinish);
    $('#questNumb').text(QUESTIONS.length); // Should prevent from displaying more questions than there are. 
    console.log('`normScore` ran and is now showing the final score.');
    hanldeRestart();
}

function badScore() {
// Responsible for displaying a not so great screen with score of 3 or lower
let betterFinish = `<section class="subContainer">
    <h2 class="title">Sadly, you lack enough hearts to defeat the boss! Alas, you earned ${score} hearts.</h2>
    <br><img class="tryTheForce" src="images/tryTheForce.jpg">
    <button id="restart">Restart!</button>
    </section>`;
    $('.container').append(betterFinish);
    $('#questNumb').text(QUESTIONS.length); // Should prevent from displaying more questions than there are. 
    console.log('`badScore` ran and is now showing the final score.');
    hanldeRestart();
}

function allMother() {
    // function stores all other function calls.
    handleBegin();
}

allMother();