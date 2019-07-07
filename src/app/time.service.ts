import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeSubject = new BehaviorSubject<moment.Moment>(moment());
  public time$ = this.timeSubject.asObservable();
  public moment = moment;

  constructor() {}
}
