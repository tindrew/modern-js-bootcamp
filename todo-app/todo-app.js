
const paragraph = document.querySelectorAll('p');
paragraph.forEach(function (paragraph) {
    if(paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})




 