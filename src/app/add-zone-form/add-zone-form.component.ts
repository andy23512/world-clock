import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { AddZone } from '../state/zone.actions';

@Component({
  selector: 'app-add-zone-form',
  templateUrl: './add-zone-form.component.html',
  styleUrls: ['./add-zone-form.component.css']
})
export class AddZoneFormComponent implements OnInit {
  public zones: string[];
  public zoneCtrl: FormControl = new FormControl();
  public zoneFilterCtrl: FormControl = new FormControl();
  public filteredZones$: Observable<string[]>;

  constructor(public timeService: TimeService, private store: Store) {}

  ngOnInit() {
    this.zones = this.timeService.moment.tz.names();
    this.filteredZones$ = this.zoneFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(v =>
        v ? [...this.zones.filter(z => z.indexOf(v) >= 0)] : [...this.zones]
      )
    );
  }

  public addZone(event: MouseEvent) {
    event.stopPropagation();
    if (this.zoneCtrl.value) {
      this.store.dispatch(new AddZone(this.zoneCtrl.value));
      this.zoneCtrl.reset();
    }
  }
}
