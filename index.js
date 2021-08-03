// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
 let messagesEl = document.getElementById("messages-el");
messagesEl.textContent;
let age = 23;

if(age < 6){
	messagesEl.textContent = "Let travel for free!";
}else if(age < 18){
	messagesEl.textContent = "Give child discount.";
}else if(age < 27){
	messagesEl.textContent = "Give student discount.";
}else if (age > 66){
	messagesEl.textContent = "Give senior discount.";
} else {
	messagesEl.textContent = "Charge full price.";
}





