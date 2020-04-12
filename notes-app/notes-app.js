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

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('create a new note')
})

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll(".note").forEach(function(note) {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})