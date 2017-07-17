import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesRefreshComponent } from './articles-refresh.component';

describe('ArticlesRefreshComponent', () => {
  let component: ArticlesRefreshComponent;
  let fixture: ComponentFixture<ArticlesRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
