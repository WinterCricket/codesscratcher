// rock, paper, scissors
// let hands = ["rock", "paper", "scissors"];

// messagesEl = document.getElementById("messages-el");

// function showHand(){

// let randomNumber = Math.floor(Math.random()*3);

// messagesEl.textContent = hands[randomNumber];


// }
// showHand();

let fruit = ["orange", "red", "red","blue", "orange", "red", "orange","blue"];

let redShelf = document.getElementById("red-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let blueShelf = document.getElementById("blue-shelf");




for (let i = 0; i < fruit.length; i++){
	if(fruit[i] === "orange"){
		orangeShelf.textContent += fruit[i] +"  ";
	}
	 else if(fruit[i] === "red"){
	redShelf.textContent += fruit[i] + "  ";
	}
	else if (fruit[i] === "blue"){
		blueShelf.textContent += fruit[i] + "  ";
	}
}
