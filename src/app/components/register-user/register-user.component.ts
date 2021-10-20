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
import { UserService } from 'src/app/service/user.service';
import { ContractorService } from 'src/app/service/contractor.service';

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
    private crudService: CrudService,
    private userService: UserService,
    private contractorService: ContractorService) { 
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

  async onSubmit() {

    if (this.isContractor) { 
      await this.crudService.AddContractor(this.contractorForm.value)
      .subscribe(()=>{
        this.contractorService.login(this.contractorForm.value).subscribe( data => {
          localStorage.setItem("session", JSON.stringify(data));
          this.router.navigateByUrl('/')},
    
    
            err => {console.log(err, "Invalid login"); }
            );
      });

      


    }

    if (!this.isContractor){
      await this.crudService.AddUser(this.userForm.value)
      .subscribe(()=>{
        this.userService.login(this.userForm.value).subscribe( data => {
          this.userService.data = data; 
          localStorage.setItem("session", JSON.stringify(data));       
          this.router.navigateByUrl('/')},
    
    
            err => {console.log(err, "Invalid login"); }
            );

      });

     
    }

    



  }

  testLogin(username: string, ) {

  }

  ngOnInit(): void {
  }

  switchToUser() {
    this.isContractor = false;
    localStorage.setItem("isContractor", 'false');
    console.log(`switch to user ${this.isContractor}`)
  }

  switchToContractor() {
    this.isContractor = true;
    localStorage.setItem("isContractor", 'true');
  }

}
