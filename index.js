// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
 // let messagesEl = document.getElementById("messages-el");
// console.log(cardsEl);
// cardsEl.textContent = "Cards here: " + cards.push(44);
 //messagesEl.textContent = "Messages here: " + messages;

 //messages.push(newMessage);



//logical AND operators

let completeMFA = true;
let awardMFA = true;
let messagesEl = document.getElementById("messages-el");

function generateCertificate(){
	messagesEl.textContent = "we're assembling your full MFA with transcipt";


	if(completeMFA && awardMFA ){
		generateCertificate();
	} else {
		messagesEl.textContent = "Your attempt is incomplete. Pay another 20k and try again.";
	}

}

generateCertificate();

