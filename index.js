// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
 // let messagesEl = document.getElementById("messages-el");
// console.log(cardsEl);
// cardsEl.textContent = "Cards here: " + cards.push(44);
 //messagesEl.textContent = "Showing solutions here: " + messages;

 //messages.push(newMessage);

let solvEl = document.getElementById("solv-el");

//logical AND operators
let hasSolved = true;
let hasHintsLeft = false;
let message = "You're an idiot, so we're giving you the solution now...";
function giveStudentSolution(){
	if(hasSolved === false && hasHintsLeft === false){
		solvEl.textContent = message;
	} else {
		solvEl.textContent = "You're almost there. Keep trying.";
	}
}
giveStudentSolution();