import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberweisenComponent } from './ueberweisen.component';

describe('UeberweisenComponent', () => {
  let component: UeberweisenComponent;
  let fixture: ComponentFixture<UeberweisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeberweisenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberweisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
