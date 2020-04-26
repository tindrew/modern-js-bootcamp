// 1. Wire up button event
// 2.Remove todo by ID
3// Save and rerender the todos list

// fetch existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}
// save todos to localStorage
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Find todos by the index and delete them
const deleteTodos = function (id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// Render application todos based on filters
const renderedTodos = function (todos, filters) {
    // filters todos based on text entered in the box
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.filteredText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    }) 

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
// get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox);
        

    //Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'delete'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        deleteTodos(todo.id);
        saveTodos();
        renderedTodos(todos, filters);
    })

  return todoEl
     
}


// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    // Creates a summary statement ******************
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
    // 
}