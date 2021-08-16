


const domEl = document.getElementById("dom-el")

//const valuation = "This is a value, I suppose."

//console.log(valuation)
 const myCourses = ["How to Fly", "How to Let Go"]

 localStorage.setItem("myCourses", JSON.stringify(myCourses))
//const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
 domEl.textContent = myCourses





