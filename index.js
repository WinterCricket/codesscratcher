let dayOfMonth = 31;
let weekday = "Friday";
let messagesEl = document.getElementById("messages-el");
if(dayOfMonth === 13 && weekday === "Friday"){
	messagesEl.textContent = "Boooooo!";
} else{
	messagesEl.textContent = "Good day!";
}

