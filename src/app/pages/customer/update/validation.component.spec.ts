import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdatecustomerComponent } from './validation.component';

describe('UpdatecustomerComponent', () => {
  let component: UpdatecustomerComponent;
  let fixture: ComponentFixture<UpdatecustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
