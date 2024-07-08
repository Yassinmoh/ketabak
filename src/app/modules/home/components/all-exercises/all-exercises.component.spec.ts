import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExercisesComponent } from './all-exercises.component';

describe('DragDropComponent', () => {
  let component: AllExercisesComponent;
  let fixture: ComponentFixture<AllExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
