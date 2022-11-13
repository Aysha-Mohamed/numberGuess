let randomNumber = Math.round(Math.random()*100);
const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const resultPara = document.querySelector(".result");
const numberRange = document.querySelector(".number-range");
const newGameBtn = document.querySelector(".new-game");
let guessList = document.querySelector(".guess-list");
let counter = 0;


const correctGuess = () => {
	resultPara.style.display = "block";
	resultPara.textContent = "Congratulations!!! Your guess is correct!!";
	numberRange.style.display = "none";
	resultPara.classList.add("correct");
	newGame();
}


const wrongGuess = () =>{
	resultPara.style.display = "block";
	numberRange.style.display = "block";
	resultPara.textContent = "Sorry!!! Your guess is wrong!!";
	resultPara.classList.add("wrong");
}


const greaterNumber = () =>{
	wrongGuess();
	numberRange.textContent = "Your number is too high";

}


const lesserNumber = () =>{
	wrongGuess();
	numberRange.textContent = "Your number is too low";
}


const resetForm = () =>{
	numberRange.style.display = "none";
	resultPara.style.display = "none";
	input.value = "";
 	randomNumber = Math.round(Math.random()*100);
 	submit.disabled = false;
 	newGameBtn.style.display = "none";
 	guessList.textContent = "Previous Guesses: ";
}

const newGame = () => {
counter = 0;
console.log("new game");
newGameBtn.style.display = "block";
submit.disabled = true;
newGameBtn.addEventListener("click",resetForm);
}



const checkNumber = () =>{
	counter++;
	let inputValue = Number(input.value);
	let inputValueList = " "+inputValue;
	guessList.append(inputValueList);
	counter >= 10 && inputValue !== randomNumber ? newGame () : (
	inputValue === randomNumber ? correctGuess() 
		: inputValue > randomNumber ? greaterNumber() : lesserNumber());
	/*: input.value > randomNumber ? "greater"
	: input.value < randomNumber ? "lesser";*/

	
}

submit.addEventListener("click",checkNumber);