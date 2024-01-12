import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Order } from '../calendar.model';
import { OrderComponent } from '../order/order.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [DatePipe, OrderComponent, CommonModule, MatCardModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
})
export class DayComponent {
  @Input('inputDate') inputDate: Date = new Date();
  @Input('orders') orders: Order[] = [];

  constructor(private date: DatePipe) {}

  getDate(): Date {
    return new Date('2024-01-01');
  }
}
