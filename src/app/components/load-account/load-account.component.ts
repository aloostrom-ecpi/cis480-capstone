/*
    TODO:
      load a user or contractor's account
      present form data in non-fixed fields and allow for update if
        user.id == this.user.id || this.user.type == admin
      Allow for loading contractor accounts in future iterations
        or this one if we have the time
*/

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-load-account',
  templateUrl: './load-account.component.html',
  styleUrls: ['./load-account.component.css']
})
export class LoadAccountComponent implements OnInit {

  username: any;
  loadAccountForm: FormGroup;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    public formBuilder: FormBuilder,
    private crudService: CrudService) 
    {
      this.username = this.ngOnInit()

      if (this.ngOnInit() == null){
        this.ngZone.run(() => this.router.navigateByUrl('login-user'));
      } else{
          this.crudService.GetUserAccount(this.username).subscribe(res => {
            this.loadAccountForm.setValue({
              firstname: res['firstname'],
              lastname: res['lastname'],
              username: res['username'],
              email: res['email']
            })
          })
        }

      this.loadAccountForm = this.formBuilder.group({
        firstname: [''],
        lastname: [''],
        username: [''],
        email: [''],
      });
    }

  
  ngOnInit(): any { 
    console.log("Checking session");
    if (localStorage.getItem("session") == null){
      console.log("attempting to redirect");
      //this.ngZone.run(() => this.router.navigateByUrl('login-user'));
    } else {
        try{
          const {username} = JSON.parse(localStorage.session)
          console.log("Username is: "+username)
          return username
        }catch{
          console.log("sessionUser not defined. ")
        }
      }
  }
}
