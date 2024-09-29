import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListsComponent } from './components/expense-lists/expense-lists.component';
import { ExpenseTotalComponent } from './components/expense-total/expense-total.component';
import { Expense } from './interfaces/expense';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExpenseFormComponent,
    ExpenseListsComponent,
    ExpenseTotalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  expensesParent: Expense[] = [
    {
      name: 'Cumparaturi LIDL',
      amount: 200,
    },
    {
      name: 'Cumparaturi Penny',
      amount: 300,
    },
    {
      name: 'Cumparaturi Piata',
      amount: 150,
    },
  ];
  totalParent: number = 500;

  handleAddExpense(expense: Expense) {
    this.expensesParent.push(expense);
    this.totalParent += expense.amount;
  }
}
