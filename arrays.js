// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
// let messagesEl = document.getElementById("messages-el");
// console.log(cardsEl);
// cardsEl.textContent = "Cards here: " + cards.push(44);
// messagesEl.textContent = "Messages here: " + messages;

// newMessage = "Where am I?";
// messages.push(newMessage);





//for loops for counting
let sentence = ["Someone", "can help me", "if I'm", "drowning!"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++){
	
	greetingEl.textContent += sentence[i].split(" ");
}

