


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage

const flight = JSON.parse( localStorage.getItem("myCourses") )
listItems = ""
for (let i = 0; i < flight.length; i++){
    listItems += `
        <li>

            ${flight[i]}

        </li>

    `

}



domEl.innerHTML = listItems




