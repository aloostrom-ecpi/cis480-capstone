/*
    TODO:
      load a user or contractor's account
      present form data in non-fixed fields and allow for update if
        user.id == this.user.id || this.user.type == admin
      Allow for loading contractor accounts in future iterations
        or this one if we have the time
*/

import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-load-account',
  templateUrl: './load-account.component.html',
  styleUrls: ['./load-account.component.css']
})
export class LoadAccountComponent implements OnInit {
  private user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.logout();
  }

  test() {
    this.userService.login('owehaa5966', 'P@ssw0rd1').subscribe( res => {console.log(res); this.user = res})
  }

  login(username : string, password : string) {
    console.log(username, password);
    this.userService.login(username, password).subscribe( res => {console.log(res); this.user = res})
  }

}
