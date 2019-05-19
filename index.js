let score = 0;
let questionIndex = 0;

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
    let newSection = `<h2 class="title">${QUESTIONS[questionIndex].question}</h2>
        <form>
            <input type="radio" class="choice" name="choice" value="${QUESTIONS[questionIndex].answers[0]}" required>${QUESTIONS[questionIndex].answers[0]}<br>
            <input type="radio" class="choice" name="choice" required>${QUESTIONS[questionIndex].answers[1]}<br>
            <input type="radio" class="choice" name="choice" required>${QUESTIONS[questionIndex].answers[2]}<br>
            <input type="radio" class="choice" name="choice" required> ${QUESTIONS[questionIndex].answers[3]}<br>
            <button id="submitIt">Submit!</button>
        </form>`;
    $('.question').append(newSection);
    console.log('`renderQuestion` ran');
    handleSubmit();
    
};

function handleSubmit() {
    // function to handle all functions when the "submit answer" button is clicked
    $('#submitIt').click(function(event) {
        event.preventDefault();
        handleAnswer();
        $(".question").remove();
        hanldeQuestNav(); // May want to move
        
    });    
    console.log('`handleSubmit` ran');
}

function handleAnswer() {
    // this function is responsible for deciding if the selected answer value is equal to the correct answer. 
    let selectedAnswer = $('input[name="choice"]:checked').val();
    console.log(selectedAnswer);
    if (selectedAnswer === QUESTIONS[questionIndex].correct){
        handleCorrect();
    } else {
        handleWrong();
    }
    console.log('`handleAnswer` ran');
}

function hanldeScore() {
    // function responsible for updating the score each time a correct answer is selected.
    console.log('`handleScore` ran');
}

function hanldeQuestNav() {
    // function responsible for updating what question number the user is on. 
    questionIndex++;
    $('#questNumb').text(questionIndex);
    console.log('`handleQuestNav` ran and questionIndex is equal to ' + questionIndex);

    
}

function handleCorrect() {
    // function responsible for showing the user selected the correct answer.
    score++;
    $('#score').text(score);
    displayCorrect();
    console.log('`handleCorrect` ran and the score is now ' + score);

}

function handleWrong() {
    // function responsible for showing the user they selected the wrong anser.
    let wrongDisplay = `<section class="subContainer">
    <h2 class="title">Sadness... A failure. But you must go on!!</h2>
    <button id="next">Next!</button>
    </section>
    <h3>The correct answer was:</h3>
    <h4>${QUESTIONS[questionIndex].correct}<h4>`;
    $('.container').append(wrongDisplay);
    console.log('`handleWrong` ran');
    
}

function displayCorrect(){
    // function displays the correct answer if the user picked the wrong answer. 
    let correctDisplay = `<section class="subContainer">
    <h2 class="title">Congratulations! You've gained a heart for your wisdom!</h2>
    <button id="next">Next!</button>
    </section>`;
    $('.container').append(correctDisplay);
}

function handleNext(){
    // function responsible for when user clicks "next" button, will call hanldeQuestNav() to update questionIndex and re-call the question generator. 
    $('#next').click(function(event){
        event.preventDefault();
        $('.subContainer').remove();
        hanldeQuestNav();
        renderQuestion();
    });

    console.log('`handleNext` ran');
}


function hanldeRestart() {
    // function to handle when quiz is over and user wants to click button to restart the quiz. 
}



function allMother() {
    // function stores all other function calls.
    handleBegin();
    handleNext();
}

allMother();