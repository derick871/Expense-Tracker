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
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const expenses = [];

// expenseManager.js
import { Expense } from "./expense.js";

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

  getAllExpenses() {
    return [...this.expenses];
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter(exp => exp.id !== id);
  }

  getTotalExpensesByDate(date) {
    return this.expenses
      .filter(exp => exp.date.toDateString() === new Date(date).toDateString())
      .reduce((total, exp) => total + exp.amount, 0);
  }

  getExpensesByCategory(category) {
    return this.expenses.filter(exp => exp.category === category);
  }
}

const expense = manager.addExpense(500, "Food", "Lunch");

const { amount, category } = expense;
console.log(amount, category);

// app.js
import { ExpenseManager } from "./expenseManager.js";

const manager = new ExpenseManager();

window.addExpense = function () {
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  manager.addExpense(amount, category, description);

  renderExpenses();
};