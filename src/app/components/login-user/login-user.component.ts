/*
    TODO:
      login a user who has already registered
      this needs to set some kind of session storage
        or something similar to address whether user
        is admin or user
*/

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ContractorService } from 'src/app/service/contractor.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  errorMsg?: string;
  isLoggedIn: boolean = localStorage.getItem("session") ? true : false;
  isContractor: boolean = false;
  user = this.isLoggedIn ? JSON.parse(localStorage.session) : '';
  loginForm: FormGroup;

  constructor(
    private userService: UserService, 
    private contractorService: ContractorService, 
    private router: Router,
    public formBuilder: FormBuilder) { 
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: ['']
      })
    }

  ngOnInit() {
  }

  ngOnChanges() {}

  async onSubmit() {
    let success;

    if (!this.isContractor){
      console.log(this.loginForm.value)
     success = await this.userService.login(this.loginForm.value)
    } else {
     success = await this.contractorService.login(this.loginForm.value)
    }
    
    success.subscribe( data => {
      this.userService.data = data; 
      localStorage.setItem("session", JSON.stringify(data));
      
      this.router.navigateByUrl('/')},


        err => {console.log(err, "Invalid login"); 
        this.errorMsg = "Invalid login"});

  }

  logout() :void {
    localStorage.removeItem("session")
    this.isLoggedIn = false;
    localStorage.setItem("isContractor", "false");
    console.log(localStorage.isContractor)
  }

  toggleContractor() : void {
    this.isContractor = !this.isContractor
    localStorage.setItem("isContractor", JSON.stringify(this.isContractor));
  }

}
