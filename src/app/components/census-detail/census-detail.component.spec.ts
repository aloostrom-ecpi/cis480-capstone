import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusDetailComponent } from './census-detail.component';

describe('CensusDetailComponent', () => {
  let component: CensusDetailComponent;
  let fixture: ComponentFixture<CensusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
