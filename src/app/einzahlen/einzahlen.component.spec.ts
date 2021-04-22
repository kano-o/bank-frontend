import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzahlenComponent } from './einzahlen.component';

describe('EinzahlenComponent', () => {
  let component: EinzahlenComponent;
  let fixture: ComponentFixture<EinzahlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinzahlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinzahlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
