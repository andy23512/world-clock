import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoneSlotComponent } from './zone-slot/zone-slot.component';
import { NgxsModule } from '@ngxs/store';
import { ZoneState } from './state/zone.state';
import { AddZoneFormComponent } from './add-zone-form/add-zone-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [AppComponent, ZoneSlotComponent, AddZoneFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ZoneState]),
    MatCardModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
