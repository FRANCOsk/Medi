import { Component, OnInit } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarService } from '../calendar.service';
import { Order } from '../calendar.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  imports: [
    DayComponent,
    CommonModule,
    MatCardModule,
    DatePipe,
    MatButtonModule,
  ],
})
export class CalendarComponent implements OnInit {
  data: Order[] = [];
  dates: Date[] = [];
  datePipe: DatePipe = new DatePipe('en-US');
  month: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();

  constructor(private calendarService: CalendarService) {

  }
  ngOnInit() {
    this.calendarService.getData().subscribe((data) => {
      this.data = data;
      
    });

    this.setCalendar();
  }

  getOrders(date: Date): Order[] {
    return this.data.filter(
      (order) => new Date(order.date).toDateString() === date.toDateString()
    );
  }

  getDate(noOfWeek: number, year: number): Date[] {
    return this.dates.filter((d) => d.getFullYear() === year);
  }

  private setToMonday(date: Date): Date {
    const day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
  }

  setMonth(previous: boolean): void {
    this.month = previous ? this.month - 1 : this.month + 1;
    if (this.month == 0) {
      this.month = 12;
      this.year = this.year - 1;
    } else if (this.month == 13) {
      this.month = 1;
      this.year = this.year + 1;
    }

    this.setCalendar();
  }

  setCalendar(): void {
    this.dates = [];
    
    var d = new Date(this.year, this.month - 1, 0);
    
    var d2 = this.setToMonday(
      new Date(
        this.month + 1 > 12 ? this.year + 1 : this.year,
        this.month + 1 > 12 ? 1 : this.month,
        1
      )
    );
    var firstDate = this.setToMonday(new Date(this.year, this.month - 1, 1));
    const noOfDays =
      Math.ceil(Math.abs(d2.getTime() - d.getTime()) / (1000 * 3600 * 24)) + 1 + 
      this.getNoDaysToMonday(new Date(this.year, this.month - 1, 1));
    //+ getNoDaysToMonday()
    
    for (let i = 0; i < 35; i++) {
      this.dates.push(new Date(firstDate));
      firstDate.setDate(firstDate.getDate() + 1);
    }
    const week = this.datePipe.transform(Date.now(), 'W');
    this.getDate(Number(week), 2023);
  }

  private getNoDaysToMonday(date: Date): number {
  
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilMonday = (1 + 7 - dayOfWeek) % 7;

    if (daysUntilMonday === 0) {
        // If today is Monday, return 7 for next week's Monday
        return 7;
    } else {
        return daysUntilMonday;
    }
}   
    
    
 /*   const day = date.getDay() || 7;
    if (day!== 1) date.setHours(-24 * (day - 1));

    const startDate = new Date();
    if( day !== 1 ){
            startDate.setHours(-24 * (day - 1));
    }
    const vysledok = Math.ceil(Math.abs(date.getTime() - startDate.getTime())/ (1000 * 3600 * 24))+1?? 1;
    console.log('pocet dni do pondelka', vysledok); 
        return vysledok;
    }*/
}
