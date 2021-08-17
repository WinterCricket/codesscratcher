


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppos

// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// domEl.textContent = leadsFromLocalStorage


const flog = JSON.parse(localStorage.getItem("writeCourses"))
let listItems = ""
for(let i=0; i<flog.length; i++){
    listItems +=`<li>
        ${flog[i]}
    </li>
    `
}
domEl.innerHTML = listItems
