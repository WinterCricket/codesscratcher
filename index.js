



const greetEl = document.getElementById("greet-el")

const recipient = "Lordly Fly Opener"
const sender = "Traveler Home"
const email = `
	Hi, ${recipient}! 
	What are you doing?
	Bonzai, ${sender}!
`
console.log(email)
greetEl.textContent = email