const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Eating a bit better'
}, {
    title: 'Office modification',
    body: 'get a new seat'
}]

const findNote = function (notes, noteTitle) { // defines a function that will find a note that is passed into it
    
    //the variable index will store the note found if true, otherwise it will store -1
    const index = notes.findIndex(function (note, index) { // not using index here, it's just a reminder that you have access to it if needed
        return note.title.toLowerCase() === noteTitletoLowerCase() // compares notes against what was passed into noteTite. returns true if found, false if not
    }) // this code block is its own module. it will then be used by the function it is inside

    return notes[index] // returns what is stored in const index
}

const note = findNote(notes, 'Office modification')
console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)