import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private momentSubject = new BehaviorSubject<moment.Moment>(moment());
  public moment$ = this.momentSubject.asObservable();
  public moment = moment;
}
