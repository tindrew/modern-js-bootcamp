todos = ['grocery shop', 'feed the cat', 'walk the dog', 'some stuff', 'and maybe icecream']

todos.splice(2, 1)
todos.push('a new note for the end?')
todos.shift()

for (let count = 0; count < todos.length - 1; count ++) {
    console.log(`${ count + 1 } ${ todos[count] }`)
}

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${ num }: ${ todo }`)
}