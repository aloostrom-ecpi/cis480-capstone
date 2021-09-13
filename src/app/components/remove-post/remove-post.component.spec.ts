import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePostComponent } from './remove-post.component';

describe('RemovePostComponent', () => {
  let component: RemovePostComponent;
  let fixture: ComponentFixture<RemovePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
