import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../interfaces/expense';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-lists.component.html',
  styleUrl: './expense-lists.component.css',
})
export class ExpenseListsComponent implements OnInit {
  @Input({ required: true }) expensesChildren!: Expense[];

  ngOnInit(): void {
    console.log(this.expensesChildren);
  }
}
