import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreservesComponent } from './allreserves.component';

describe('AllreservesComponent', () => {
  let component: AllreservesComponent;
  let fixture: ComponentFixture<AllreservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
