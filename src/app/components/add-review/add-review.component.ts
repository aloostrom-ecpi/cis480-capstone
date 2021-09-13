/*
    TODO:
      Allow a user to review a contractor
      Allow a contractor to review a user
      Enforce that any review must be completed by someone who
        interacted with the target user
      Add review to Mongo collection

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
