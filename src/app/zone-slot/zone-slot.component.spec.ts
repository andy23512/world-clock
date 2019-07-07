import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSlotComponent } from './zone-slot.component';

describe('ZoneSlotComponent', () => {
  let component: ZoneSlotComponent;
  let fixture: ComponentFixture<ZoneSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
