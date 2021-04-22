import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuszahlenComponent } from './auszahlen.component';

describe('AuszahlenComponent', () => {
  let component: AuszahlenComponent;
  let fixture: ComponentFixture<AuszahlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuszahlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuszahlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
