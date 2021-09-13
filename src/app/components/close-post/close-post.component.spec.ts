import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePostComponent } from './close-post.component';

describe('ClosePostComponent', () => {
  let component: ClosePostComponent;
  let fixture: ComponentFixture<ClosePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
