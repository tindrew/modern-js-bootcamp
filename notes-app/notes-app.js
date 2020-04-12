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

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelectorAll('button')[1].addEventListener('click', function() {
    console.log('delete all notes')
})