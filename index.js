// $('h1').html('Test!');


function renderSection() {
    // This function will be responsible for rendering the displayed "section" in the DOM.
    console.log('`renderSection` ran');
};

function handleBegin() {
    // function responsible for when user clicks begin button to start the quiz.
    console.log('`handleBegin` ran');
};

function hanldeScore() {
    // function responsible for updating the score each time a correct answer is selected.
    console.log('`handleScore` ran');
}

function hanldeQuestNav() {
    // function responsible for updating what question number the user is on. 
    console.log('`handleQuestNav` ran');
}

function handleCorrect() {
    // function responsible for showing the user selected the correct answer.
    console.log('`handleCorrect` ran');
}

function handleWrong() {
    // function responsible for showing the user they selected the wrong anser.
    console.log('`handleWrong` ran');
}

function handleSubmit() {
    // function to handle all functions when the "submit answer" button is clicked
}

function hanldeRestart() {
    // function to handle when quiz is over and user wants to click button to restart the quiz. 
}



function allMother() {
    // function stores all other function calls.
    renderSection();
    handleBegin();
}

allMother();