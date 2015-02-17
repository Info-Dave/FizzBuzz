/*
FizzBuzz
*/
// Class
"use strict";
function FizzBuzz() {
// SuperClass Attributes

// Attributes
	this.currentNumber = 0;
	this.json = {};
}

// Constructors

// Accessors - getters and setters

// Public Interface Methods
/*this.method=function(){
}*/
FizzBuzz.prototype.div3 = function () {
	var remainder = this.currentNumber % 3;
	if (remainder === 0) {
		return true;
	} else {
		return false;
	}
}
FizzBuzz.prototype.div5 = function () {
	var remainder = this.currentNumber % 5;
	if (remainder === 0) {
		return true;
	} else {
		return false;
	}
}
FizzBuzz.prototype.run = function(max) {
	var answer = '';
	var json = '{"fizzbuzz":['
	var output = document.getElementById('asText');//This locates the <div> on the HTML page to load the answer.
	if (output) {//It is a good practice to insure the DOM element was actually found
		output.innerHTML = '<h3>As Text</h3>';
		var answerArray = [];
		for (this.currentNumber = 1; this.currentNumber <= max; this.currentNumber++) {
			if (this.div3() && this.div5()) {
				answer = 'FizzBuzz';
			} else if (this.div3()) {
				answer = 'Fizz';
			} else if (this.div5()){
				answer = 'Buzz';
			} else {
				answer = this.currentNumber;
			}
			answerArray[this.currentNumber] = answer;
			output.innerHTML = output.innerHTML + answer + '<br />';
			json = json + '"' + answer + '"';
			if (this.currentNumber != max) {//We don't want a comma after the last element.
				json = json + ', ';
			}
		}
		json = json + ']}'
		//To see JavaScript decode the json text, use debugger and set a breakpoint on the next line. Then step over the line and inspect the variable this.json
		this.json = JSON.parse(json);
		var json2 = JSON.stringify(answerArray);
		this.json = JSON.parse(json2);
		var jsonOutput = document.getElementById('asJSON');
		jsonOutput.innerHTML = '<h3>As JSON (hand rolled)</h3>' + json + '<h3>As JSON (stringify)</h3>' + json2;
	} else {
		alert ('output area with id = asText could not be found');
	}
}
