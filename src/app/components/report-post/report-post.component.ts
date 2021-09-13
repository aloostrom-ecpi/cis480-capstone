/*
    TODO:
      User reports a post to admins
      accept two params
        reason
        post id to report
      need to move the post to the "reportedPosts" collection
        until an admin can review
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.css']
})
export class ReportPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
