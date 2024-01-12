import { Component, Input } from '@angular/core';
import { Order } from '../calendar.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
@Input('order') order: Order | undefined;

getTime(date: Date | undefined): string{
  return date ? new Date(date).toLocaleTimeString() : '';
}

}
