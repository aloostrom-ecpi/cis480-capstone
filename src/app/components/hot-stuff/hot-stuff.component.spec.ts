import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotStuffComponent } from './hot-stuff.component';

describe('HotStuffComponent', () => {
  let component: HotStuffComponent;
  let fixture: ComponentFixture<HotStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
