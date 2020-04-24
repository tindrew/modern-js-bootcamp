
let todos = getSavedTodos()

// Filter todos functionality
const filters = {
    filteredText: '',
    hideCompleted: false
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
    saveTodos(todos)
    renderedTodos(todos, filters)
    e.target.elements.todoText.value = ''
})
//hide and unhide completed todos
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderedTodos(todos, filters)
})





   















