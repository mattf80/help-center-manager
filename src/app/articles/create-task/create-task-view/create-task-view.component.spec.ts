import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskViewComponent } from './create-task-view.component';

describe('CreateTaskViewComponent', () => {
  let component: CreateTaskViewComponent;
  let fixture: ComponentFixture<CreateTaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
