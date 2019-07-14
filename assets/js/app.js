
// an object containing arrays of questions and answers
let trivia = {

    a: ["This is sample question one", "This is sample question one, answer one", "This is sample question one, answer two", "This is sample question one, answer three", "This is sample question one, answer four"],
    b: ["This is sample question two", "This is sample question two, answer one", "This is sample question two, answer two", "This is sample question two, answer three", "This is sample question two, answer four"],
    c: ["This is sample question three", "This is sample question three, answer one", "This is sample question three, answer two", "This is sample question three, answer three", "This is sample question three, answer four"],
    d: ["Question four", "Answer one", "Answer two", "Answer three", "Answer four"]
};

let answers = ['1', '2', '3', '4']

/* NOTES ...
 - How to know when the answer is the correct one???
 - How to display other questions
 - What to do after last item is displayed

 1 . display question / answers and start timer
    a. loop throung array from object, creating divs for each item
    b. begin setTimeout (function will display times up screen)
    c. clear the timeOut if correct or incorrect answer
    
 2. when any answer or timer is finished, display finish screen
    a. if wrong answer, run the same function, but NOW
    b. if right answer, run a "you won" function
    c. 

 3. display next question/ answers
*/


$(document).ready(function() {

//============VARIABLESVILLE==============\\

    let timeoutID;
    let gameOn = false;
    let index = 0;
    let keys = Object.keys(trivia);

//==============FUNCTIONSVILLE==============\\

    // function chooseQuestion () { }

    // render questions and answers to the screen
    function showQandA (arr) {
        $("#answer").empty();
        $("#question").text(arr[0]);
        for (let i = 1; i <= 4; i++) {
            $("#answer").append(arr[i] + "<br>");
        }
        timeoutID = setTimeout( () => outOfTime(), 3000);
        gameOn = true;
        
    }

    // clear answers and set variables for next turn
    function clearQandA () {
        index++;
        gameOn = false;
        $("#answer").empty();
        timeoutID = setTimeout( () => showQandA(trivia[keys[index]]), 3000);
    }

    // if out of time: render "times up"
    function outOfTime () {
        clearQandA();
        $("#question").text("TIMES UP");
    }

    // if right answer: clear timer and render win msg
    function youWin () {
        clearTimeout(timeoutID);
        clearQandA();
        $("#question").text("YOU ARE CORRECT!");
    }

    // if wrong answer: clear timer, render msg
    function wrongAnswer () {
        clearTimeout(timeoutID);
        clearQandA();
        $("#question").text("WRONG ANSWER");
    }


//===========EVENTSVILLE===========\\
    
    $(document).on("keypress", (e) => {

        // when "spacebar" presed 
        if (e.which === 32 && gameOn === false) {
            showQandA(trivia[keys[index]]);
            
        }

        // when keys 1 - 4 are pressed and questions and answers are on screen
        else if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' && gameOn === true) {

            // if key pressed is right / wrong, show corresponsding msg
            if (e.key == answers[index]) {
                console.log("success");
                youWin();
            } else {
                wrongAnswer();
            }
        }
    });
});

