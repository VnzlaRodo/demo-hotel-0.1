import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSpacesComponent } from './carrousel-spaces.component';

describe('CarrouselSpacesComponent', () => {
  let component: CarrouselSpacesComponent;
  let fixture: ComponentFixture<CarrouselSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselSpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
