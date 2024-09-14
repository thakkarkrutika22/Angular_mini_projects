import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeATourComponent } from './take-a-tour.component';

describe('TakeATourComponent', () => {
  let component: TakeATourComponent;
  let fixture: ComponentFixture<TakeATourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeATourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeATourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
