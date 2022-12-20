import { startPage } from "../data/storyline.js"
import { nextPage } from "../data/storyline.js"


// * Constants:



// * Variables:

let page = []
let clickCount = 0
let timeLeft 



// * Chached Element References:

const messageEl = document.getElementById('message')
const containerBlock = document.getElementById('container-block')
const bodyEl = document.querySelector('body')
// const cliffButton = document.getElementById('cliff-button')


// * Event Listeners:

containerBlock.addEventListener('click', handleClick)
containerBlock.addEventListener('click', restartGame)
// containerBlock.addEventListener('click', climb)

// * Functions:

function init() {
    generateContent()
    render()
}

init()

function generateContent() {
    const currentPage = startPage()
    page.push(currentPage)
}

function render() {
    containerBlock.innerHTML = ''
    appendOptions()
    updateMessage()
}

function appendOptions() { 
    if (typeof page[page.length -1].optOne === 'string') {
        optOneContent()
    }
    if (page[page.length -1].optOne === null) {
        dead()
    }
    if (page[page.length -1].optOne === 0) {
        giveUp()
    }
    if (page[page.length -1].optOne === 1) {
        cliff()
        // cliffOutcome()
    }
    if (typeof page[page.length -1].optTwo === 'string') {
        optTwoContent()
    }
}


function updateMessage() {
    messageEl.textContent = page[page.length -1].message
}
// console.log(page)

function handleClick(evt) {
    if (evt.target.id === 'container-one') {
        console.log('you clicked on container-one')
        page.push(nextPage(page[page.length -1].next[0]))
    } 
    if (evt.target.id === 'container-two') {
        console.log('you clicked on container-two')
        page.push(nextPage(page[page.length -1].next[1]))
    }
    render()
}

function restartGame(evt) {
    if (evt.target.id === 'yes-button') {
        init()
    }
    if (evt.target.id === 'no-button') {
        containerBlock.innerHTML = ''
        messageEl.textContent = "You'll never know the adventures you missed out on!"
    }
}

function climb() {
    // if (evt.target.id === 'cliff-button') {
    //     clickCount ++
    // }
    // console.log(clickCount)
    clickCount ++
}

function cliff() {
    // containerBlock.innerHTML = ''
    let cliffContainer = document.createElement('div')
    cliffContainer.className = 'container'
    cliffContainer.innerHTML = 
        `<div id="cliff-container" class="container">
            <h2>Hurry! Click to climb the cliff!</h2>
            <div id='countdown'></div>
            <div class='cliff-btn-div'>
            <button id='cliff-button'>Climb!</button>
            <div>
        </div>`
    bodyEl.appendChild(cliffContainer)
    const cliffButton = document.getElementById('cliff-button')
    cliffButton.addEventListener('click', climb)
    // console.log(cliffButton)
    // console.log(clickCount)

    cliffOutcome()
    
}

function cliffOutcome() {
    let countdownEl = document.getElementById('countdown')
    timeLeft = 5
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft + ' seconds remaining.';
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        console.log(timeLeft)
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 5) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            if (clickCount < 5) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            render()
            bodyEl.removeChild(cliffContainer)
        }
    }, 1000)
    // clearInterval(timer)
    // let timeout = setTimeout(() => {
    //     // if (clickCount >= 5) {
    //         // page.push(nextPage(page[page.length -1].next[0]))
    //         //     console.log(nextPage(page[page.length -1].next[0]))
    //         //     // clearTimeout(timer)
    //         // }
    //         // else {
    //             //     page.push(nextPage(page[page.length -1].next[1]))
    //             // }
    //             clearInterval(timer)
    //             console.log(timeLeft)
    //         }, 6000);
    //         clearTimeout(timeout)
    //         console.log(timeLeft)
    //         if (timeLeft = 0 && clickCount >= 5) {
    //             page.push(nextPage(page[page.length -1].next[0]))
    //         } else if (timeLeft = 0) {
    //             page.push(nextPage(page[page.length -1].next[1]))
    //         }
    // setTimeout(() => {
    //     if (clickCount >= 5) {
    //         // page.push(nextPage(page[page.length -1].next[0]))
    //         console.log(nextPage(page[page.length -1].next[0]))
    //         // clearTimeout(timer)
    //     }
    //     else {
    //         page.push(nextPage(page[page.length -1].next[1]))
    //     }
    // }, 6000);
}

function optOneContent() {
    let containerOne = document.createElement('div')
    containerOne.className = 'container'
    containerOne.innerHTML = 
        `<div id="container-one" class="container">
            <h2>Do You:</h2>
            <p id="option-one" class="option-text">${page[page.length -1].optOne}</p>
        </div>`
    containerBlock.appendChild(containerOne)
}

function dead() {
    let containerOne = document.createElement('div')
        containerOne.className = 'container'
        containerOne.innerHTML = 
            `<div id="dead-container" class="container">
                <h2>You Died! Do you want to play again?</h2>
                <button class='restart-buttons' id='yes-button'>Yes</button>
                <button class= 'restart-buttons' id='no-button'>No</button>
            </div>`
        containerBlock.appendChild(containerOne)
}

function giveUp() {
    // containerBlock.innerHTML = ''
        let containerOne = document.createElement('div')
        containerOne.className = 'container'
        containerOne.innerHTML = 
            `<div id="gave-up-container" class="container">
            <h2>Would you like to go back?</h2>
            <button class='restart-buttons' id='yes-button'>Yes</button>
            <button class= 'restart-buttons' id='no-button'>No</button>
            </div>`
        containerBlock.appendChild(containerOne)
}

function optTwoContent() {
    let containerTwo = document.createElement('div')
        containerTwo.className = 'container'
        containerTwo.innerHTML = 
            `<div id="container-two" class="container">
                <h2>Do You:</h2>
                <p id="option-two" class="option-text">${page[page.length -1].optTwo}</p>
            </div>`
        containerBlock.appendChild(containerTwo)
}