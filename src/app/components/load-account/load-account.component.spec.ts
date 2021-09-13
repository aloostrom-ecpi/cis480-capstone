import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAccountComponent } from './load-account.component';

describe('LoadAccountComponent', () => {
  let component: LoadAccountComponent;
  let fixture: ComponentFixture<LoadAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
