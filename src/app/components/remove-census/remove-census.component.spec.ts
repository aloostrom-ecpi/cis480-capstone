import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCensusComponent } from './remove-census.component';

describe('RemoveCensusComponent', () => {
  let component: RemoveCensusComponent;
  let fixture: ComponentFixture<RemoveCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCensusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
