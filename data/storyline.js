const storyline = [
    {
        page: 0, 
        message: 'You discover ancient ruins, what could be inside?', 
        optOne: 'Go inside and explore!',
        optTwo: "Go home... It's been a long day...",
        next: [1, 3],
        img: []
    },

    {
        page: 1,
        message: 'It seems the ruins are built like a maze, but parts of it are crumbling. It might be dangerous! Up ahead you find two hallways.',
        optOne: 'Take the well lit route?',
        optTwo: 'Risk the dark path and hope for light at the end of the tunnel!',
        next: [20, 6],
        img: []
    },
    {
        page: 2,
        message: 'You were surrounded by thieves and killed!',
        optOne: null,
        optTwo: undefined,
        next: [],
        img: []
    },
    {
        page: 3,
        message: 'But you will never know the adventure you could have had...',
        optOne: 0,
        optTwo: undefined,
        next: [],
        img: []
    },
    {
        page: 4,
        message: 'You find yourself falling into nothing, reach out... And now are dangling from the edge of a cliff!!!',
        optOne: 1,
        optTwo: undefined,
        next: [12, 5, 13, 16],
        img: []
    },
    {
        page: 5,
        message: 'NOOO!!! You fell to an untimely demise!',
        optOne: null,
        optTwo: undefined,
        next: [ ],
        img: []
    },
    {
        page: 6,
        message: "You've been going for a while now and still no light, you found a torch, and you can hear something moving... Maybe water? ",
        optOne: "Light the torch? It's SO dark!",
        optTwo: "Keep going just a little bit further? There has to be an end to this, and you don't like the feeling of things watching you.",
        next: [7, 4],
        img: []
    },
    {
        page: 7,
        message: 'You light the torch to find yourself face-to-face with a monstrous wolf!',
        optOne: 'Fight for your life!',
        optTwo: 'Run for an escape! Hurry!',
        next: [8, 9],
        img: []
    },
    {
        page: 8,
        message: 'The wolf tore you to shreds. What were you thinking trying to fight without a weapon?',
        optOne: null,
        optTwo: undefined,
        next: [ ],
        img: []
    },
    {
        page: 9,
        message: 'With your torchlight you find a diverging tunnel and dive through away from the wolf! Following it through you find yourself in a water filled cavern. Close to you is a boat, on the far end of the cavern is a bridge leading across the water.',
        optOne: "Take the boat? You're tired and keen to get someplace safe as fast as posible.",
        optTwo: "Go the long way? After the wolf you're wary of things lurking in the deep.",
        next: [10, 11],
        img: []
    },
    {
        page: 10,
        message: 'The current in the water is strong, and you find yourself hurtling towards a waterfall you failed to notice in your exhaustion!',
        optOne: 2,
        optTwo: undefined,
        next: [17, 5, 18, 19],
        img: []
    },
    {
        page: 11,
        message: "At the base of the bridge you find a sword and a shield, warily you pick it up. Half-way across, you find yourself surrounded by thieves!",
        optOne: "Fight the vagabonds? You have a weapon now!",
        optTwo: "Run for your life!",
        next: [17, 2],
        img: []
    },
    {
        page: 12,
        message: "You managed to climb the ledge of the cliff, light your torch, and approach a water filled cavern. Close to you is a row of boats, on the far end of the cavern is a bridge leading across the water.",
        optOne: "Take a boat? You're tired and keen to get someplace safe as fast as posible.",
        optTwo: "Go the long way? You aren't sure if you can paddle after climbing that much.",
        next: [10, 11],
        img: []
    },
    {
        page: 13,
        message: "You slide further down, but in the nick of time catch another ledge, climb up, and light your torch. You found a hidden room full of treasure!",
        optOne: "Note the spot to come back to later, and go back up the cliff?",
        optTwo: "Head home, treasure in hand?",
        next: [4, 14],
        img: []
    },
    {
        page: 14,
        message: "You found enough treasure to live off of for the rest of your life! As you leave, the entrance to the ruins collapses, and you will never know what other advenures you may have had.",
        optOne: undefined,
        optTwo: undefined,
        next: [ ],
        img: []
    },
    {
        page: 15,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ],
        img: []
    },
    {
        page: 16,
        message: "With the strength of a god you climb up through the abyss to heights unknown. Beyond imagining you reach the highest pinnacle, light your torch, and find yourself in the tallest tower of the ruins. Before you lies a mysterious portal.",
        optOne: "Jump through the portal! Adventure awaits!",
        optTwo: "Wait, wait, wait. A PORTAL?? After just escaping death? Let's take the stairs!",
        next: [26, 25],
        img: []
    },
    {
        page: 17,
        message: "Out of breath, you successfully reach the other side of the water!",
        optOne: "",
        optTwo: "",
        next: [ ],
        img: []
    },
    {
        page: 18,
        message: "You didn't row hard enough! You find yourself plummeting over the waterfall! At the last minute, you jump out of the boat onto a ledge. Now without a torch...",
        optOne: "Dive into the water, hoping the bottom isn't to far... Or rocky?",
        optTwo: "Search in the dark for another way out?",
        next: [5, 23],
        img: []
    },
    {
        page: 19,
        message: "You overshot the end of the bridge, and find yourself floating down an eerie river",
        optOne: "Go back the way you came?",
        optTwo: "Follow the river through to see where it leads?",
        next: [17, 24],
        img: []
    },
    {
        page: 20,
        message: "You find yourself in a long corridor. This was once a grand complex, but has since fallen to ruin. Most of the paths and chambers have crumbled to the ground, but you find the ruins of a temple.",
        optOne: "Explore the ruins for treasure!",
        optTwo: "Stick to the corridor. Something feels off about this place.",
        next: [21, 22],
        img: []
    },
    {
        page: 21,
        message: "You find a site once used for arcane rituals! But no treasure. The air feels heavy with magic from distant past.",
        optOne: "Want to go back to the start?",
        optTwo: "Keep looking for treasure?",
        next: [0, 2],
        img: []
    },
    {
        page: 22,
        message: "Too much has fallen into decay. You can't go on any further.",
        optOne: "Want to go back to the start?",
        optTwo: "Cut your losses and go home?",
        next: [0, 3],
        img: []
    },
    {
        page: 23,
        message: "As you press on the ground begins to crumble beneath your feet! Trapped on a small, collapsing sliver of land in the dark, you have no choice but to climb!",
        optOne: 1,
        optTwo: undefined,
        next: [12, 5, 13, 16],
        img: []
    },
    {
        page: 24,
        message: "The river leads to an undergound portal!",
        optOne: "Go through the portal?",
        optTwo: "Return home? Enough adventuring for the day.",
        next: [26, 3],
        img: []
    },
    {
        page: 25,
        message: "You take the staircase down and find yourself in the ancient throne room! However it seems most things have been looted or destroyed already. The skeletal remains of warriors long past litter the floor. You go home, empty handed.",
        optOne: undefined,
        optTwo: undefined,
        next: [ ],
        img: []
    },
    {
        page: 26,
        message: "As you step through the portal, ancient technology whirs around you, moving back time. But just as you land your feet in the past, it goes haywire! You need to run before it electrocutes you!!!",
        optOne: 3,
        optTwo: undefined,
        next: [27, 28],
        img: []
    },
    {
        page: 27,
        message: "You didn't run fast enough and were shocked to death! And in the past... That's unfortunate. Who will discover your body?",
        optOne: null,
        optTwo: undefined,
        next: [ ],
        img: []
    },
    {
        page: 28,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ],
        img: []
    },
    {
        page: 29,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ],
        img: []
    },
    {
        page: 30,
        message: "",
        optOne: "",
        optTwo: "",
        next: [ ],
        img: []
    },
        
]

// {
//     page: 11,
//     message: "",
//     optOne: "",
//     optTwo: "",
//     next: [ ]
// },

// * option values other than str: null=dead, 0=gaveUp, 1=cliff, 2=boat, 3=portal
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