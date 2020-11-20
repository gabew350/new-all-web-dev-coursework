"use strict";
function main()
{
	const MINNUMBER = 0;    //MINNUMBER
	const MAXNUMBER = 300;  //MAXNUMBER

	let inputNumber = 0;
	let sum = 0;
	let doAgain = true;
	let response = 'y';

	while (response === 'y') {
		inputNumber = parseInt(prompt(`please enter a number between ${MINNUMBER} and ${MAXNUMBER}`));

		while  (isNaN(inputNumber)          ||
			   (inputNumber < MINNUMBER)    ||
			   (inputNumber > MAXNUMBER)) {
				inputNumber = parseInt(prompt(`please enter a number between ${MINNUMBER} and ${MAXNUMBER}`));
		}

		for (let lcv = 1; lcv <= inputNumber; ++lcv) {
			sum += lcv;
		}

		alert(`the sum of the numbers from ${MINNUMBER} to ${inputNumber} is: ${sum}`);

		response = prompt("do another sum? (y / n)", "y");
		response = response.charAt(0).toLowerCase();
		
	} 
}