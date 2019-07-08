import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-add-zone-form',
  templateUrl: './add-zone-form.component.html',
  styleUrls: ['./add-zone-form.component.css']
})
export class AddZoneFormComponent implements OnInit {
  public selectedZone: string;
  public zones: string[];

  constructor(public timeService: TimeService) {}

  ngOnInit() {
    this.zones = this.timeService.moment.tz.names();
  }
}
