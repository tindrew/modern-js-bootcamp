

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
        debugger
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
// get the DOM elements for an individual note
// generateTodos
const generateTodoDOM = function (todo) {
    const newParagraph = document.createElement('p');
        newParagraph.textContent = todo.text;
        return newParagraph;
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