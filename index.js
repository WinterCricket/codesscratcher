// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
// let largestCountries = [];




let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
let messagesEl = document.getElementById("messages-el");
for(let i = 0; i < largestCountries.length; i++){
	messagesEl.textContent += "- "+largestCountries[i];
}



