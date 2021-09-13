import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuPostComponent } from './cu-post.component';

describe('CuPostComponent', () => {
  let component: CuPostComponent;
  let fixture: ComponentFixture<CuPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
