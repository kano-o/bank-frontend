import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinkontoComponent } from './meinkonto.component';

describe('MeinkontoComponent', () => {
  let component: MeinkontoComponent;
  let fixture: ComponentFixture<MeinkontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinkontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinkontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
