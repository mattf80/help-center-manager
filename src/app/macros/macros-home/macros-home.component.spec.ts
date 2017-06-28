import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosHomeComponent } from './macros-home.component';

describe('MacrosHomeComponent', () => {
  let component: MacrosHomeComponent;
  let fixture: ComponentFixture<MacrosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
