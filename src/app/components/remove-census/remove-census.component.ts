import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-remove-census',
  templateUrl: './remove-census.component.html',
  //styleUrls: ['./remove-census.component.css']
})
export class RemoveCensusComponent implements OnInit {

  getId: any;
  deleteForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.deleteForm = this.formBuilder.group({
      id: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      resident_count: [''],
      census_year: [''],
      assessor: ['']
    });

    this.crudService.GetCensus(this.getId).subscribe(res => {
      this.deleteForm.setValue({
        id: res['_id'],
        address: res['address'],
        city: res['city'],
        state: res['state'],
        zip: res['zip'],
        resident_count: res['resident_count'],
        census_year: res['census_year'],
        assessor: res['assessor']
      });
    });

    this.crudService.RemoveCensus(this.getId)
   }

  ngOnInit(): void { }

  onDelete(): any {
    //call the method to actually remove the census
    this.crudService.RemoveCensus(this.getId)
      .subscribe(() =>{
        //send the user back to the list of census
        this.ngZone.run(() => this.router.navigateByUrl('census-list'))
      }, (err) => {
        console.log(err)
      })
  }
}
