const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]
// setup search text to display 
const filters = {
    searchText: ''
}

// create, read, update, delete = CRUD
// localStorage.setItem ('location', 'Philadelphia') // Create
console.log(localStorage.getItem('location')); // Read


// render the notes to the screen based on filters
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText)
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach( function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('create a new note')
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener('change', function(e) {
    console.log(e.target.value)
})

