import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSubPostsComponent } from './load-sub-posts.component';

describe('LoadSubPostsComponent', () => {
  let component: LoadSubPostsComponent;
  let fixture: ComponentFixture<LoadSubPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSubPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSubPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
