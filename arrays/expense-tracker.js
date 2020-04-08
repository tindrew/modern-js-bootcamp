// first challenge
const account = {

    name: 'Andrew Martin',
    expenses: [],
    income: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    
        
    getAccountSummary: function (){
       let totalExpenses = 0;
       let totalIncome = 0;
       this.expenses.forEach(function (expense) {
           totalExpenses = totalExpenses + expense.amount 
       });

       this.income.forEach(function (income) {
           totalIncome = totalIncome + income.amount
       })

       accountBalance = totalIncome - totalExpenses

       return `${this.name} has $${totalExpenses} in expenses, ${totalIncome} in income, and the balance is $${accountBalance}
        left after expenses.`
    }       
      
}



account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
// console.log(account.getAccountSummary());
console.log(account.expenses)
console.log(account.getAccountSummary())
account.addIncome('Paycheck', 450)
account.addIncome('Amazon Payment', 750)
console.log(account.income)
console.log(account.getAccountSummary());