import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizeComponent } from './addquize.component';

describe('AddquizeComponent', () => {
  let component: AddquizeComponent;
  let fixture: ComponentFixture<AddquizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
