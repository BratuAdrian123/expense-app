import { Component, EventEmitter, Output } from '@angular/core';
import { Expense } from '../../interfaces/expense';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  expenseInput = '';
  @Output() addExpenseChildEvent = new EventEmitter<Expense>();

  submitExpense() {
    console.log('ar trebui sa trimit catre parinte: ', this.expenseInput);
  }
}
