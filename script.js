//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1b").value;
    var q2 = document.getElementById("q2b").checked;
    var q3 = document.getElementById("q3d").value;
    var q4 = document.getElementById("q4ac").checked;
    var q5 = document.getElementById("q5b").value;
    var q6 = document.getElementById("q6a").value;
    var q7 = document.getElementById("q7b").checked;
    var q8 = document.getElementById("q8a").value;
    var q9 = document.getElementById("q9c").value;
    var q10 = document.getElementById("q10b").checked;

    //Assign correct answers to field inputs
      if (q1) {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if (q3) {
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    } if (q6) {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if (q8)  {
        correctAnswers += 1;
    }  if (q9) {
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } 
         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 10) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 10 answers correct";}
    else if (correctAnswers >= 7) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 5) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)b (2)b (3)d (4)c (5)b (6)a (7)b (8)a (9)c (10)b";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}
