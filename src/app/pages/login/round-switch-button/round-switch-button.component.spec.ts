// Louvado seja o Senhor

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundSwitchButtonComponent } from './round-switch-button.component';

describe('RoundSwitchButtonComponent', () => {
  let component: RoundSwitchButtonComponent;
  let fixture: ComponentFixture<RoundSwitchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundSwitchButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
