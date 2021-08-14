


const domEl = document.getElementById("dom-el")

const player = "Selfsame"
const opponent = "Otherness"
const game = "NonviolentCompete"
let points = 0
let hasWon = false





points = Math.floor(Math.random() * 300)
console.log(points)

if(points > 99){
    domEl.textContent = `${player} earned ${points} to win the ${game} game!`
} else {
    domEl.textContent = `The winner of ${game} is ${opponent}, who earned ${points}!  ${player} has lost.`
}