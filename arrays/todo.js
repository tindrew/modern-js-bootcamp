const todos = [ {
    text: 'buy food',
    completed: false
}, {
    text: 'feed the cat',
    completed: true
}, {
    text: 'some stuff',
    completed: false
}, {
    text: 'walk the dog',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]

// convert array to array of objects
//two properties: Text, and completed

//create a function that works with the array of objects
// make it allow to remove todo based on text value
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
       return todo.text.toLowerCase() === todoText.toLowerCase()   
    })
    if(index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    // find todos with the completed set to false
    return todos.filter(function (todos) {
         if (todos.completed != true) {
             return todos;
         }
    }) 
}

// console.log(getThingsTodo(todos))

sortTodos(todos)
console.log(todos)


// const todo = deleteTodo(todos, 'buy food')
// console.log(todo)
// console.log(todos)


// deleteTodo(todos, 'buy food')
// console.log(todos)