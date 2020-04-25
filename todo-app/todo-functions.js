

// fetch existing todos from local storage
//getSavedTodos
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}
// save todos to localStorage
//saveTodos
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))

}
// Render application todos based on filters
// renderTodos
const renderedTodos = function (todos, filters) {
    // filters todos based on text entered in the box
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.filteredText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    
    
    // print todo text and todosCompleted


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    }) 

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}



// 1. Setup a root div
// // 2. Setup and append a checkbox (set type attribute)

// // someNode.setAttribute('type', 'checkbox)
// // 3. Setup and append a span (set text)

// // 4. Setup and append a button (set text)
//  





// get the DOM elements for an individual note
// generateTodos
// const generateTodoDOM = function (todo) {

//     const newParagraph = document.createElement('p');
//         newParagraph.textContent = todo.text;
//         return newParagraph;
// }


const generateTodoDOM = function (todo) {
    
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    //Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'delete'
    todoEl.appendChild(removeButton)

  return todoEl
     
}


    





// get the DOM elements for list summary
// generateSummaryDOM
const generateSummaryDOM = function (incompleteTodos) {
    // Creates a summary statement ******************
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
    // 
}