// expense.js
export class Expense {
  constructor(amount, category, description, date = new Date()) {
    this.id = Date.now();
    this.amount = amount;
    this.category = category;
    this.description = description;
    this.date = date;
  }
}
const expense = new Expense(1000,-("Food", "Dinner at restaurant"));
console.log(expense);


// expenseManager.js
export class ExpenseManager {
  constructor() {
    this.expenses = [];
  }

  addExpense(...expenseDetails) {
    const [amount, category, description, date] = expenseDetails;
    const newExpense = new Expense(amount, category, description, date);
    
    this.expenses = [...this.expenses, newExpense]; // spread
    return newExpense;
  }
  
}
const expenses =[
    {id: 1, amount: 1000, category: "lunch", description: "lunch in restaurant", date: new Date()},
    {id: 2, amount: 1500, category: "Food", description: "sugar;25kg ", date: new Date()},
    {id: 3, amount: 1200, category: "Food", description: "flour;10kg ", date: new Date()},
    {id: 4, amount: 300, category: "Food", description: "bread;5kg", date: new Date()},
    {id: 5, amount: 500, category: "Food", description: "meat;2kg", date: new Date()},
    {id: 6 , amount: 700, category: "Food", description: " cooking oil;3litres", date: new Date()},
    {id: 7, amount: 500, category: "utensils", description: "plates;10pieces", date: new Date()},
    {id: 8, amount: 1000, category: "utensils", description: "cups;20pieces", date: new Date()},
    {id: 9, amount: 2000, category: "utensils", description: "cooking pan;3pieces", date: new Date()},
    {id: 10, amount: 1500, category: "gas cylinder", description: "Buy:gas cylinder,1unit", date: new Date()},
    {id: 11, amount: 500, category: "Transport", description: "Bus fare", date: new Date()},
    {id: 12, amount: 200, category: "Entertainment", description: "Movie ticket", date: new Date()},
    {id: 13, amount: 15000, category: "rent", description: "monthly rent", date: new Date()}
];
console.log(expenses);
const totalExpenses = expenses.reduce((total, exp) => 80000 - exp.amount, 0);
console.log(totalExpenses);
//filter expense by category
const foodExpenses = expenses.filter(exp => exp.category === "Food");
console.log(foodExpenses);

const totalfoodExpenses = expenses.reduce((total, exp) => 50000 - exp.amount, 0);
console.log(totalfoodExpenses);

const totalutensilsExpenses = expenses.reduce((total, exp) => 25000 - exp.amount, 0);
console.log(totalutensilsExpenses);

    


