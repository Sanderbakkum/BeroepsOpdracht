function Checker() {
    if (document.getElementById('mc1').checked) {
        document.getElementById('2').style.display = 'block';
	} 
	else if (document.getElementById('mc11').checked) {
        document.getElementById('2').style.display = 'block';
	} 
	else if (document.getElementById('mc111').checked) {
        document.getElementById('2').style.display = 'block';
	} 
	else {
        document.getElementById('2').style.display = 'none';
	}
	
	if (document.getElementById('mc2').checked) {
		document.getElementById('3').style.display = 'block';
		document.getElementById('1').style.display = 'none';
	} 
	else if (document.getElementById('mc22').checked) {
		document.getElementById('3').style.display = 'block';
		document.getElementById('1').style.display = 'none';
	} 
	else if (document.getElementById('mc222').checked) {
		document.getElementById('3').style.display = 'block';
		document.getElementById('1').style.display = 'none';
	} 
	else {
        document.getElementById('3').style.display = 'none';
	}

	if (document.getElementById('mc3').checked) {
		document.getElementById('4').style.display = 'block';
		document.getElementById('2').style.display = 'none';
	} 
	else if (document.getElementById('mc33').checked) {
		document.getElementById('4').style.display = 'block';
		document.getElementById('2').style.display = 'none';
	} 
	else if (document.getElementById('mc333').checked) {
		document.getElementById('4').style.display = 'block';
		document.getElementById('2').style.display = 'none';
	} 
	else {
        document.getElementById('4').style.display = 'none';
	}

	if (document.getElementById('mc4').checked) {
		document.getElementById('5').style.display = 'block';
		document.getElementById('3').style.display = 'none';
	} 
	else if (document.getElementById('mc44').checked) {
		document.getElementById('5').style.display = 'block';
		document.getElementById('3').style.display = 'none';
	} 
	else if (document.getElementById('mc444').checked) {
		document.getElementById('5').style.display = 'block';
		document.getElementById('3').style.display = 'none';
	} 
	else {
        document.getElementById('5').style.display = 'none';
	}

	if (document.getElementById('mc5').checked) {
		document.getElementById('6').style.display = 'block';
		document.getElementById('4').style.display = 'none';
	} 
	else if (document.getElementById('mc55').checked) {
		document.getElementById('6').style.display = 'block';
		document.getElementById('4').style.display = 'none';
	}  
	else {
        document.getElementById('6').style.display = 'none';
	}

	if (document.getElementById('mc6').checked) {
		document.getElementById('7').style.display = 'block';
		document.getElementById('5').style.display = 'none';
	} 
	else if (document.getElementById('mc66').checked) {
		document.getElementById('7').style.display = 'block';
		document.getElementById('5').style.display = 'none';
	}  
	else {
        document.getElementById('7').style.display = 'none';
	}

	if (document.getElementById('mc7').checked) {
		document.getElementById('8').style.display = 'block';
		document.getElementById('6').style.display = 'none';
	} 
	else if (document.getElementById('mc77').checked) {
		document.getElementById('8').style.display = 'block';
		document.getElementById('6').style.display = 'none';
	}  
	else {
        document.getElementById('8').style.display = 'none';
	}

	if (document.getElementById('mc8').checked) {
		document.getElementById('7').style.display = 'none';
	} 
	else if (document.getElementById('mc88').checked) {
		document.getElementById('7').style.display = 'none';
	}  
}
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "2015") {
		correct++;
}
	if (question2 == "2018") {
		correct++;
}	
	if (question3 == "20 januari ") {
		correct++;
	}
	
	if (question4 == "Lisse") {
		correct++;
	}

	if (question5 == "Ja") {
		correct++;
	}

	if (question6 == "Nee") {
		correct++;
	}

	if (question7 == "Ja") {
		correct++;
	}

	if (question8 == "Ja") {
		correct++;
	}
	var pictures = ["img/tafel.png", "img/kar.png", "img/druif.png"];
	var messages = ["Dit kunstwerk ben jij", "Dit kunstwerk ben jij", "Dit kunstwerk ben jij"];
	var score;

	if (correct < 3) {
		score = 2;
	}

	if (correct > 2 && correct < 6) {
		score = 1;
	}

	if (correct > 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Je hebt " + correct + " antwoorden juist.";
	document.getElementById("picture").src = pictures[score];
	}	
