function check() {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;
	if (question1 == "Tehran") {
		correct++;
		var q1 = document.getElementById("q1");
		q1.style.color = "#029B4F"

	}
	if (question2 == "hartford") {
		correct++;
		var q2 = document.getElementById("q2");
		q2.style.color = "#029B4F"
	}
	if (question3 == "Albany") {
		correct++;
		var q3 = document.getElementById("q3");
		q3.style.color = "#029B4F"
	}
	if (question4 == "methane") {
		correct++;
		var q4 = document.getElementById("q4");
		q4.style.color = "#029B4F"
	}

	if (question5 == "eight") {
		correct++;
		var q5 = document.getElementById("q5");
		q5.style.color = "#029B4F"
	}
	if (question6 == "the earth") {
		correct++;
		var q6 = document.getElementById("q6");
		q6.style.color = "#029B4F"
	}

	var messages = ["Great job!", "thats Just Okay", "you need to do better"];
	var pictures = ["img/s.gif", "img/soso.gif", "img/f.gif"];
	var range;
	if (correct < 2) {
		range = 2;
	}
	if (correct > 1 && correct < 6) {
		range = 1;
	}
	if (correct > 5) {
		range = 0;
	}


	document.getElementById("messages").innerHTML = messages[range];
	document.getElementById("number-correct").innerHTML = "you got" + " " + correct + " " + "correct";
	document.getElementById("picture").src = pictures[range];
};