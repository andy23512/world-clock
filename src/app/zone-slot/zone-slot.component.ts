import { Component, Input } from '@angular/core';
import { TimeService } from '../time.service';
import { Zone } from '../state/zone.state';
import * as moment from 'moment';
import 'moment-timezone';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-zone-slot',
  templateUrl: './zone-slot.component.html',
  styleUrls: ['./zone-slot.component.sass']
})
export class ZoneSlotComponent {
  @Input() public zone: Zone;
  public moment$: Observable<moment.Moment>;
  public time = new FormControl();

  get zoneString() {
    return this.zone.name === 'Local'
      ? this.timeService.moment.tz.guess()
      : this.zone.name;
  }

  constructor(public timeService: TimeService) {
    this.moment$ = this.timeService.moment$.pipe(
      map(time => time.clone().tz(this.zoneString))
    );
  }
}
