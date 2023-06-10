import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetquizcComponent } from './getquizc.component';

describe('GetquizcComponent', () => {
  let component: GetquizcComponent;
  let fixture: ComponentFixture<GetquizcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetquizcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetquizcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
