// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

for (let count = 0; count < notes.length; count++) {
    console.log(`${ count + 1 }: ${ notes[count] }`)
}

for (let count = 0; count < todos.length - 1; count ++) {
    console.log(`${ count + 1 } ${ todos[count] }`)
}

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${ num }: ${ todo }`)
}