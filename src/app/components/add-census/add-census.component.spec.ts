import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCensusComponent } from './add-census.component';

describe('AddCensusComponent', () => {
  let component: AddCensusComponent;
  let fixture: ComponentFixture<AddCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCensusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
