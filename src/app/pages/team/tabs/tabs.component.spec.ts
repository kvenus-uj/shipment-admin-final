import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MytabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: MytabsComponent;
  let fixture: ComponentFixture<MytabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MytabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
