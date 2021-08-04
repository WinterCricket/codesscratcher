// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
// let largestCountries = [];




let largestCountries = ["Doo", "India", "USA", "Indonesia", "Daa"];
largestCountries.shift();
largestCountries.unshift("China");
largestCountries.pop();
largestCountries.push("Pakistan");
let messagesEl = document.getElementById("messages-el");
for(let i = 0; i < largestCountries.length; i++){

	messagesEl.textContent += "- "+largestCountries[i];
	//largestCountries.shift();
	

}


