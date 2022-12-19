import { startPage } from "../data/storyline.js"


// * Constants:

const page = []

// * Variables:



// * Chached Element References:

const messageEl = document.getElementById('message')
const optOneP = document.getElementById('option-one')
const optTwoP = document.getElementById('option-two')


// * Event Listeners:



// * Functions:

function init() {
    generateContent()
    messageEl.textContent = page[0].message
    optOneP.textContent = page[0].optOne
    optTwoP.textContent = page[0].optTwo
}

init()

function generateContent() {
    const currentPage = startPage()
    page.push(currentPage)
}

