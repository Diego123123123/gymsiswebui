import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreserveComponent } from './editreserve.component';

describe('EditreserveComponent', () => {
  let component: EditreserveComponent;
  let fixture: ComponentFixture<EditreserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
