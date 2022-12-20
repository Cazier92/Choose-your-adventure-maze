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


// * Event Listeners:

containerBlock.addEventListener('click', handleClick)
containerBlock.addEventListener('click', restartGame)

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
    }
    if (page[page.length -1].optOne === 2) {
        boat()
    }
    if (typeof page[page.length -1].optTwo === 'string') {
        optTwoContent()
    }
}


function updateMessage() {
    messageEl.textContent = page[page.length -1].message
}


function handleClick(evt) {
    if (evt.target.id === 'container-one') {
        page.push(nextPage(page[page.length -1].next[0]))
    } 
    if (evt.target.id === 'container-two') {
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
    clickCount ++
}

function cliff() {
    let cliffContainer = document.createElement('div')
    cliffContainer.className = 'container'
    cliffContainer.id = 'cliff-container'
    cliffContainer.innerHTML = 
        `<h2>Hurry! Click as many times as you can to climb the cliff!</h2>
        <div id='countdown'>5</div>
        <div class='cliff-btn-div'>
        <button id='cliff-button'>Climb!</button>
        <div>`
    bodyEl.appendChild(cliffContainer)
    const cliffButton = document.getElementById('cliff-button')
    clickCount = 0
    cliffButton.addEventListener('click', climb)
    cliffOutcome()
}

function cliffOutcome() {
    let countdownEl = document.getElementById('countdown')
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 28) {
                page.push(nextPage(page[page.length -1].next[3]))
            }
            if (clickCount >= 15 && clickCount < 28) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            if (clickCount >= 10 && clickCount < 15) {
                page.push(nextPage(page[page.length -1].next[2]))
            }
            if (clickCount < 10) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            render()
            let containerToRemove = document.getElementById('cliff-container')
            bodyEl.removeChild(containerToRemove)
        }
    }, 1000)
}

function boat() {
    let boatContainer = document.createElement('div')
    boatContainer.className = 'container'
    boatContainer.id = 'boat-container'
    boatContainer.innerHTML = 
        `<h2>Hurry! Click as many times as you can to row away from the waterfall!</h2>
        <div id='countdown'>5</div>
        <div class='boat-btn-div'>
        <button id='boat-button'>Row!</button>
        <div>`
    bodyEl.appendChild(boatContainer)
    const boatButton = document.getElementById('boat-button')
    clickCount = 0
    boatButton.addEventListener('click', climb)
    boatOutcome()
}

function boatOutcome() {
    let countdownEl = document.getElementById('countdown')
    timeLeft = 4
    let timer = setInterval(function() {
        countdownEl.textContent = timeLeft ;
        timeLeft -= 1;
        if (timeLeft === -1) {
            countdownEl.textContent = ''
        }
        if (timeLeft === -1) {
            clearInterval(timer)
            if (clickCount >= 28) {
                page.push(nextPage(page[page.length -1].next[3]))
            }
            if (clickCount >= 15 && clickCount < 28) {
                page.push(nextPage(page[page.length -1].next[0]))
            }
            if (clickCount >= 10 && clickCount < 15) {
                page.push(nextPage(page[page.length -1].next[2]))
            }
            if (clickCount < 10) {
                page.push(nextPage(page[page.length -1].next[1]))
            }
            render()
            let containerToRemove = document.getElementById('boat-container')
            bodyEl.removeChild(containerToRemove)
        }
    }, 1000)
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