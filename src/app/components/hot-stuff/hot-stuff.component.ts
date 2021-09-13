/*
    TODO:
      Load the top 5 most active posts (parent)
        post activity is defined as number of posts with same parentId
      load the top 5 best rated contractors
        contractors.rating
      accept a single parameter
        return hot posts
        return hot contractors

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-stuff',
  templateUrl: './hot-stuff.component.html',
  styleUrls: ['./hot-stuff.component.css']
})
export class HotStuffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
