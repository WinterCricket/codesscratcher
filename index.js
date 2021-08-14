


const domEl = document.getElementById("dom-el")

const myCourses = ["Creative Writing for Geniuses", "Coding for Literary Minds ", "UI Design Fundamentals "]
const yourCourses = ["Pucker Up: How to Succeed ", "Business Cycles ", "Make Artists Cry "]

function listCourses(arr){

    arr = arr.toString()
    domEl.textContent = arr
}


listCourses(myCourses)