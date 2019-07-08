import { Component } from '@angular/core';
import { ZoneState, ZoneStateModel } from './state/zone.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Select(ZoneState) zones$: Observable<ZoneStateModel>;
}
