/*
    TODO:
      use this as a potential action for an admin to take when 
        reviewing a reported post
      This should be pretty simple since we only need to change a
        prop of a certain user's record
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspend-user',
  templateUrl: './suspend-user.component.html',
  styleUrls: ['./suspend-user.component.css']
})
export class SuspendUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
