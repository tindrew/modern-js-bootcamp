// const p = document.querySelector('p');
// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    // console.log(p.textContent)
    p.textContent = '*****'
})
