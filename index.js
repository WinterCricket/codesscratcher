// let cards = [3, 9];

// cards.push(5)

// for (let i = 0; i <= cards.length; i ++ 1) {
// 	console.log(cards[i]);
// }

// let cardsEl = document.getElementById("cards-el");
 let messagesEl = document.getElementById("messages-el");
// console.log(cardsEl);
// cardsEl.textContent = "Cards here: " + cards.push(44);
 //messagesEl.textContent = "Showing solutions here: " + messages;

 //messages.push(newMessage);

// let solvEl = document.getElementById("solv-el");

// //logical AND operators
// let hasSolved = false;
// let hasHintsLeft = false;
// let message = "You're an idiot, so we're giving you the solution now...";
// function giveStudentSolution(){
// 	if(hasSolved === false && hasHintsLeft === false){
// 		return message;
// 	} else if(hasSolved === false && hasHintsLeft || hasSolved && hasHintsLeft === false){
// 		return "You're almost there. Keep trying.";
// 	} else {
// 		return "So, smart ass, you've solved it. Now what?";
// 	}
// }
// messagesEl.textContent = giveStudentSolution();



// function convertToRoman(num) {
//    const romanToArabic = {
//         M:1000,
//         CM:900,
//         D:500,
//         CD:400,
//         C:100,
//         XC:90,
//         L:50,
//         XL:40,
//         X:10,
//         IX:9,
//         V:5,
//         IV:4,
//         I:1
//     };
//     let romantic = "";
//     for(let key in romanToArabic){
//         romanToArabic[key];
//         while(num >= romanToArabic[key]){
//             romantic += key;
//             num -= romanToArabic[key];
//         }
//     }
//  return romantic;
// }

// messagesEl.textContent = "Translate Arabic to Roman: "+convertToRoman(2021);

let likeDocs = false;
let likeStart = false;

function recommendFilm(){
	if(likeDocs ===true ||likeStart === true){
		return "Watch Star Wars when you're sick and tired of your job.";
	} else {
		 return "I've nothing to recommend, except that you grow up.";
	}
}
messagesEl.textContent = recommendFilm();
