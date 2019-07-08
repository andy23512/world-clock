import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoneSlotComponent } from './zone-slot/zone-slot.component';
import { NgxsModule } from '@ngxs/store';
import { ZoneState } from './state/zone.state';
import { AddZoneFormComponent } from './add-zone-form/add-zone-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ZoneSlotComponent, AddZoneFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxsModule.forRoot([ZoneState]),
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
