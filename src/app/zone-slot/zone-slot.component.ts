import { Component, Input } from '@angular/core';
import { TimeService } from '../time.service';
import { Zone } from '../state/zone.state';

@Component({
  selector: 'app-zone-slot',
  templateUrl: './zone-slot.component.html',
  styleUrls: ['./zone-slot.component.sass']
})
export class ZoneSlotComponent {
  @Input() public zone: Zone;

  get zoneString() {
    return this.zone.name === 'Local'
      ? this.timeService.moment.tz.guess()
      : this.zone.name;
  }

  constructor(public timeService: TimeService) {}
}
