const notes = ['note 1', 'note 2', 'note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

// console.log(`You have ${todos.length} todos.`)
//     todos.forEach(function (item, index) {
//         console.log(`${index + 1}: ${item}`)
// })

// Counting....
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

for (let count = 0; count < notes.length; count++) {
    console.log(`${ count + 1 }: ${ notes[count] }`)
    console.log(count + 1)
}
