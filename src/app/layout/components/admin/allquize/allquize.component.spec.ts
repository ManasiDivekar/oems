import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquizeComponent } from './allquize.component';

describe('AllquizeComponent', () => {
  let component: AllquizeComponent;
  let fixture: ComponentFixture<AllquizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllquizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllquizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
