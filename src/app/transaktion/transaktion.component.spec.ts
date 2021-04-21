import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaktionComponent } from './transaktion.component';

describe('TransaktionComponent', () => {
  let component: TransaktionComponent;
  let fixture: ComponentFixture<TransaktionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaktionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaktionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
