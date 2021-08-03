// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
 let messagesEl = document.getElementById("messages-el");

let person = {
	name: "Todd",
	age: 169,
	country: "United States"
	
}

function logData(){
	return messagesEl.textContent = person.name+" is "+person.age+ " years old, and is from "+person.country+".";

}
logData();