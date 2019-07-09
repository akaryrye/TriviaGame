
// an object containing arrays of questions and answers
let trivia = {
    one: ["This is sample question one", "This is sample question one, answer one", "This is sample question one, answer two", "This is sample question one, answer three", "This is sample question one, answer four"],
    two: ["This is sample question two", "This is sample question two, answer one", "This is sample question two, answer two", "This is sample question two, answer three", "This is sample question two, answer four"],
    three: ["This is sample question three", "This is sample question three, answer one", "This is sample question three, answer two", "This is sample question three, answer three", "This is sample question three, answer four"],
}

$("#question").html("<h3>Question 1: " + trivia.one[0] + "</h3>");
$("#answerOne").html("<p>" + trivia.one[1] + "</p>");
$("#answerOne").append("<p>" + trivia.one[2] + "</p>");
$("#answerOne").append("<p>" + trivia.one[3] + "</p>");
$("#answerOne").append("<p>" + trivia.one[4] + "</p>");