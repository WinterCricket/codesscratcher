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
let miscShelf = document.getElementById("misc-shelf");



function addFruit(){

for (let i = 0; i < fruit.length; i++){
	if(fruit[i] === "orange"){
		orangeShelf.textContent += fruit[i] +"  ";
	}
	 else if(fruit[i] === "red"){
	redShelf.textContent += fruit[i] + "  ";
	}
	else if (fruit[i] === "blue"){
		blueShelf.textContent += fruit[i] + "  ";
	} else {
		miscShelf.textContent += fruit[i] +"  ";
	}
}



	fruit.push("black");
	miscShelf.textContent += fruit[i]+ "  ";
}
addFruit();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo");
// let text = "<ul>";
// fruits.forEach(myFunction);
// document.getElementById("demo").innerHTML = text;
// text += "<ul>";
//  function myFunction(val){
//  	text += "<li>" + val + "</li>";
//  }
