
// an object containing arrays of questions and answers
let trivia = {

    a: ["In this film's story, America is plagued by crime and overcrowded prisons. So, citizens are allowed to act out their murderous impulses for 12 hours once a year ?", "Scream", "The Purge", "The Devil's Rejects", "Hostel"],
    b: ["What was Dorothy's last name in The Wizard of OZ?", "Doll", "Guild", "Wolfe", "Gale"],
    c: ["Which movie is famous for the line: 'Say hello to my little friend' ?", "Scarface", "The Godfather", "American Gangster", "Bugbsy"],
    d: ["Which transformer did Sam Witwicky drive and consider as his car in the 2007 Transformers movie ?", "Jazz", "Optimus Prime", "Ratchet", "Bumblebee"],
    e: ["In what year was the first Friday the 13th released ?", "1980", "1975", "1985", "1990"],
    f: ["In this Nicolas Cage movie he can see two minutes into his future ?", "Season of the Witch", "Knowing", "Next", "The Wicker Man"],
    g: ["This actress plays Rosalie Hale in the Twilight Saga ?", "Nikki Reed", "Anna Kendrick", "Kristen Stewart", "Ashley Greene"],
    h: ["What 2003 movie did Laurence Fishburne star as Smoke ?", "Assault on Precinct 13", "The Matrix Reloaded", "Mystic River", "Biker Boyz"],
    i: ["Which movie starts with a police officer and his daughter touring the White House ?", "White House Down", "Air Force One", "Murder at 1600", "Olympus Has Fallen"],
    j: ["In Star Trek The Motion Picture what was the alien phenomenon approaching Earth, destroying everything in its path ?", "Vulcans", "A meteor", "Voyager 6", "Klingons"]
};


$(document).ready(function() {

//============VARIABLESVILLE==============\\

    let timeoutID;
    let countID;
    let gameOn = false;
    let index = 0;
    let keys = Object.keys(trivia);
    let answers = ['2', '4', '1', '4', '1', '3', '1', '4', '1', '3']

//==============FUNCTIONSVILLE==============\\

    // function chooseQuestion () { }

    // render questions and answers to the screen
    function showQandA (arr) {
        if (index >= answers.length - 1 ) { index = 0 };
        $("#answers").empty();
        $("#question").text(arr[0]);
        for (let i = 1; i <= 4; i++) {
            $("#answers").append(`<div class="answer" data="${i}"> ${arr[i]} </div>`);
        }
        clearTimeout(timeoutID);
        //timeoutID = setTimeout( () => outOfTime(), 12000);
        countDown()
        gameOn = true;
    }

    // clear answers and set variables for next turn
    function clearQandA () {
        index++;
        gameOn = false;
        $("#answers").empty();
        clearTimeout(timeoutID);
        clearInterval(countID);
        timeoutID = setTimeout( () => showQandA(trivia[keys[index]]), 5000);
    }

    // if out of time: render "times up"
    function outOfTime () {
        clearQandA();
        $("#question").html('<img src="assets/img/timeup.jpg"/>')
    }

    // if right answer: clear timer and render win msg
    function youWin () {
        clearQandA();
        let imgIdx = Math.floor(Math.random() * 5) + 1;
        $("#question").html(`<img src="assets/img/right${imgIdx}.jpg"/>`)
    }

    // if wrong answer: clear timer, render msg
    function wrongAnswer () {
        clearQandA();
        $("#question").html("<img src='assets/img/wrong.jpg'/>")
    }

    function countDown() {
        let time = 12;
        countID = setInterval( () => {
            time--;
            if (time == 0 ) {
                clearInterval(countID);
                outOfTime();
            }
            $("#timer").html(`<div> ${time} seconds remaining</div>`)
    }, 1000);  
    }

//===========EVENTSVILLE===========\\
    $(document).on("click", (e) => {
        
        if (gameOn === false) {
            showQandA(trivia[keys[index]]);
        } else if ($(e.target).attr("class") === "answer") { 
            if ($(e.target).attr("data") === answers[index]) {
                youWin();
            } else{
                wrongAnswer();
            }
        }
    });


    $(document).on("keypress", (e) => {
        // when "spacebar" presed 
        if (e.key === " " && gameOn === false) {
            showQandA(trivia[keys[index]]);
        }
        // when keys 1 - 4 are pressed and questions and answers are on screen
        else if (gameOn === true && e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' ) {
            // if key pressed is right / wrong, show corresponsding msg
            if (e.key == answers[index]) {
                youWin();
            } else {
                wrongAnswer();
            }
        }
    });
});