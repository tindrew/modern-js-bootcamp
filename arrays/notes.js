const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Eating a bit better'
}, {
    title: 'Office modification',
    body: 'get a new seat'
}]

let sortNotes = notes.sort(function (a, b) {
    var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
    if (titleA < titleB) {
        return -1 
    } else if (titleA > titleB) {
        return 1
    } else {
        return 0
    }
})



const findNote = function (notes, noteTitle) { // defines a function that will find a note that is passed into it
    
    return notes.find(function (note, index) { 
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    return filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// let showCompleted = notes.sort(function (a, b) {
//     var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
//     if (titleA < titleB) //sort string ascending
//         return -1 
//     if (titleA > titleB)
//         return 1
//     return 0 //de
// })


    

// console.log(findNotes(notes, 'work'))
console.log(sortNotes)

// const findNote = function (notes, noteTitle) { // defines a function that will find a note that is passed into it
    
//     //the variable index will store the note found if true, otherwise it will store -1
//     const index = notes.findIndex(function (note, index) { // not using index here, it's just a reminder that you have access to it if needed
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//         // compares notes against what was passed into noteTitle. returns true if found, false if not
//     }) // this code block is its own module. it will then be used by the function it is inside

//     return notes[index] // returns what is stored in const index
// }


// const note = findNote(notes, 'Office modification')
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)