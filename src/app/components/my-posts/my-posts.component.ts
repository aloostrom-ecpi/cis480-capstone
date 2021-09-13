/*
    TODO:
      accept a single param to take this.user.id
      expect to be a dedicated page similar to viewing your Facebook
        posts or Twitter timeline
      Do we want to hold onto sticky columns for this or only show posts?
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
