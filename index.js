// rock, paper, scissors
// let hands = ["rock", "paper", "scissors"];

// messagesEl = document.getElementById("messages-el");

// function showHand(){

// let randomNumber = Math.floor(Math.random()*3);

// messagesEl.textContent = hands[randomNumber];


// }
// showHand();

// let fruit = ["orange", "red", "red","blue", "orange", "red", "orange","blue"];

// let redShelf = document.getElementById("red-shelf");
// let orangeShelf = document.getElementById("orange-shelf");
// let blueShelf = document.getElementById("blue-shelf");
// let miscShelf = document.getElementById("misc-shelf");

// fruit[0] = "green";
// fruit[fruit.length] = "purple";
// fruit.push("yellow");


// for (let i = 0; i < fruit.length; i++){
// 	if(fruit[i] === "orange"){
// 		orangeShelf.textContent += fruit[i] +"  ";
// 	}
// 	 else if(fruit[i] === "red"){
// 	redShelf.textContent += fruit[i] + "  ";
// 	}
// 	else if (fruit[i] === "blue"){
// 		blueShelf.textContent += fruit[i] + "  ";
// 	} else {
// 		miscShelf.textContent += fruit[i] +"  ";
// 	}
// }

const fruits = ["Banana", "Orange", "Apple", "Mango"];
demoEl = document.getElementById("demo");
let text = "<ul>";
for(let i = 0; i < fruits.length; i++){
	text += "<li>" + fruits[i] + "</li>";
}
text += "<ul>";

demoEl.innerHTML = text;//need to use innerHTML instead of textContent