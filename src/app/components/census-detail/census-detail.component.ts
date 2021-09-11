import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-census-detail',
  templateUrl: './census-detail.component.html',
  //styleUrls: ['./census-detail.component.css']
})

export class CensusDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetCensus(this.getId).subscribe(res => {
      this.updateForm.setValue({
        address: res['address'],
        city: res['city'],
        state: res['state'],
        zip: res['zip'],
        resident_count: res['resident_count'],
        census_year: res['census_year'],
        assessor: res['assessor']
      });
    });

    this.updateForm = this.formBuilder.group({
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      resident_count: [''],
      census_year: [''],
      assessor: ['']
    });
   }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateCensus(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('census-list'))
      }, (err) => {
        console.log(err);
      });
  }

}
