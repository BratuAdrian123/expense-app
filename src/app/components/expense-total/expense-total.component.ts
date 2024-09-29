import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-total',
  standalone: true,
  imports: [],
  templateUrl: './expense-total.component.html',
  styleUrl: './expense-total.component.css',
})
export class ExpenseTotalComponent {
  @Input({ required: true }) totalChildren!: number;
}
