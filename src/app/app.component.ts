import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from "./calendar/calendar.component";
import { DayComponent } from './day/day.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule, CalendarComponent, DatePipe, MatCardModule, DayComponent, HttpClientModule, OrderComponent],
    providers: [HttpClientModule]       
})
export class AppComponent {
  
  title = 'Medi';

    

}

