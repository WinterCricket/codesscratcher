


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage
const scoreBtn = document.getElementById("score-btn")



let data = [

    {
        player: "Jane",
        score: 52
    },


    {
        player: "Mark",
        score: 48
    },

    {
        player: "Jonah",
        score: 38
    }
]

scoreBtn.addEventListener("click", function() {
    
    const jane = data[0].score
    domEl.textContent = jane
    
})