let add = function (a, b, c) {
    return a + b + c
}

let result = add (10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score: ' + score 
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challenge area
// tip calculator that uses default values
// total for bill, percentage you want to tip
// set a default tip percentage .2

let getTip = function (total, tipPercentage = .2) {
    return tipAmount = total * tipPercentage
}

let myTip = getTip(42.50, .10)
console.log(myTip)