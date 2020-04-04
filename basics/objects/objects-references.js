let myAccount = {
    name : 'Andrew Martin',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//add income
let addIncome = function (account, amount) {
    account.income = account.income + amount
}
// reset account
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
// getIncomeSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return`Account for ${account.name} has $${balance}, $${account.income} in income, and $${account.expenses} in expenses.`
}
// account for andrew has $900, in income, $100 in expenses



addExpense(myAccount, 200)
console.log(myAccount)
addIncome(myAccount, 1000)
console.log(myAccount)

getAccountSummary(myAccount)


