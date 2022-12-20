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
        message: 'It seems the castle is built like a maze, but parts of it are crumbling. It might be dangerous! Up ahead you find two hallways.',
        optOne: 'Take the well lit route?',
        optTwo: 'Risk the dark path and hope for light at the end of the tunnel!',
        next: [2, 6]
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
    {
        page: 4,
        message: 'You slipped and are dangling from the edge of a cliff!!!',
        optOne: 1,
        optTwo: undefined,
        next: [0, 5]
    },
    {
        page: 5,
        message: 'NOOO!!! You fell to an untimely demise!',
        optOne: null,
        optTwo: undefined,
        next: [ ]
    },
    {
        page: 6,
        message: "You've been going for a while now and still no light, you found a torch, and you can hear something moving... Maybe water? ",
        optOne: "Light the torch. It's SO dark!",
        optTwo: "Keep going just a little bit further. There has to be an end to this, and you don't like the feeling of things watching you.",
        next: [7, 4]
    },
    {
        page: 7,
        message: 'You light the torch to find yourself face-to-face with a monstrous wolf!',
        optOne: 'Fight for your life!',
        optTwo: 'Run for an escape! Hurry!',
        next: [8, 9]
    },
    {
        page: 8,
        message: 'The wolf tore you to shreds. What were you thinking trying to fight without a weapon?',
        optOne: null,
        optTwo: undefined,
        next: [ ]
    },
    {
        page: 9,
        message: 'With your torchlight you find a diverging tunnel and dive through away from the wolf!',
        optOne: null,
        optTwo: undefined,
        next: [ ]
    },
    {
        page: 10,
        message: 'NOOO!!! You fell to an untimely demise!',
        optOne: null,
        optTwo: undefined,
        next: [ ]
    },
    {
        page: 11,
        message: 'NOOO!!! You fell to an untimely demise!',
        optOne: null,
        optTwo: undefined,
        next: [ ]
    },
        
]

// * option values other than str: null=dead, 0=gaveUp, 1=cliff
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