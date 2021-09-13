/*
    TODO:
      Responsible for creating a new post or updating a post
      Post will stay in open post collection
      accept 2 params
        post ID
        new body
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cu-post',
  templateUrl: './cu-post.component.html',
  styleUrls: ['./cu-post.component.css']
})
export class CuPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
