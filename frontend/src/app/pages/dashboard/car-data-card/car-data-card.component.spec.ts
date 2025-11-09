// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDataCardComponent } from './car-data-card.component';

describe('CarDataCardComponent', () => {
  let component: CarDataCardComponent;
  let fixture: ComponentFixture<CarDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
