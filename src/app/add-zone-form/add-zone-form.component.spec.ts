import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoneFormComponent } from './add-zone-form.component';

describe('AddZoneFormComponent', () => {
  let component: AddZoneFormComponent;
  let fixture: ComponentFixture<AddZoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
