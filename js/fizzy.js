$(document).ready(function(){
	var userAnswer = + prompt("Enter a number");

	console.log(userAnswer);

	while (userAnswer % 1 !== 0) {
		// ask them to re-enter
		userAnswer = parseInt(prompt("Enter again!"));
	}
	
	fizzBuzz(userAnswer);
});

var fizzBuzz = function (number) {
	for (var i = 1; i <= number; i++) {
	    if (i % 3 == 0 && i % 5 == 0){
	        $('#displayResults').append("FizzBuzz <br>");
	    } else if (i % 3 == 0) {
	        $('#displayResults').append("Fizz <br>");
	    } else if (i % 5 == 0) {
	        $('#displayResults').append("Buzz <br>");
	    } else {
	        $('#displayResults').append(i + "<br>");
	    }
	}
};