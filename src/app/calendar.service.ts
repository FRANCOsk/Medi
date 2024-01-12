import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './calendar.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(
      'http://pumec.zapto.org:8000/orders/?start_date=2023-11-13T11:44:21.008Z&end_date=2023-12-13T11:44:21.008Z'
    );
  }
}
