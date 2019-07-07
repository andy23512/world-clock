import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-zone-slot',
  templateUrl: './zone-slot.component.html',
  styleUrls: ['./zone-slot.component.sass']
})
export class ZoneSlotComponent implements OnInit {
  constructor(public timeService: TimeService) {}

  ngOnInit() {}
}
