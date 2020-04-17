let notes = []

// setup search text to display 
const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

// render the notes to the screen based on filters
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText)
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach( function (note) {
        const noteEl = document.createElement('p')
            
        if(note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed Note'
            console.log('is this firing')
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (event) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener('change', function(event) {
    console.log(event.target.value)
})

