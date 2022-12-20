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
        message: 'You were surrounded and killed!',
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
        message: 'You find yourself falling into nothing, reach out... And now are dangling from the edge of a cliff!!!',
        optOne: 1,
        optTwo: undefined,
        next: [12, 5, 13, 16]
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
        optOne: "Light the torch? It's SO dark!",
        optTwo: "Keep going just a little bit further? There has to be an end to this, and you don't like the feeling of things watching you.",
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
        message: 'With your torchlight you find a diverging tunnel and dive through away from the wolf! Following it through you find yourself in a water filled cavern. Close to you is a boat, on the far end of the cavern is a bridge leading across the water.',
        optOne: "Take the boat? You're tired and keen to get someplace safe as fast as posible.",
        optTwo: "Go the long way? After the wolf you're wary of things lurking in the deep.",
        next: [10, 11]
    },
    {
        page: 10,
        message: 'The current in the water is strong, and you find yourself hurtling towards a waterfall you failed to notice in your exhaustion!',
        optOne: 2,
        optTwo: undefined,
        next: [17, 5, 18, 19]
    },
    {
        page: 11,
        message: "At the base of the bridge you find a sword and a shield, warily you pick it up. Half-way across, you find yourself surrounded by thieves!",
        optOne: "Fight the vagabonds? You have a weapon now!",
        optTwo: "Run for your life!",
        next: [17, 2]
    },
    {
        page: 12,
        message: "You managed to climb the ledge of the cliff, light your torch, and approach a water filled cavern. Close to you is a boat, on the far end of the cavern is a bridge leading across the water.",
        optOne: "Take the boat? You're tired and keen to get someplace safe as fast as posible.",
        optTwo: "Go the long way? You aren't sure if you can paddle after climbing that much.",
        next: [10, 11]
    },
    {
        page: 13,
        message: "You slide further down, but in the nick of time catch another ledge, climb up, and light your torch.",
        optOne: "",
        optTwo: "",
        next: [14, 15]
    },
    {
        page: 14,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 15,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 16,
        message: "With the strength of a god you climb up through the abyss to heights unknown. Beyond imagining you reach the highest pinnacle, light your torch, and find yourself in the tallest tower of the castle. Before you lies a mysterious portal.",
        optOne: "Jump through the portal! Adventure awaits!",
        optTwo: "Wait, wait, wait. A PORTAL?? After just escaping death? Let's take the stairs!",
        next: [0, 0]
    },
    {
        page: 17,
        message: "Out of breath, you successfully reach the other side of the water!",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 18,
        message: "You didn't row hard enough! You find yourself plummeting over the waterfall! At the last minute, you jump out of the boat to a ledge.",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 19,
        message: "You overshot the end of the bridge, and find yourself floating down an eerie river",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 20,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 21,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 22,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 23,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
    {
        page: 24,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ]
    },
        
]

// {
//     page: 11,
//     message: "",
//     optOne: "",
//     optTwo: "",
//     next: [ ]
// },

// * option values other than str: null=dead, 0=gaveUp, 1=cliff, 2=boat
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