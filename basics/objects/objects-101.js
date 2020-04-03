let myBook = {
    title: 1984,
    author: 'George Orwell',
    pageCount: 387
}

console.log(myBook.title)
console.log(`${myBook.title}  was written by ${myBook.author} in the 1930s.`)


// model a person
//name, age, location

let person = {
    name: 'Andrew',
    age: 41,
    location: 'United States'
}

console.log(`Hello, my name is ${person.name}, I'm ${person.age}, and I live in the ${person.location}.`)

person.age = person.age + 3

console.log(`Hello, my name is ${person.name}, I'm ${person.age}, and I live in the ${person.location}.`)

