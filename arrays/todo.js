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

const sortTodos = function (todos) {
    todos.sort(function (a, b){
        
        if (!a.completed && b.completed) {
            return -1;
        
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    })
}


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