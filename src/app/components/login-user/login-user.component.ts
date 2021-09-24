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

  constructor(
    private userService: UserService, 
    private contactorService: ContractorService, 
    private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {}

  async login(username : string, password : string) {
    let success;

    if (!this.isContractor){
     success = await this.userService.login(username, password)
    } else {
     success = await this.contactorService.login(username, password)
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
  }

  toggleContractor() : void {
    this.isContractor = !this.isContractor
    localStorage.setItem("isContractor", JSON.stringify(this.isContractor));
  }

}
