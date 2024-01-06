import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHabitationComponent } from './carrousel-habitation.component';

describe('CarrouselHabitationComponent', () => {
  let component: CarrouselHabitationComponent;
  let fixture: ComponentFixture<CarrouselHabitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselHabitationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
