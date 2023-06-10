import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllactivequizComponent } from './allactivequiz.component';

describe('AllactivequizComponent', () => {
  let component: AllactivequizComponent;
  let fixture: ComponentFixture<AllactivequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllactivequizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllactivequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
