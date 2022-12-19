const storyline = [
    {
        page: 0, 
        message: 'You approach an ancient castle, what could be inside?', 
        optOne: 'Go inside and explore!',
        optTwo: "Go home... It's been a long day...",
        next: [1, 3]
    },

    {
        page: 1,
        message: 'It seems the castle is built like a maze, but parts of it are crumbling. It might be dangerous! Up ahead you find a fire-lit hall and a dark hall.',
        optOne: 'Take the well lit route?',
        optTwo: 'Risk the dark path and hope for light at the end of the tunnel!',
        next: [2, 3]
    },
    {
        page: 2,
        message: 'You were surrounded by goblins and killed!',
        optOne: null,
        optTwo: undefined,
        next: []
    },
    {
        page: 3,
        message: 'But you will never know the adventure you could have had...',
        optOne: 0,
        optTwo: undefined,
        next: []
    },

]

// * option values other than str: null=dead, 0=gaveUp
// * page 3 is initial gave up page

function startPage() {
    return storyline[0]
}

function nextPage(ref) {
    return storyline[ref]
}

export {
    startPage,
    nextPage
}