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

// Filter todos functionality
const filters = {
    filteredText: ''
}

const renderedTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.filteredText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = todo.text;
        document.querySelector('#todos').appendChild(newParagraph)
    })
}

renderedTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.filteredText = e.target.value
    renderedTodos(todos, filters)
})
// ****end filter todos functionaltiy end****
document.addEventListener('#todo-text').addEventListener('submit', function(e) {
    
})




// create a form with a single input for todo text done
// setup a submit handler and cancel the default action
// add a new item to the todos array with that text data (completed value of false) where the text was typed into the form field
// rerender the application
// clear the input field value











