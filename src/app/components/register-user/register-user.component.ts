/*
    TODO:
      get user details:
        firstname
        lastname
        username
        password
        email
      save all to db
      validate
        email is valid format and not already used
        username doesnt already exist
      hash password
      imply 
        suspended = false
        role = 2 (user)
*/

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  isContractor: boolean = false;
  userForm: FormGroup;
  contractorForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,     
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { 
    this.contractorForm = this.formBuilder.group({ 
      companyname: [''],
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      email: ['']
    });

    this.userForm = this.formBuilder.group({ 
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      email: ['']
    })
  }

  onSubmit(): any {

    if (this.isContractor) {  this.crudService.AddContractor(this.contractorForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/home'))
      }) }

    this.crudService.AddUser(this.userForm.value)
    .subscribe(() => {
      console.log('Data added successfully')
      this.ngZone.run(() => this.router.navigateByUrl('/home'))
    })
  }

  ngOnInit(): void {
  }

  switchToUser() {
    this.isContractor = false;
    console.log(`switch to user ${this.isContractor}`)
  }

  switchToContractor() {
    this.isContractor = true;
  }

}
