


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage

const flight = JSON.parse( localStorage.getItem("myCourses") )
flight.push("Knock around bankrupt country")
domEl.textContent = flight




