/*
    TODO:
      build up a page of notifications
      need to determine logic for what will create notification
      On read notification for this user, clear all notifications for this user
        from Mongo
      Maybe add two functions for this: 
        send notification to embed in other operations
        clear notifications to null the current user's notifications
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify-user',
  templateUrl: './notify-user.component.html',
  styleUrls: ['./notify-user.component.css']
})
export class NotifyUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
