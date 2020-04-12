const todos = [ {
    text: 'buy food',
    completed: true
}, {
    text: 'feed the cat',
    completed: false
}, {
    text: 'some stuff',
    completed: true
}, {
    text: 'walk the dog',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
})

todos.forEach(function (todo) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = todo.text;
    document.querySelector('body').appendChild(newParagraph)
})

    
const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// listen for new todo creation
document.querySelector('button').addEventListener( 'click', function(e) {
    e.target.textContent = 'I\'ve been clicked!'
})
    













