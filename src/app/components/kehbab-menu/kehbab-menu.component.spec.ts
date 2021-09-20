import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KehbabMenuComponent } from './kehbab-menu.component';

describe('KehbabMenuComponent', () => {
  let component: KehbabMenuComponent;
  let fixture: ComponentFixture<KehbabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KehbabMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KehbabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
