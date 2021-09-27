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

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
