let myBook = {
    title: 1984,
    author: 'George Orwell',
    pageCount: 387
}

let otherBook = {
    title: 'A Peoples Mystery',
    author: 'Howard Zinn',
    pageCount: 854
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }

    console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)