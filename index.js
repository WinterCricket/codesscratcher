// rock, paper, scissors
let hands = ["rock", "paper", "scissors"];

messagesEl = document.getElementById("messages-el");

function showHand(){

let randomNumber = Math.floor(Math.random()*3);

console.log(hands[randomNumber]);


}
showHand();
