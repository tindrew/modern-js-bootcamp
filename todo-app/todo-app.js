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
    filteredText: '',
    hideCompleted: false
}

const renderedTodos = function (todos, filters) {
    // filters todos based on text entered in the box
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.filteredText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    // update renderedTodos to reder based on the new filter
    
        // if (filters.hideCompleted) {
        //     return !todo.completed
        // } else {
        //     return true;
        // }
    
    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })
    
    // Creates a summary statement ******************
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

document.querySelector('#create-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push ({
        text: e.target.elements.todoText.value,
        completed: false
    })
    renderedTodos(todos, filters)
    e.target.elements.todoText.value = ''
})
//hide and unhide completed todos
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderedTodos(todos, filters)
})



// Checkbox: <input type="checkbox" id="myCheck"  onclick="myFunction()">

// <p id="text" style="display:none">Checkbox is CHECKED!</p>



// // create a checkbox and setup even listener "hide completed" done
// // create new hideCompleted filter (default false)
// // update hideCompleted and rerender list on checkbox change
// // Setup renderTodos to remove completed items

   




// create a form with a single input for todo text done
// setup a submit handler and cancel the default action done
// ad a new item to the todos array with that text data (completed value of false) where the text was typed into the form field
// rerender the application
// clear the input field value











