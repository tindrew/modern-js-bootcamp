//students score, total possible score
// 15/20 -> You got a c (75%)!
// A 90-100 b 80 - 89  C 70 - 79  D 60 - 69 
// pass in score and total possible score

let gradeCalc = function (studentScore, possibleScore) {

    let studentGrade = studentScore * 100 / possibleScore 
    let letterGrade = ''
    // this gives the percentage
    if (studentGrade >= 90 ) {
        letterGrade = 'A'
    } else if (studentGrade >= 80) {
        letterGrade = 'B'
    } else if (studentGrade >= 70) {
        letterGrade = 'C'
    } else if (studentGrade >= 60) {
        letterGrade = 'D'

    } else {
        return "You got an F!"
    }
    return `You got an ${letterGrade} (${studentGrade}%)!`
}

let myGrade1 = gradeCalc(80, 100)
let myGrade2 = gradeCalc(70, 100)
let myGrade3 = gradeCalc(60, 100)
let myGrade4 = gradeCalc(45, 100)


console.log(myGrade1)
console.log(myGrade2)
console.log(myGrade3)
console.log(myGrade4)






