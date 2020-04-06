todos = ['grocery shop', 'feed the cat', 'walk the dog', 'some stuff', 'and maybe icecream']

todos.splice(2, 1)
todos.push('a new note for the end?')
todos.shift()

console.log(`You have ${todos.legth} todos!`)

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})