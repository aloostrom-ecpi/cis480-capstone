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

  createForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,     
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { 
    this.createForm = this.formBuilder.group({ 
      fName: [''],
      lName: [''],
      uName: [''],
      pass: [''],
      cPass: [''],
      email: ['']
    })
  }

  onSubmit() {
    this.crudService.AddUser(this.createForm.value)
      .subscribe(() => {
        console.log('Data added successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/home'))
      })
  }

  ngOnInit(): void {
  }

}
