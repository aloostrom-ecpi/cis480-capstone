/*
    TODO:
      User can close own post
      Admin can close any post
      On close, take parent post and any post with parents ID as 'parentPost'
        attribute and move to closed post collection in mongo
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-post',
  templateUrl: './close-post.component.html',
  styleUrls: ['./close-post.component.css']
})
export class ClosePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
