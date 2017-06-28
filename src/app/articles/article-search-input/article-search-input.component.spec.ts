import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchInputComponent } from './article-search-input.component';

describe('ArticleSearchInputComponent', () => {
  let component: ArticleSearchInputComponent;
  let fixture: ComponentFixture<ArticleSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
