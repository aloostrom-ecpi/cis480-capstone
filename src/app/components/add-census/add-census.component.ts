import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css']
})

export class AddCensusComponent implements OnInit {

  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.censusForm = this.formBuilder.group({
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      resident_count: [''],
      census_year: [''],
      assessor: ['']
    })
   }

  ngOnInit(): void {  }

  onSubmit(): any {
    this.crudService.AddCensus(this.censusForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/census-list'))
      }, (err) => {
        console.log(err);
      });
  }

}
