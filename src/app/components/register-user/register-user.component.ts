/*
    TODO:
      -validate forms

      -get user details:
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

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  userForm: any;
  contractorForm: any;

  constructor(
    private formBuilder: FormBuilder,     
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private userService: UserService,
    private contractorService: ContractorService) { 

  
  }

  ngOnInit(): void {
    this.userForm =   this.formBuilder.group({ 
      firstname: [''],
      lastname: [''],
      username: ['',  Validators.pattern(/^[^\s]+$/)],
      password: ['', Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?@+\-/\\"]).{8,20}$/)],
      email: ['', [Validators.required, Validators.email]]
    });
    this.contractorForm = this.formBuilder.group({ 
      companyname: [''],
      firstname: [''],
      lastname: [''],
      username: [''],
      password: ['', Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?@+\-/\\"]).{8,20}$/)],
      email: ['', [Validators.required, Validators.email]]
    })
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

  removeWhiteSpace(input: any) {
    input.value = input.value.replace(/ /g, '');
  }

  //check if warning is hidden
  isFormValid(id: string){
    const control = this.isContractor ? this.contractorForm.get(id) : this.userForm.get(id);
    
    this.toggleWarning(id);
    return control.pristine ? control.pristine : control.valid;
  }

  toggleWarning(id: string){
    const control = this.isContractor ? this.contractorForm.get(id) : this.userForm.get(id);
    const badPattern = control.errors?.pattern;
    const isRequired = control.errors?.required;
    let warningMsg = '';

    if (isRequired) {
      warningMsg = 'Required';
    }

    if (badPattern) {

      console.log(badPattern.requiredPattern === '/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?@+\\-/\\\\"]).{8,20}$/')
        
      switch (badPattern.requiredPattern){
          case '/^[^\\s]+$/':
            warningMsg = 'Space not allowed'
            break;
      
          case '/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?@+\\-/\\\\"]).{8,20}$/':
            warningMsg = 'Invalid Password'
            break;

          default:
            ;
        }
    }

    return warningMsg;
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

  testLogin() {
    console.log(this.userForm,  this.userForm.get('password')?.errors);
   
  }


 /*  get user() {
    return {
      firstname: this.userForm.get('firstname'), 
      lastname:  this.userForm.get('lastname')};

  } */


}
