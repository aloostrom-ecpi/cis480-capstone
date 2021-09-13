/*
    TODO:
      login a user who has already registered
      this needs to set some kind of session storage
        or something similar to address whether user
        is admin or user
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
