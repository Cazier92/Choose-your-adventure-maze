const storyline = [
    {
        page: 0, 
        message: 'You approach an ancient castle, what could be inside?', 
        optOne: 'Go inside and explore!',
        optTwo: "Go home... It's been a long day..."
    },

    {
        page: 1,
        message: 'It seems the castle is built like a maze, but parts of it are crumbling. It might be dangerous! Up ahead you find a fire-lit hall and a dark hall.',
        optOne: 'Take the well lit route?',
        optTwo: 'Risk the dark path and hope for light at the end of the tunnel!'
    },


]

function startPage() {
    return storyline[0]
}

export {
    startPage,
}