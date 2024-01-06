import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEventComponent } from './space-event.component';

describe('SpaceEventComponent', () => {
  let component: SpaceEventComponent;
  let fixture: ComponentFixture<SpaceEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
